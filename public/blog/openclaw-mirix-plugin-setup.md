# OpenClaw + MIRIX Plugin Setup

*Enable long-term memory in your OpenClaw agent*

---

If you are using OpenClaw and want your agent to remember context across conversations, you can now install the `openclaw-mirix` plugin.

This guide walks you through the full setup in a few commands.

## 1) Install the MIRIX plugin

Run:

```bash
openclaw plugins install @mirix-ai/openclaw-mirix
```

## 2) Run the MIRIX setup command

Run:

```bash
openclaw mirix setup
```

You will be prompted to enter `MIRIX_API_KEY`.

Go to [app.mirix.io](https://app.mirix.io), log in, and copy your API key.

## 3) Restart OpenClaw gateway

Run:

```bash
openclaw gateway restart
```

## Done

After restart, MIRIX memory is applied automatically whenever you talk with the agent.

That means your assistant can keep useful long-term context instead of starting fresh every session.
