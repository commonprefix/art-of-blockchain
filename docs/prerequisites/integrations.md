---
icon: plug-circle-plus
---

# Relational / Non-relational DBs

We need to store our data somewhere. From the core node implementations, to the various indexers all around the space, we are constantly playing with an overwhelming amount of data that we need to store somewhere.&#x20;

Relational databases, while seemingly unrelated to blockchain technology, hold immense value for blockchain engineering. Blockchains are decentralized and immutable, but many applications built on top of them—such as decentralized finance platforms, supply chain tracking systems, or gaming ecosystems—still require off-chain components for optimal performance. These off-chain systems often rely on relational databases for tasks such as indexing blockchain data for fast retrieval, managing metadata that are not stored on-chain, or providing robust querying capabilities.

On the other hand, NoSQL databases like LevelDB, implemented in Bitcoin Core and Geth, handle the blockchain's native data structures more naturally. These databases excel at storing serialized block data, merkle trees, and rapidly evolving smart contract states. A practical example is how Ethereum nodes use LevelDB to maintain their state trie, where the schema-less nature of NoSQL perfectly accommodates the varying structures of account states and contract storage.

### Relational Databases

***

Most off-chain data out there, from indexers to off-chain components of DApp applications use relational databases. SQL is useful on every software domain. That's why we recommend:

* You should master the [SQLBolt](https://sqlbolt.com/) documentation.
* After learning SQL you should definitely set up your own PostgreSQL server and solve the [PGExercises](https://pgexercises.com/gettingstarted.html) on your local machine (check the “I want to use my own Postgres machine” section).

### Non Relational Databases

***

Multiple node implementations are also employing NoSQL databases for unstructured data and blazingly fast read operations. Our recommendations:

* Read about [NoSQL databases](https://www.mongodb.com/resources/basics/databases/nosql-explained) from the MongoDB blog.
* Read about [Redis](https://redis.io/) and go through the [Redis University](https://university.redis.io/learningpath/14q8m6gilfwltm) Course.
* Read about [LevelDB](https://github.com/google/leveldb/blob/main/doc/index.md) and see why [Geth uses LevelDB](https://geth.ethereum.org/docs/fundamentals/databases).

> 💡 **Info**
> - Read the [SQLBolt](https://sqlbolt.com/) documentation and solve the [PGExercises](https://pgexercises.com/gettingstarted.html) locally
> - Read about [NoSQL](https://www.mongodb.com/resources/basics/databases/nosql-explained) databases from MongoDB and the [LevelDB](https://www.mongodb.com/resources/basics/databases/nosql-explained) documentation&#x20;
> - Go through the [Redis University](https://university.redis.io/learningpath/14q8m6gilfwltm) Course (\~2h)

## Optional

Database expertise requires understanding both the inner workings of database management systems (DBMS) and the principles of efficient database design. The [Database System Concepts](https://www.db-book.com/) book is the most popular resource from the DBMS architecture to schema optimization for minimal redundancy and maximum query performance.&#x20;

In addition to the theoretical knowledge, to gain practical experience in querying databases, we recommend setting up a [Dune Analytics](https://dune.com/) account and exploring queries across the ecosystem's [most active databases](https://docs.dune.com/data-catalog/overview).