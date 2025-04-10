---
icon: timeline
---

# Queues

> ⏱️ **ETC**: 2 hours



Message queues are a fundamental building block of modern distributed systems, and they're particularly critical in blockchain infrastructure where different components often need to operate at varying speeds and scales.

Let's examine a node example in pseudocode to understand why slower components would bottleneck faster ones without message queues:

```python
async def process_new_block(block):
    await validate_block(block) # Fast
    await update_state(block) # Slow
    await index_transactions(block) # Very slow
    await notify_subscribers(block) # Network I/O - unpredictable
```

Without queues, this sequential processing creates bottlenecks:

* Fast validation (100ms) must wait for slow indexing (10s)
* Network failures in notification can block the entire pipeline

That's why message queues are a mandatory building tool in the blockchain space. By employing queues, we achieve:
* Parallel processing of different operations
* Independent scaling of workers based on the load of specific operations
* The ability to isolate faults between components

Even though there are many queue implementations available, understanding how RabbitMQ works is sufficient to get familiar with the queueing logic.

To familiarize yourself with queues, we suggest the following material:

* Learn the basics of queues and set up your own RabbitMQ by following [Part 1](https://www.cloudamqp.com/blog/part1-rabbitmq-for-beginners-what-is-rabbitmq.html) and [Part 2](https://www.cloudamqp.com/blog/part2-2-rabbitmq-for-beginners_example-and-sample-code-node-js.html) (NodeJS) of CloudAMQP
* Check out how to [set up RabbitMQ](https://www.rabbitmq.com/tutorials) in the language of your choice
* Dive deeper into different queue protocols and policies by reading [this article](https://kisztof.medium.com/rabbitmq-an-introduction-to-message-queuing-protocols-and-policies-cb6073c7a3d6)

> 💡 **Tasks**
> - Read [Part 1](https://www.cloudamqp.com/blog/part1-rabbitmq-for-beginners-what-is-rabbitmq.html) of CloudAMQP
> - Read [Part 2](https://www.cloudamqp.com/blog/part2-2-rabbitmq-for-beginners_example-and-sample-code-node-js.html) of the RabbitMQ introduction for NodeJS or [this tutorial](https://www.rabbitmq.com/tutorials) for other languages
> - Read [this post](https://kisztof.medium.com/rabbitmq-an-introduction-to-message-queuing-protocols-and-policies-cb6073c7a3d6) about protocols and policies

## Optional

As mentioned, message queues are a critical component in distributed systems design. For theoretical foundations, start with Martin Kleppmann's "[Designing Data-Intensive Applications](https://archive.org/details/designing-data-intensive-applications-th/page/137/mode/1up?q=Message+Passing)," focusing on the chapters covering message passing and stream processing. For hands-on experience, build a simple message queue using [RabbitMQ's official tutorials](https://www.rabbitmq.com/tutorials).

To understand real-world implementations and see a RabbitMQ alternative, you can also examine [Apache Kafka](https://kafka.apache.org/documentation/)'s architecture documentation and its [application in high-scale systems](https://kafka.apache.org/uses).