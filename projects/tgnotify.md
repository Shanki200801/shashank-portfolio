---
title: "tgnotify"
description: "Telegram alerts, tap-to-approve buttons and one-time-code login for any project. Ships as a Go CLI and Go, Python and TypeScript libraries with zero runtime dependencies."
date: "2026-11-18"
techStack: ["Go", "Python", "TypeScript", "Telegram Bot API"]
sourceLink: "https://github.com/Shanki200801/tgnotify"
---

## The problem

Long-running scripts, cron jobs and deploys finish silently, and approvals need a human tap. I wanted one small tool any project could call, in any language, without pulling in dependencies.

## What it does

- **Notify:** `tgnotify send`, or `tgnotify run -- <cmd>` for a ping with the exit code and duration.
- **Ask:** `tgnotify ask "Deploy to prod?" Yes No` blocks until someone taps a button.
- **Batch approvals:** `prompt` and `collect` let a cron job send buttons and pick up the taps on its next run.
- **Auth toolkit:** a one-time-code login that protects single-owner web apps with a 6-digit code sent to Telegram. It ships for TypeScript (Node 19+ and Cloudflare Workers) and Python (stdlib only).

### Implementation details

- Three native implementations share one config file and one contract: the same state format, callback data, error handling and HTML escaping.
- The bot token is redacted from every error message. Taps are accepted only from the configured chat.
- Tested against a local stub, so the suites make no real Telegram calls.
