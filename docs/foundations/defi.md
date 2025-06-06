# DeFi

Decentralized Finance is a system built on blockchain technology that allows users to perform financial transactions, like lending, borrowing, and trading with cryptocurrencies.

Some well known DeFi services are briefly presented bellow, but to dive deeper into these topics, you should read the [CS251 Lecture 9](https://cs251.stanford.edu/lectures/lecture9.pdf) and [CS251 Lecture 10](https://cs251.stanford.edu/lectures/lecture10.pdf) slides.

## Staking

The rise of [Proof of Stake](https://www.investopedia.com/terms/p/proof-stake-pos.asp) blockchains gave birth to one of the most popular DeFi services: Staking. Simply put, staking lets crypto holders earn rewards by locking their funds in a dedicated wallet for a certain amount of time, and thus participating in the Proof of Stake protocol. The high barrier of entry for staking some cryptocurrencies like Ethereum which requires a minimum of 32 staked ETH to become a validator, and the complexity of setting up such nodes has led to the creation of [Staking Pools](https://www.skrill.com/en/crypto/the-skrill-crypto-academy/intermediate/what-are-staking-pools/). Other forms of staking include [Delegated Proof of Stake](https://www.coinbase.com/learn/crypto-glossary/what-is-delegated-proof-of-stake-dpos) (similar to pools) and [Liquid Staking](https://www.gemini.com/cryptopedia/what-is-liquid-staking).



## Decentralized Exchanges (DEXs)

Decentralized Exchanges are exactly what their name implies : an exchange built on top of a blockchain. Unlike centralized exchanges (CEX) like [Kraken](https://www.kraken.com/) and [Binance](https://www.binance.com/en), DEXs are non custodial. That means that the users keep control of their private keys and cryptos, and there is no need to deposit into an account owned by the exchange. In fact, there are no accounts. Instead you just connect your wallet, you choose a swap pair (e.g. ETH to USDc), you submit the swap and the rest happens on smart contracts. To understand how DEXs work under the hood, check out [this](https://cointelegraph.com/learn/articles/what-are-decentralized-exchanges-and-how-do-dexs-work) article and also read about [AMMs](https://www.gemini.com/cryptopedia/amm-what-are-automated-market-makers).

Popular DEXs include [UniSwap](https://app.uniswap.org/) for swapping [ERC20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) Tokens, [PancakeSwap](https://pancakeswap.finance/swap) for [BEP20](https://academy.binance.com/en/glossary/bep-20) Tokens (equivilent of ERC20 for Binance Smart Chain), [Orca](https://www.orca.so/) for Solana and of course many more.

## Stablecoins

Stable coins are cryptocurrencies whose value is tied to that of another currency or commodity. Usually, they are tied to some Fiat currency (government backed), like the U.S. dollar. What makes them important is the market's high volatility, since even Bitcoin often moves more than 10% in the span of a few days. Stablecoins aim to address this problem by serving as a medium of exchange and promising to hold on to their value in a variety of ways. 

- Fiat-Collateralized Stablecoins: Backed by a reserve of a fiat currency as [collateral](https://www.investopedia.com/terms/c/collateral.asp). Such reserves are maintained by independent custodians and are regularly audited. [Tether USD (USDT)](https://tether.to/en/) and [USD Circle (USDc)](https://en.wikipedia.org/wiki/USDC_(cryptocurrency)) are the two most popular ones.

- Commodity-Backed Stablecoins: Backed by the market value of commodities such as gold, silver or oil. [Tether Gold (XAUt)](https://gold.tether.to/) is one popular example.

- Crypto-Collateralized Stablecoins: Back by other cryptocurrenceies. Due to the high volatility of their reserves also being a cryptocurrency, they are generally overcollateralized, which means that the total value held in reserves greatly exceeds that of the stablecoins issued. To learn more about this category, check out [how DAI works](https://kriptomat.io/cryptocurrency-prices/dai-price/what-is/).

- Algorithmic Stablecoins: These coins maintain their value through programmed mechanisms that adjust supply based on market demand, without relying on direct collateral. Examples include [Ampleforth (AMPL)](https://www.ampleforth.org/) and Terra (UST), whose [collapse](https://corporatefinanceinstitute.com/resources/cryptocurrency/what-happened-to-terra/) is an interesting read.

## Crypto Lending

Crypto lending can be split into two categories : borrowers and investors.

 Borrowers take loans in the form of cryptocurrencies, by using their digital assets as collateral, similar to how a house is used as collateral for a mortgage. The amount of crypto you can receive is calculated based on how much collateral you can stake using [loan-to-value (LTV)](https://www.investopedia.com/terms/l/loantovalue.asp) ratio. You can avoid collateral altogether by taking [flash loans](https://www.cyfrin.io/blog/flash-loans-everything-you-need-to-know), which are repaid within the same transaction and work in a complex but cool way.

 Investors take part by depositing their cryptocurrencies into pools managed by lending platforms, and then get a part of the profits. If a borrower is unable to repay the loan, investors can sell the crypto collateral to cover losses (technically, the platform liquidates the collateral automatically based on LTV thresholds).


 ## Others
 DeFi is one of the most popular aspects of blockchains since most users have gotten into the space looking to make profit, so new services continue to emerge. [Yield Aggregators](https://www.ccn.com/education/crypto/defi-yield-aggregators-explained-how-they-work-risks-to-consider/), [Decentralized Insurance](https://hedera.com/learning/decentralized-finance/defi-insurance) and [Asset Management Protocols](https://medium.com/klarda/what-is-defi-asset-management-protocol-overview-for-newbies-9a2b402912fa) are a few examples we did not cover. 

> 💡 **Tasks**
> * Use [Uniswap](https://app.uniswap.org/) to swap $10 worth of your Ether to USDC directly through your Metamask without using a centralized exchange.
> * Check out the articles and services mentioned above and try to use some of them.
> * Read [CS251 Lecture 9 slides](https://cs251.stanford.edu/lectures/lecture9.pdf).
> * Read [CS251 Lecture 10 slides](https://cs251.stanford.edu/lectures/lecture10.pdf).
> * Create your own ERC20 token using [OpenZeppelin](https://docs.openzeppelin.com/contracts/5.x/erc20). Deploy it to main net Ethereum and mint 20 of your own tokens to your wallet.
