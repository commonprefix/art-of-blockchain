# Basic Servers Knowledge

> ⏱️ **ETC**: 10 hours

In the wild west of blockchain technology understanding DevOps isn't just a nice-to-have - it's a mandatory skill that is being used on a daily basis. When you're building blockchain applications, you're typically working with several interconnected components:

First, we have your blockchain nodes, which need to stay synchronized with the network and handle high volumes of transactions. These nodes require careful server configuration, monitoring, and maintenance. For example, an Ethereum node needs specific hardware requirements, proper networking setup, and continuous monitoring to ensure it stays in sync with the latest blocks.

Then there's the application layer, which might include APIs, backend services, and databases that complement your on-chain logic. Consider a DeFi application - while the core trading logic lives in smart contracts, you typically need off-chain services to handle things like price feeds, transaction monitoring, and user notifications. These services need proper deployment pipelines, scaling strategies, and failure recovery mechanisms.

Last but not least, the security of these components is particularly important considering we're dealing with decentralized networks where a couple of server breaches can cost millions.

Becoming proficient in server administration and linux-based machines is something that comes with years of experience. Having said, here are a few recommendations to get you started:

* Learn all the basic linux concepts and commands. If you're not already familiar you should read the   [Linux Journey](https://linuxjourney.com/)
* Setting up a secure server is a must-have knowledge. We suggest reading and understanding [this document](https://github.com/imthenachoman/How-To-Secure-A-Linux-Server). There are going to probably be a lot of words that you don't understand and it's okay. Take it step by step, search the internet and make sure that you understand the basic concepts. Alternatively you can read the more concise [VPS Hardening Post](https://krystal.io/blog/post/securing-and-hardening-your-vps) from [krystal.io](https://krystal.io).
* Deploy and secure a minimal production web setup using the following components:
  * Provision an Ubuntu Virtual Private Server from a cloud provider. We suggest [Vultr](https://www.vultr.com/) or [Hetzner](https://www.hetzner.com/).
  * Apply security hardening measures including firewall rules, SSH configuration, user permissions and system updates using the documents above.
  * Register a domain through [Namecheap](https://namecheap.com) and configure the [DNS records](https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/) to point to your server.
  * [Configure Nginx as a reverse proxy](https://www.digitalocean.com/community/tutorials/how-to-configure-nginx-as-a-reverse-proxy-on-ubuntu-22-04) to a simple HTTP server running on a port.
  * [Deploy a static website](https://medium.com/@jasonrigden/how-to-host-a-static-website-with-nginx-8b2dd0c5b301).
  
A little overlap exists between these exercises and the basic networks ones, so it is recommended you do them in parallel to end up with a secure deployed website and/or server.

> 💡 **Tasks**
> * Read the Grasshopper and Journeyman chapters of the [Linux Journey](https://linuxjourney.com/).
> * Read the server hardening document.
> * Do the exercise described above.

## Optional

Apart from the mandatory material, DevOps requires a big set of tools that SysAdmins use day-to-day. The most important tools that we use in the blockchain space and you should familiarize yourself with include:

* [Docker](https://www.docker.com/): A platform for developing, shipping, and running applications in containers. Containers package an application and its dependencies into a single unit that can run consistently across different computing environments.
* [Jenkins](https://www.jenkins.io/)/[Travis](https://www.travis-ci.com/): Open-source automation tools that help automate parts of the software development process, including building, testing, and deploying applications. They support continuous integration and continuous deployment (CI/CD).
* [Kubernetes](https://kubernetes.io/): An open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.
* [AWS](https://aws.amazon.com/) (Amazon Web Services): A cloud computing platform that provides over 200 services like compute power, storage, and databases that companies can rent instead of maintaining their own data centers.

Making yourself expert on these tools requires dedicating significant time to learning each one thoroughly through hands-on practice. For Docker, start with building and managing containers locally, then move to multi-container applications with Docker Compose. For Jenkins/Travis, set up CI/CD pipelines for small projects and gradually increase complexity. With Kubernetes, begin with local clusters using minikube, then progress to managing production-grade clusters. For AWS, create a free tier account and practice with core services like EC2, S3, and VPC before exploring blockchain-specific services like Amazon Managed Blockchain.
