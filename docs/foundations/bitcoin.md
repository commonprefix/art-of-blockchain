# Bitcoin

Bitcoin is the original blockchain. It was proposed in 2008 by a pseudonymous developer named Satoshi Nakamoto and deployed in early 2009 as an open-source software project. Bitcoin introduced the first practical implementation of a decentralized timestamping mechanism using proof-of-work and a consensus-driven ledger. The system’s design was a direct reaction to centralized failure points and it sparked an entirely new field of programmable, distributed systems.

Unlike account-based models used in platforms like Ethereum, Bitcoin operates on the **[UTXO](https://www.investopedia.com/terms/u/utxo.asp) (Unspent Transaction Output)** model. Each transaction consumes one or more previous outputs and creates new ones, forming a directed acyclic graph of spendable outputs. This model enables a high degree of statelessness and p  arallelism in transaction validation, and it naturally supports features like privacy-preserving mechanisms.

Bitcoin scripting is intentionally minimal. It uses a stack-based language called **Script**, which supports primitives like time locks (`OP_CHECKLOCKTIMEVERIFY`), hashlocks (`OP_HASH160`, `OP_EQUALVERIFY`), and multi-signature authorization (`OP_CHECKMULTISIG`). These building blocks can be composed into complex contract logic such as payment channels, escrows and other structures.

Key upgrades in Bitcoin’s history include:

- **[BIP16](https://river.com/learn/terms/b/bip-16-p2sh/) (P2SH)**: Introduced Pay-to-Script-Hash to hide complex scripts behind a hash.
- **[SegWit](https://learnmeabitcoin.com/beginners/guide/segwit/) (BIP141)**: Fixed transaction malleability and laid the groundwork for scaling via second-layer protocols.
- **[Taproot](https://www.dydx.xyz/crypto-learning/what-is-taproot#:~:text=Taproot%20was%20a%202021%20update,Maxwell's%20contributions%20in%20succeeding%20years.) (BIP341)**: Enabled more private and composable smart contracts using Schnorr signatures and Merkleized script trees.

Consensus changes are rare and conservative, since tens of millions of users are affected by them. Most upgrades are implemented via [soft forks](https://www.investopedia.com/terms/s/soft-fork.asp), requiring careful coordination among miners, nodes, and developers. For the latter, Bitcoin presents a unique and intellectually rigorous environment: its ecosystem demands minimalism, careful design, and a strong grasp of cryptographic and distributed systems principles.

A good starting place to understand how Bitcoin works is [this](https://www.youtube.com/watch?v=bBC-nXj3Ng4) video by 3Blue1Brown.

> 💡 **Tasks**
> * Watch 3B1B's video.
> * Download and run the [Electrum](https://bitcoin.org/en/wallets/desktop/mac/electrum/?step=5\&platform=mac\&important=control\&user=beginner) Bitcoin wallet.
> * Use [Kraken](https://www.kraken.com/) to get yourself $20's worth of real Bitcoin on the Bitcoin main net and move them to your Electrum.
> * Read [CS251 Lecture 2 slides](https://cs251.stanford.edu/lectures/lecture2.pdf).
> * From the [Bitcoin Developer Guide](https://bitcoin.org/en/developer-reference), read the sections on Blockchain, Transaction, P2P Network, and Wallets.
> * Read [CS251 Lecture 3 slides](https://cs251.stanford.edu/lectures/lecture3.pdf).
> * Read Satoshi Nakamoto's [original whitepaper](https://bitcoin.org/bitcoin.pdf) that introduced Bitcoin and blockchains. The full paper is easy to read and understand.
> * Read the [Beginners](https://learnmeabitcoin.com/beginners/) chapter of [learn me a bitcoin](https://learnmeabitcoin.com/), excluding the [SegWit](https://learnmeabitcoin.com/beginners/guide/segwit/) section.
> * Read the [Bitcoin entry](https://en.bitcoin.it/wiki/Bitcoin) of the reference. Which facts are relevant to other blockchains and which are unique to Bitcoin (and its clones)? (Outdated, please do not rely on it for post-taproot information.)
> * Read about [transaction confirmation](https://en.bitcoin.it/wiki/Confirmation).
> * Read and understand the logic of a simple [binary option contract](https://en.bitcoin.it/wiki/Binary_options) in Bitcoin. What steps does the Oracle take in each of the two contract versions? Do these solutions have any privacy/security issues? If so what?
> * Read the Wikipedia page on the [Lightning Network](https://en.wikipedia.org/wiki/Lightning_Network).
