# Blockchain Basics

Now that you have the prerequisites out of the way, let's get to the matter at hand: Understanding and programming blockchains. There are numerous blockchain ecosystems out there that are at the centerfold of what we do. Each ecosystem features its own platforms, programming languages, APIs, RPCs, programming patterns, and culture. As a blockchain developer, you should know the basics of all important ecosystems, and then specialize in one or more.

The most important ecosystems are:

* **Bitcoin :** The first blockchain, the original cryptocurrency, and still the largest cryptocurrency by market cap. Likely the safest. Some think it's still the only one worth speaking about! The Bitcoin ecosystem uses C++. The execution layer uses the UTXO model. Smart contracts can be programmed in Bitcoin Script and miniscript.
* **Ethereum :** Probably the most interesting and widespread programmable blockchain today, Ethereum offers Turing-complete programmability and smart contracts. Most of its ecosystem uses Rust and Go. The execution layer uses the accounts model. Smart contracts can be programmed in Solidity and compile to EVM. The endpoints use EVM-compatible RPC.
* **Cosmos :** An SDK by which you can make your own chains. Many chains have been made using Cosmos. It's probably the easiest platform to use to make a new chain from scratch. Most of the ecosystem uses Go. Smart contracts can be written using any language such as Rust and compiled to WASM.

Other ecosystems include Solana, implemented in Rust, and Cardano, implemented in Haskell. They each use their own smart contract platform.

Before you get into programming specific blockchains, it's good to know a bit of the basic theory. Towards this, we recommend a few university courses:

* Stanford's [CS251](https://cs251.stanford.edu/) by Dan Boneh
* Stanford's [EE374](https://ee374.stanford.edu/) by Dionysis Zindros and David Tse
* The University of Vienna [course](https://drive.google.com/file/d/1cqDhD3D52M163h1eM9Sojb6hP3oRur63/view?usp=drive_link) by Zeta Avarikioti and Matteo Maffei
* The University of Edinburgh [Blockchain Course](https://www.inf.ed.ac.uk/teaching/courses/bdl/) by Dimitris Karakostas and Aggelos Kiayias

The [Decentralized Thoughts](https://decentralizedthoughts.github.io/) blog is a great resource for learning about distributed and decentralized systems. The whole blog is a treasure of good material presented in a digestable fashion while keeping mathematical correctness.

* Read [CS251 Lecture 1](https://cs251.stanford.edu/lectures/lecture1.pdf) slides
* Read the following Decentralized Thoughts blog posts:
  * [What is Consensus?](https://decentralizedthoughts.github.io/2019-06-27-defining-consensus/)
  * [Synchrony, Asynchrony, and Partial Synchrony](https://decentralizedthoughts.github.io/2019-06-01-2019-5-31-models/)
  * [The Power of the Adversary](https://decentralizedthoughts.github.io/2019-06-07-modeling-the-adversary/)
  * [The Threshold Adversary](https://decentralizedthoughts.github.io/2019-06-17-the-threshold-adversary/)
  * [Consensus for State Machine Replication](https://decentralizedthoughts.github.io/2019-10-15-consensus-for-state-machine-replication/)

> 💡 **Info**
> - Finish the assigned readings above
