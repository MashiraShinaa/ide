# Next-gen IDE (name about to change)

![Screen Shot 2023-03-30 at 8 56 18 PM](https://user-images.githubusercontent.com/5136688/228936729-c1ae45b0-9199-4aae-bb3b-837b97e8176a.png)

$NAME is a new kind of development environment powered by AI. The main idea is that developers have access to AI agents that can use tools. The developer writes a short documentation or a technical spec in plain English and then lets the AI agent do the actual work. The AI agents have access to tools like writing to a file, running code, running commands, installing dependencies, deploying, etc. Agents operate in a secure sandboxed cloud environment that's powered by [Firecracker](https://github.com/firecracker-microvm/firecracker/). This way, you for example describe what a server route should do and the agent codes it for you. Like [this example](https://twitter.com/mlejva/status/1641072535163875330) of an AI agent coding Stripe customer checkout based on a technical spec.

## Current state
$NAME is a work in progress. The `developer <--> AI agent` cooperation creates completely new paradigms. We're exploring how the ideal UX, UI, and cooperation with the agents should look like. The app will surely go through a lot of changes in the short and medium term.

## Building in public
We think the AI-powered IDE for the future should be open-sourced and allow anybody to bring their models, customize the prompts, and develop custom tools for the agents. But we also plan to offer a cloud version with some features behind subscription though.

## Pricing
You will always be able to self-host $NAME for free. We will also offer a cloud version. The current idea is to offer the base cloud version for free while having some features for individuals behind a subscription. We'll share more on pricing for companies and enterprises in the future.

## Follow progress
- [Twitter](https://twitter.com/mlejva)

## Early demos
- [AI Agent using coding tools](https://twitter.com/mlejva/status/1636103084802822151)
- [Build your custom "Just-In-Time" UI](https://twitter.com/mlejva/status/1641151421830529042)
- [Agent coded a full Stripe customer checkout by following a technical spec provided by user](https://twitter.com/mlejva/status/1641072535163875330)

## Roadmap
Short-term goals, in no particular order.

- Come up with the name
- Clean up codebase and provide instructions on how to run it locally
- Set up a website
- Launch the initial version
