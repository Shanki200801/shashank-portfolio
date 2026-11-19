---
name: tgnotify
description: Telegram alerts, tap-to-approve buttons and one-time-code login for any project, in Go, Python and TypeScript
url: https://github.com/Shanki200801/tgnotify
language: Python
created_at: 2026-11-18T11:03:37Z
updated_at: 2026-11-18T18:33:31Z
homepage: null
topics:
  - cli
  - golang
  - notifications
  - python
  - telegram
  - typescript
---

Telegram alerts and tap-to-approve buttons for any project. It ships as a single Go CLI plus native Go, Python and TypeScript libraries. None of them have runtime dependencies, and all three share one config file. Current release: v0.1.1, which trims whitespace in secrets and redacts the bot token from every error.

- **Notify:** `tgnotify send`, or `tgnotify run -- <cmd>` to get a ping with the exit code and duration.
- **Ask:** `tgnotify ask "Deploy to prod?" Yes No` blocks until someone taps a button.
- **Batch approvals:** `prompt` and `collect` let a cron job send buttons and pick up the taps on its next run. Taps are stored in a shared state file, and only the configured chat can answer.
- **Auth toolkit:** a one-time-code login that protects single-owner web apps with a 6-digit code sent to Telegram. It ships as `tgnotify/login` for TypeScript (Node 19+ and Cloudflare Workers) and `tgnotify.login` for Python (stdlib only). Documented as a recipe with a test checklist.
