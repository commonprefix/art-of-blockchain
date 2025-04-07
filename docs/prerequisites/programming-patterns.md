---
icon: hand-pointer
---

# Programming Patterns

Software design patterns are reusable solutions to common problems that arise during the design of software applications. The knowledge of design patterns is also what distinguishes a senior software engineer from a junior coder.

That being said, in distributed systems like blockchains, where nodes need to handle complex peer-to-peer communication, state synchronization, and consensus mechanisms, design patterns provide battle-tested solutions for critical challenges. You'll need patterns like Observer for handling block and transaction propagation and Factory patterns for node instantiation across different network configurations. Without solid design patterns, a blockchain node can quickly become an unmaintainable mess of spaghetti code that's prone to bugs and difficult to upgrade.

The foundation of design patterns was laid by the "Gang of Four" in their seminal 1994 book "Design Patterns: Elements of Reusable Object-Oriented Software." Their collection of 23 patterns remains fundamental to software architecture and is organized into three categories:

1. **Creational**: The design patterns that deal with the creation of an object.
2. **Structural**: The design patterns in this category deals with the class structure such as Inheritance and Composition.
3. **Behavioral**: This type of design patterns provide solution for the better interaction between objects, how to provide loose coupling, and flexibility to extend easily in future.

Our favorite resource for mastering design patterns using the GoF separation is the [Refactoring Guru.](https://refactoring.guru/) Even though we would suggest that you read the whole Guru website the essential patterns are :

* Creational: [Singleton](https://refactoring.guru/design-patterns/singleton), [Builder](https://refactoring.guru/design-patterns/builder), [Factory](https://refactoring.guru/design-patterns/factory-method)
* Structural: [Proxy](https://refactoring.guru/design-patterns/proxy), [Bridge](https://refactoring.guru/design-patterns/bridge), [Flyweight](https://refactoring.guru/design-patterns/flyweight), [Facade](https://refactoring.guru/design-patterns/facade)
* Behavioral: [Observer](https://refactoring.guru/design-patterns/observer), [Mediator](https://refactoring.guru/design-patterns/mediator), [Visitor](https://refactoring.guru/design-patterns/visitor)

Once again, a good exercise would be to try implementing the pseudocode provided on the site using a language from the [Proficiency in 2 Languages](language-proficiency.md) chapter. You can also refer to the [Code Examples](https://refactoring.guru/design-patterns/examples) which do exactly that.

> 💡 **Info**
> * Read and understand all of the patterns mentioned above (\~4h)

## Optional

For those who want to dive deeper into design patterns, we highly recommend reading the complete [Design Patterns: Elements of Reusable Object-Oriented Software](https://github.com/GunterMueller/Books-3/blob/master/Design%20Patterns%20Elements%20of%20Reusable%20Object-Oriented%20Software.pdf) by the Gang of Four.

To complement the theoretical knowledge from the book with practical implementations, we've found [this repo](https://github.com/mutasim77/design-patterns) to be particularly valuable, as it provides simple and modern code examples of each pattern.
