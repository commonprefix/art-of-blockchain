# Bitcoin

> 💡 **Tasks**
> * Install the full-node self-custodian Bitcoin wallet [Bitcoin Core](https://bitcoin.org/en/wallets/desktop/mac/bitcoincore/?step=5\&platform=mac\&important=control,validation). Run it so that it downloads and validates the whole Bitcoin main net blockchain.
> * Read the [Technical](https://learnmeabitcoin.com/technical/) chapter of [learn me a bitcoin](https://learnmeabitcoin.com/).
> * Read about [hierarchical deterministic wallets](https://en.bitcoin.it/wiki/Deterministic_wallet), the solution to key management.
> * Read about [hashlocks](https://en.bitcoin.it/wiki/Hashlock).
> * Read about [OP_RETURN](https://en.bitcoin.it/wiki/OP_RETURN), or how to store data on Bitcoin.
> * Use [Script](https://en.bitcoin.it/wiki/Script) as reference when writing Bitcoin scripts.
> * Read about [difficulty](https://en.bitcoin.it/wiki/Difficulty) and its adjustment.
> * Read about [pooled mining](https://en.bitcoin.it/wiki/Pooled_mining).
> * Learn how [weight units](https://en.bitcoin.it/wiki/Weight_units) work.
> * Read about [Bitcoin Improvement Proposals (BIPs)](https://en.bitcoin.it/wiki/Bitcoin_Improvement_Proposals), the mechanism through which Bitcoin evolves.
> * Read about [soft forks](https://en.bitcoin.it/wiki/Softfork), or how Bitcoin nodes are upgraded.
> * Some history:
>   * [Value overflow incident](https://en.bitcoin.it/wiki/Value_overflow_incident)
>   * [Block size controversy](https://en.bitcoin.it/wiki/Block_size_limit_controversy) a.k.a. blocksize wars
> * Read about [miniscript](https://bitcoin.sipa.be/miniscript/), a mini-language for writing a subset of Bitcoin contracts with better guardrails.

Exercises:
* "[Bitcoin Programming](https://kkarasavvas.com/assets/bitcoin-textbook.pdf)" book by Konstantinos Karasavvas (mostly tx building):
  * 1.1 "[...] using bitcoin-cli"
  * 1.2, 2 versions: one as written, the other with "legacy" -> "taproot/Bech32m"
  * 1.3-1.6
  * 5.3-5.4
  * 6.2
  * 6.3
  * 6.4 & 6.5, 2 versions each: one as written, the other with "P2SH" -> "P2TR/PayToTapRoot"
  * 6.6 & 6.7, 2 versions each: one as written, the other with "scriptSigs" -> "witnesses"
  * 6.9 & 6.10, 2 versions each: one as written, the other with "P2WSH" -> "P2TR/PayToTapRoot"
  * 6.17
  * 7.1-7.5
* The "Programming Bitcoin: Learn How to Program Bitcoin from Scratch" [book](https://www.oreilly.com/library/view/programming-bitcoin/9781492031482/) and accompanying [repository](https://github.com/jimmysong/programmingbitcoin) by Jimmy Song has a bit of everything but was published before taproot. There are solutions in the repository. Chapters 1-3 are mathematical & cryptographic background for Bitcoin signatures and Chapter 4 is low-level handling of keys and similar. Chapter 5 is for parsing txs. These are usually handled by libraries. For later chapters, exercises that implement functionality already available in libraries are marked with *.
* Finite fields
  * 1.1-1.3
  * 1.5-1.7
* Elliptic curves
  * 2.1-2.2
  * 2.4-2.7
* EC cryptography
  * 3.1-3.5
  * 3.6 & 3.7, 2 versions each: one with hand-rolled verification and one using libraries
* Serialization
  * 4.1 & 4.2
  * 4.4
  * 4.5, 2 versions: one with legacy and one with taproot addresses
  * 4.6
  * 4.9, this exercise links what we've learned up to now with real Bitcoin
* Transactions
  * 5.1-5.6
* Script
  * 6.1 & 6.2
  * 6.3 & 6.4, for better understanding of Script.
* TX creation & validation
  * 7.1-7.5
* P2SH
  * 8.3
* Blocks
  * 9.1-9.5
  * 9.8-9.13
* Networking
  * 10.1-10.6
* SPV
  * 11.1-11.7