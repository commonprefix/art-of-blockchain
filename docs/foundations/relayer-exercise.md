# Relayer Exercise

This exercise involves building a Relayer, an always-on application that acts as middleware for transferring messages or tokens between different chains. We recommend that you use Rust or some other system-level programming language. More information about relayers can be found [here](https://antiersolutions.medium.com/the-role-of-blockchain-relayer-in-transforming-financial-systems-ca2776dd761f).

Your first focus should be to construct a working product, in its simplest form. Let's set a few milestones:

### Source and Destination Chains
First, you need to run two chains locally, in order to be able to test that our design works. You can deploy two local Ethereum chains using [Anvil](https://medium.com/@maria.magdalena.makeup/foundry-anvil-a-local-ethereum-node-for-development-642ca28f7892).
Run `anvil --port 8545` and `anvil --port 8546` in two different terminals and keep them running, and we will call them chain A and chain B.

### Smart Contract Deployment
There will be two contracts living in different anvil chains, let's call them *Deposit* and *Token*. The goal is to simulate a [Token Bridging](https://www.kaleido.io/blockchain-blog/what-is-bridging), without going too deep into the Contract logic. To do that, you will trigger a function in *Deposit* and have it emit an event called *Deposited*. Then, the relayer will capture that event, and relay it to the other chain. Specifically, it will trigger a function in *Token*, which will emit an Event called *Minted*.

The contracts and the deployment scripts can be found [here](https://github.com/Deiadara/EventContracts), However, it's a useful exercise to try to deploy them with your own code using [ethers](https://docs.ethers.org/v5/). Make sure your script saves the addresses where the contracts have been deployed, as well as their ABIs, so that you can interact with them later.

Contracts:
```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

contract Deposit {
    // Event declaration
    // Up to 3 parameters can be indexed.
    // Indexed parameters help you filter the logs by the indexed parameter
    event Deposited(address indexed sender, string amount);

    function deposit(string memory amount) public {
        emit Deposited(msg.sender, amount);
    }
}
```

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

contract Token {

    event Minted(address indexed sender, string amount);

    function mint(string memory amount) public {
        emit Minted(msg.sender, amount);
    }   
    
}
```
### Relayer
The most straight forward design to start with is the monolithic one for the Relayer. You need to monitor chain A for any events emitted which have the signature you are looking for, in this case `Deposited(address,string)`. If you are using Rust, [alloy](https://docs.rs/alloy/latest/alloy/) is your go-to library to interact with Ethereum. Once you have captured such an event (or more specifically a transaction with that event in its [logs](https://developers.moralis.com/ethereum-logs-and-events-what-are-event-logs-on-the-ethereum-network/)), you need to trigger the event emission in chain B. After checking that the receipt of that final transaction has status == 1, you have a working product to build on top of. You can also spawn the anvil chains using the flag `--block-time 0.1` which will produce blocks in the background, ensuring your code works in a more realistic environment.

### Subscriber and Includer
It is generally good practice to separate the components of a large system and have them work independently of each other. A first step towards that is to split the relayer in two parts : a Subscriber and an Includer.

The subscriber is responsible for monitoring chain A for any transactions which include the desired *Deposited* event. Once it finds one or more such transactions, it will notify the Includer, whose responsibility is to trigger the emission of the *Minted* event. These components should be objects in the code, and include in their fields the connections to any other services we might deploy later on, so that new ones won't be created all the time.

### Queue
With the current setup, while there is some seperation of logic, the Includer still directly depends on the corresponding Subscriber in order to do anything. It is preferable that they are agnostic to each other, so that if one went offline, the other would keep working normally. That is especially useful when there are multiple instances of the relayer running in parallel to handle a large volume of transactions.

This is where a Queue comes into play. Deploy an instance of [rabbitMQ](https://www.rabbitmq.com/), which is one of the most popular brokers in the industry. The Subscriber will now post these transactions in the queue, and then the Includer will asynchronously consume them. This way, it is possible to have two different binaries, includer_main and subscriber_main, hence achieving a complete decoupling of the two services. Ideally, the Queue should also receive the entries as bytes and not as a specific type of object, so that different types of transactions or messages can be processed and later deserialized by the Consumer.

### Database
There are many needs for a database in these kinds of systems. A straightforward one is logging all the transactions the relayer processed along with metadata like the gas costs etc. There is another more specific use case : handling restarts gracefully and continuing from where the service left off. When a Subscriber restarts, we wouldn't want it to start searching the entire blockchain from the beginning of time and re-including all old transactions. Thus, it needs to save the latest block it has scanned and continue from there (or maybe a bit earlier to avoid problems when it comes to [reorgs](https://medium.com/@nicolas.vargas_35315/what-are-blockchain-reorgs-and-how-to-detect-them-when-consuming-nodes-762300f4512e), but still make sure that it doesn't re-publish anything).

For these cases, you can either use [Redis](https://redis.io/) if you want a noSQL database or [postgreSQL](https://www.postgresql.org/) if you want a more traditional one. Make sure a connection to the DB (and the Queue) are instantiated once on launch and then they get reused whenever necessary.

### Testing
A really important part of systems, especially ones that interact with blockchains, is having good and complete tests. Create unit tests to test each function individually, and then build integration tests which verify the complete flow of different components. A useful library in Rust to get familiar with is [mockall](https://docs.rs/mockall/latest/mockall/), which creates Mock(fake) instances of Connections, Objects etc based on Traits you have defined and makes testing a lot easier.

### Further Improvements and Tips
* Abstract the DB and Queue Connections so that the Subscriber and the Includer implement a specific interface. Changing from one Queue service to another should be easy, and not require many changes in the code, just in the config.
* Implement custom errors for each case and each service (e.g. RedisError, RelayerError). Also make sure that you handle them correctly, so that the system always stays up and working despite unforeseen circumstances.
* Make a GitHub repository and try to treat the project as if you were working on it as part of a company. Follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), make new branches for new features etc
* Load test your system to evaluate robustness, identify bottlenecks and then try to come up with ways to scale it even further.

You can find a working relayer built for educational purposes [here](https://github.com/Deiadara/Relayer). This design can be improved upon substantially, and it's here as a blueprint to help you when you are stuck. Still, it's up to you to implement your own ideas and techniques that you learnt on your version of the relayer and try to surpass that one. 

Make sure to share your working relayer with us to receive feedback and some praise for your effort!