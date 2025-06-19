# Cosmos

Cosmos Network is an interoperable and scalable blockchain ecosystem developed in 2016 by Jae Kwon(co-founder of [Tendermint](https://tendermint.com/)) and Ethan Buchman.

The Cosmos SDK is a flexible framework built in Golang that lets developers create their own blockchains using Tendermint's consensus engine. Think of it as a toolkit that emphasizes modularity and security, similar to how npm works for JavaScript applications. It started as a simple framework but has evolved into a powerful platform for building custom blockchains.
Some of the most useful building blocks it offers to developers are:
- [EVM](https://evm.cosmos.network/): A module which adds Ethereum-compatible smart contract execution.
- [WASM](https://cosmwasm.com/): A module for WebAssembly, which allows you to write smart contracts in languages like Rust, then compile it to WASM Bytecode and deploy it to safely run inside a VM.
- [Tendermint](https://tendermint.com/): A BFT Consensus Engine that handles block production, validator coordination and P2P networking.
- [GOV](https://docs.cosmos.network/v0.46/modules/gov/): A module that enables on-chain governance, allowing token holders to submit and vote on proposals, upgrade the chain and other features.
- [Auth](https://docs.cosmos.network/main/build/modules/auth): A module for authentication of accounts and transactions for applications.
- [Staking](https://docs.cosmos.network/main/build/modules/staking) and [Slashing](https://docs.cosmos.network/main/build/modules/slashing): Proof of Stake related functions.
- [Mint](https://docs.cosmos.network/main/build/modules/mint): A module for creating new tokens.

A primary characteristic of the Ecosystem is [Interoperability](https://www.coinbase.com/learn/crypto-glossary/what-is-blockchain-interoperability). The original Cosmos blockchain that connects other Cosmos chains via the [Inter-Blockchain Communication Protocol](https://tutorials.cosmos.network/academy/3-ibc/1-what-is-ibc.html) (IBC) is the [Cosmos Hub](https://hub.cosmos.network/main) (with ATOM being its native cryptocurrency). Some projects built on top of it include:
- [Osmosis](https://osmosis.zone/): A [DEX](https://www.coinbase.com/learn/crypto-basics/what-is-a-dex) to swap between tokens of the Ecosystem.
- [The Secret Network](https://scrt.network/): A chain with privacy-preserving smart contracts.
- [Axelar](https://www.axelar.network/): A "bridge chain" mainly used for interoperability between other chains.
- [Celestia](https://celestia.org/): A chain offering data availability.

As always, a good first read is the official [Cosmos SDK Docs](https://docs.cosmos.network/main/learn), specifically the [Introduction](https://docs.cosmos.network/main/learn/intro/overview) and [Beginner](https://docs.cosmos.network/main/learn/beginner/app-anatomy) sections. Once you have familiarized yourself with the Interchain, go through the [Cosmos Hands-on Exercise](https://tutorials.cosmos.network/hands-on-exercise/0-native/#) and code along. Make sure to also check any parts of the [Tutorials](https://tutorials.cosmos.network/tutorials/1-tech-terms/) section that might be useful for the exercise.

Finally, create your own Escrow Smart Contracts by completing the [CosmWasm101](https://github.com/InjectiveLabs/CosmWasm101/) tasks. 

> 💡 **Tasks**
> * Download and install [Keplr](https://www.keplr.app/) and configure it for ATOM if it is not the default.
> * Get yourself $20 worth of ATOM from Kraken or some other exchange and transfer them to your Keplr account.
> * Go through the Introduction and Beginner sections of the [Cosmos SDK Docs](https://docs.cosmos.network/main/learn).
> * Create your own chain by following the [Cosmos Hands-on Exercise](https://tutorials.cosmos.network/hands-on-exercise/0-native/#).
> * Experiment with all the modules the Cosmos SDK has to offer by adding them to your chain.
> * Create your own smart contracts by going through the [CosmWasm101](https://github.com/InjectiveLabs/CosmWasm101/) tasks.

## Optional

For those looking to understand the Tendermint consensus a little more, read [this](https://docs.tendermint.com/master/introduction/what-is-tendermint.html) section of [Tendermint Core](https://docs.tendermint.com/master/introduction/what-is-tendermint.html), and any other sections that might seem interesting to you.

Additionally, you can find a brief history of the Cosmos chain [here](https://blog.cosmos.network/cosmos-history-inception-to-prelaunch-b05bcb6a4b2b).

