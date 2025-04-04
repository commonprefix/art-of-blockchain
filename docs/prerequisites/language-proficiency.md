---
title: Language Proficiency
description: Programming language requirements
---

# Proficiency in 2 Languages

Needless to say, mastering at least two programming languages is a fundamental building block for a software engineer. While you've likely already crossed this road if you're reading this document, for completeness of this studying material let's outline the path to becoming proficient on a language.

We specifically recommend mastering:

* **Rust** or **Go**: For systems-level programming and performance-critical components
* **TypeScript**: For high-level web development and smart contract interactions

This combination ensures you're equipped to handle both blockchain infrastructure development and web-based decentralized applications.

While "proficiency" can be subjective, a path to reach a strong working knowledge of these languages can be found below. The learning resources we provide will help you become familiar with language syntax and basic patterns. However, true proficiency requires practical application.

All of the material below will bring the engineers to a level that they are quite familiar with the syntax of each language but will not make the engineer proficient with the corresponding language. Thus, after actually going through the necessary material to learn the basics of each language we suggest building a websocket based chat application. You can find its description later on in the chapter. If you want to try something else, take a look at [this list of projects](https://github.com/karan/Projects#databases) that you could build. It is recommended that you focus on the databases or the web sections.

## Typescript

***

* For learning the syntax read [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) or the [Typescript Deep Dive](https://basarat.gitbook.io/typescript/type-system). (\~6h)
* Solve the 16 [Typescript Exercises](https://typescript-exercises.github.io/). (\~7h)
* Solve 20 easy problems in Typescript from either [LeetCode](https://leetcode.com/) or [CodeWars](https://www.codewars.com/). (\~3h)
* Try to build your own HTTP API that has some POST and GET endpoints using [express.js](https://expressjs.com/). (\~1h)
* Spend 2-3 hours going through the [most interesting typescript projects](https://github.com/EvanLi/Github-Ranking/blob/master/Top100/TypeScript.md) on Github.

## Go

***

* For learning the syntax you should read [Go By Example](https://gobyexample.com/). Alternatively, if you prefer an interactive learning process you can do the [Tour Of Go](https://go.dev/tour/welcome).
* Solve all of the exercises of [Head First Go](https://headfirstgo.com/).
* Solve 20 easy problems in Go from either [LeetCode](https://leetcode.com/) or [CodeWars](https://www.codewars.com/).
* Try to build your own HTTP API that has some POST and GET endpoints using [Gorilla mux](https://github.com/gorilla/mux), [Echo](https://echo.labstack.com/) or [Gin](https://github.com/gin-gonic/gin).
* Spend 2-3 hours to take a look at some interesting open-source Golang code [here](https://www.reddit.com/r/golang/comments/xeytlo/what_is_the_coolest_go_open_source_projects_you/). If you're already familiar with blockchains enjoy reading [Geth](https://github.com/ethereum/go-ethereum/).

## Rust

***

* For learning the syntax, go through the [official rust documentation](https://doc.rust-lang.org/rust-by-example/). (\~7h)
* Run locally and solve the [Rustlings](https://github.com/rust-lang/rustlings) course. (\~10h)
* Solve 20 easy problems in Rust from either [LeetCode](https://leetcode.com/) or [CodeWars](https://www.codewars.com/). (\~4h)
* Read the documentation of [Tokio](https://tokio.rs/), [Serde](https://serde.rs/), [thiserror](https://lib.rs/crates/thiserror) to learn 3 of the most used libraries in the Rust ecosystem.
* Try to build your own HTTP API that has some POST and GET endpoints using some [HTTP server](https://lib.rs/web-programming/http-server). (\~1h)
* Read our [btc-mpc](https://github.com/commonprefix/btc-mpc/) open-source code, all of the Rust we've written for the [Axelar light client](https://github.com/commonprefix/axelar-light-client). There are amazing open-source Rust projects in the blockchain space. If you are already familiar with blockchains, try your luck with the big guns: [https://github.com/paradigmxyz/reth/](https://github.com/paradigmxyz/reth/).

***

After learning each language, to ensure you've moved beyond syntax familiarity to genuine proficiency, we require completing a practical project. In each of the languages you're currently learning we recommend:&#x20;

* Building a WebSocket-based chat application. This is a very interesting project since it involves real-time communication, state management, concurrent operations and networks. The project description can be found [here](/prerequisites/chat-application-exercise).
* Alternatively, you can select a project from the databases or web sections of [this recommended project list](https://github.com/karan/Projects#databases).&#x20;

Remember, the goal is not just to complete these projects, but to implement them with proper error handling, testing, and production-quality code organization.&#x20;

> 💡 **Info**
> * Learn Typescript by following the material above (\~20h)
> * Learn Rust or Golang by following the material above (\~25h)
> * Implement a project in each one of the languages

## Optional material

Learning multiple programming languages fundamentally reshapes how you approach problem-solving in software engineering. Each language embodies different paradigms and philosophies, offering unique perspectives on how to structure code and manage different problems.&#x20;

Contributing to open source projects offers an unparalleled pathway to mastering a language that no tutorial or course can match. When you dive into an established open source codebase, you're not just reading isolated code snippets – you're observing how experienced developers structure large-scale applications, handle edge cases, and implement best practices in real-world scenarios.

Each of these languages has a huge ecosystem with many open-source projects that are beginner-friendly. Your reference for finding those is called [GoodFirstIssue](https://goodfirstissue.dev/language/rust). 