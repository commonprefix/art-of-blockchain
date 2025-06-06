# Ethereum

Ethereum is the first general-purpose blockchain platform. Proposed by Vitalik Buterin in late 2013 and launched in July 2015, Ethereum introduced the concept of *programmable money* through **smart contracts** — self-executing code that lives on the blockchain. Unlike Bitcoin, which uses a minimal scripting language, Ethereum was designed from the ground up as a **Turing-complete virtual machine**, allowing for complex application logic to be deployed directly on-chain. Your first read should be [Ethereum's official introduction](https://ethereum.org/en/what-is-ethereum/), with the official [Ethereum whitepaper](https://ethereum.org/en/whitepaper/) being a good (and lengthy) follow-up.

Ethereum's architecture is based on an [account-based model](https://blog.defichain.com/what-is-ethereums-accounts-based-model-and-how-does-it-work/), where each address has a balance and associated state. This contrasts with Bitcoin’s UTXO model and makes Ethereum more intuitive for developers familiar with traditional systems. Ethereum smart contracts are written in high-level languages like **Solidity** or **Vyper**, compiled down to bytecode, and executed on the [Ethereum Virtual Machine](https://www.bnbchain.org/en/blog/what-is-evm-in-crypto) (EVM). To get a good grasp of how Solidity works, read through the [Introduction to Smart Contracts](https://docs.soliditylang.org/en/v0.8.20/introduction-to-smart-contracts.html) and try to code along.

The Ethereum ecosystem has evolved rapidly, giving rise to:
- [DeFi](https://www.investopedia.com/decentralized-finance-defi-5113835) (Decentralized Finance): lending, swaps, stablecoins
- [NFTs](https://www.investopedia.com/non-fungible-tokens-nft-5115211): on-chain ownership of digital assets
- [DAOs](https://www.investopedia.com/tech/what-dao/): programmable governance
- [Layer 2](https://ethereum.org/en/developers/docs/scaling/): scaling solutions like Arbitrum, Optimism, and zkSync 

Key Differences Compared to Bitcoin:
|                    | Bitcoin                                  | Ethereum                                   |
|--------------------------|------------------------------------------|--------------------------------------------|
| Model                    | UTXO                                      | Account-based                               |
| Smart Contract Support   | Minimal (Script)                         | Turing-complete (EVM)                      |
| Primary Use Case         | Store of value, money                    | General-purpose programmable platform      |
| Supply Cap               | Fixed (21M BTC)                          | No hard cap                                |
| Consensus (current)      | Proof of Work | Proof of Stake (since "The Merge")     |

Ethereum has undergone a lot of upgrades, which are split into two main categories: ERC updates and protocol/EIP updates.  
EIPs are mandatory protocol updates while ERCs are optional features (e.g. [ERC-20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) and [ERC-721](https://ethereum.org/en/developers/docs/standards/tokens/erc-721/)).  

Key upgrades in Ethereum's history include:

- **[Homestead (2016)](https://blog.ethereum.org/2016/02/29/homestead-release)**: Ethereum Launch / First stable release.
- **[EIP-1559 (2021)](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md)**: Changed Ethereum’s gas fee model by introducing base fees and burning a portion of fees.
- **[The Merge (2022)](https://ethereum.org/en/upgrades/merge/)**: Transition from Proof of Work to Proof of Stake.
- **[Shanghai (2023)](https://www.investopedia.com/what-is-the-ethereum-shanghai-upgrade-7099021)**: Introduced staked ETH withdrawals.




> 💡 **Tasks**
> * Read [Ethereum’s official introduction](https://ethereum.org/en/what-is-ethereum/).
> * Read the original [Ethereum whitepaper](https://ethereum.org/en/whitepaper/).
> * Go through the Solidity [“Intro to Smart Contracts”](https://docs.soliditylang.org/en/v0.8.20/introduction-to-smart-contracts.html).
> * Use [Remix IDE](https://remix.ethereum.org) to deploy a simple `HelloWorld` contract.
> * Install and set up [Hardhat](https://hardhat.org/) or [Foundry](https://book.getfoundry.sh/) for local development.
> * Explore block explorers like [Etherscan](https://etherscan.io/) to understand how contracts, transactions, and tokens are tracked.
> * Read about [ERC-20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) and [ERC-721](https://ethereum.org/en/developers/docs/standards/tokens/erc-721/) token standards.
> * Learn how [The Merge](https://ethereum.org/en/upgrades/merge/) changed Ethereum’s consensus and energy profile.
> * Review Ethereum's [Developer Portal](https://ethereum.org/en/developers/) and pick a track (e.g., frontend, core, DeFi, L2).
> * Understand how Layer 2s work by reading [L2Beat](https://l2beat.com/) and trying apps on Arbitrum or Optimism testnets.


