# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


# 📚 Phase 0: Clarify what must be delivered

## Hackathon requirements:

1. Write a book (using Docusaurus) — AI-Driven + Spec-Driven way — publish it on GitHub Pages.

2. Build a RAG-based Chatbot embedded in the published book: users can ask questions about the book; also allow selecting a portion of text (context) and then asking the chatbot to answer only from that selected text.

3. Extra marks if you build reusable intelligence via subagents / “agent skills” (since you're using Claude Code + Spec-Kit).

4. Code should use: OpenAI Agents SDK, OpenAI ChatKit SDK, FastAPI, and Qdrant (Cloud free tier).