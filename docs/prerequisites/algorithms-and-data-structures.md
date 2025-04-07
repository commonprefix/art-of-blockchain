---
icon: pen-to-square
---

# Algorithms & Data Structures

> ⏱️ **Estimated Completion Time**: 10-12 hours



Before diving into the blockchain technology, it's essential to have a solid foundation in algorithms and data structures. Blockchain systems are built upon sophisticated combinations of data structures (like Merkle trees and hash chains) and algorithms (including consensus mechanisms and cryptographic protocols). Without understanding how to implement and analyze these fundamental computer science concepts, grasping the intricacies of blockchain architecture would be like attempting to build a skyscraper without knowing the properties of steel and concrete.

When you encounter concepts like mining algorithms, smart contract execution, or distributed consensus, you'll need to understand algorithmic complexity to evaluate their efficiency. In addition to that, blockchain nodes handle terabytes of complicated data. Thus, we need a deep understanding of how data can be organized, stored, and retrieved efficiently, before we proceed to blockchain-related knowledge

In addition to that, understanding algorithmic complexity becomes critical in blockchain development, where inefficient code can lead to excessive gas costs and network congestion. A seemingly minor O(n²) operation in a smart contract could translate to astronomical transaction fees when the network scales, making it essential to optimize algorithms before deploying them to the blockchain where code changes are often irreversible and costly.

The article [A Gentle Introduction to Algorithm Complexity Analysis](https://discrete.gr/complexity/) serves as an excellent starting point for those seeking to understand how algorithms scale under different conditions.

Following complexity analysis, a good problem aggregator for learning basic data structures and algorithms is [Strivers A2Z DSA](https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2).

During the algorithms section, adopt a structured approach to maximize your learning. For each problem, spend 5-10 minutes attempting to solve it independently before looking at any solutions. Remember that the real learning happens during these moments of struggle, so resist the temptation to jump straight to the answers.

After making a genuine attempt, if you're still stuck, read through the approach explanation in the article and try implementing the solution yourself. Once you've solved the problem, return to the article and thoroughly review all aspects, including both the naive and optimal solutions. This comprehensive review will help you understand different approaches and their trade-offs. Rather than giving up quickly on challenging problems, embrace the difficulty as an essential part of the learning process.

You should complete the following sections of this course. If you're already familiar with some concepts or want an extra challenge, try implementing the algorithms in a language you just learned in the [first chapter](/prerequisites/language-proficiency) (e.g., implement the data structures listed below in Rust to better understand its pointers and ownership rules).

| Step                       | Lecture                  | Studying                                                                     |
| -------------------------- | ------------------------ | ---------------------------------------------------------------------------- |
| Step 1: Learn the basics   | 4: Know basic maths      | Solve at least 4 problems                                                    |
|                            | 5: Learn basic recursion | Solve at least 4 problems                                                    |
|                            | 6: Hashing Theory        | Read the article, and solve the next 2 problems                              |
| Step 3: Arrays             | 1: Easy                  | Solve 3 problems                                                             |
|                            | 2: Medium                | Solve 3 problems                                                             |
|                            | 3: Hard                  | Solve 1 problem                                                              |
| Step 4: Binary Search      | 1: BS on 1D arrays       | Solve 3 problems                                                             |
|                            | 2: BS on Answers         | Solve 1 problem                                                              |
| Step 6: Linked List        | 1: Single LL             | Read first problem, solve 2, 3                                               |
|                            | 2: Double LL             | Read first problem, solve 2, 3                                               |
| Step 12: Greedy algorithms | 1: Easy                  | Solve 3 problems                                                             |
|                            | 2: Medium                | Solve 2 problem                                                              |
| Step 13: Binary trees      | 1: Traversals            | Read introduction to trees and do preorder and postorder traversal problems. |
|                            | 2 Medium                 | Solve 3 problems                                                             |
| Step 15: Graphs            | 1: Learning              | Read graphs and types, graph representation in C++, BFS and DFS              |
|                            | 2: Problems BFS/DFS      | Solve 4 problems                                                             |

> 💡 **Tasks**
> * Read the [complexities](https://discrete.gr/complexity/) article
> * Solve [Strivers A2Z DSA](https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2) problems listed in the table above

## Optional material

This curriculum covers only fundamental data structures and algorithms to keep the scope manageable. There's a vast field of computer science dedicated to advanced algorithms and data structures that goes far beyond these basics. Additionally, competitive programming represents another level of algorithmic problem-solving, where these concepts are applied in more complex and challenging ways. If you find yourself interested in diving deeper, you can explore these advanced topics and the competitive programming scene after mastering these fundamentals. Well-written books to get you started include:

* [Algorithms](http://algorithmics.lsi.upc.edu/docs/Dasgupta-Papadimitriou-Vazirani.pdf) by Papadimitriou et al.
* [Introduction to Algorithms](https://dl.ebooksworld.ir/books/Introduction.to.Algorithms.4th.Leiserson.Stein.Rivest.Cormen.MIT.Press.9780262046305.EBooksWorld.ir.pdf) (CLRS)
* [Algorithm Design](https://github.com/aforarup/interview/blob/master/Data%20Structures%20and%20Algorithm/Algorithm%20Books/Algorithm%20Design%20by%20Jon%20Kleinberg,%20Eva%20Tardos.pdf) by Eva Tardos et al.

In addition [Introduction to Computation](https://fuuu.be/polytech/INFOF408/Introduction-To-The-Theory-Of-Computation-Michael-Sipser.pdf) by Michael Sips**er** stands as a foundational text that goes beyond mere complexity analysis, offering a deep dive into the very nature of computation itself. This seminal work serves as a cornerstone for understanding not just how algorithms perform, but what is fundamentally computable in computer science.
