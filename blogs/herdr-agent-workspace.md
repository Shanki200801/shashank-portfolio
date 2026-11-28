---
title: "Herdr Is Where My Coding Agents Live Now"
date: "2026-11-28"
description: "I've been running all my AI coding agents inside Herdr for a while now. Spaces per project, agents that open their own panes, cheap models for grunt work, and a keyboard map I no longer think about."
tags: ["herdr", "ai-agents", "claude-code", "opencode", "developer-tools", "open-source"]
image: "/images/herdr/spaces-and-agents.webp"
---

For most of this year my setup for working with AI coding agents was a mess of terminal tabs. One Claude Code session here, another one there, a dev server somewhere, and a constant low-level worry that some agent had been sitting at a permission prompt for twenty minutes while I looked at the wrong window.

Then I started using [Herdr](https://herdr.dev), and it quietly fixed most of that. It calls itself "the runtime your coding agents live on", which sounded like marketing until I'd used it for a couple of weeks. Now it's the first thing I open in the morning.

This post is a tour of what I actually use, not a feature list.

![My Herdr window: spaces on the left, the agents bar below, and Claude Code in the main pane](herdr/spaces-and-agents.webp)

## One space per project

The thing I'd miss most if I went back is **spaces**. Every project gets its own space, with its own folder, its own colour, and its own set of tabs. In the screenshot above I've got my portfolio, a stock trading project, a Skyrim-style desktop HUD and a couple of others, each in its own lane.

It sounds small, but it changes how switching feels. When I jump to a project, I land in exactly the tabs, splits and agents I left there. Nothing from the other projects leaks in. And `Alt+1` to `Alt+9` jumps between them, so "go check on the HUD" is one keypress instead of hunting through tabs.

## Agents that open their own panes

This is the part that made me a convert. Herdr ships an [agent skill](https://herdr.dev/docs/agent-skill/) that teaches agents like Claude Code how to drive Herdr itself. So my main agent can open a new tab or split a pane, start another agent in it with a task, read that agent's screen, and wait until it's done.

Compare that with Claude Code's built-in subagents. They're useful, but they run out of sight. You get a summary at the end and have to trust what happened in between. With Herdr, every helper is a real terminal in a real pane. I can click into it, watch it work, scroll back through what it did, or just type into it and steer it myself if it's going sideways. The work stays visible, and I stay in the loop.

## Sending the boring work to cheaper models

Not every task needs the smartest model I have. Renaming things, looking something up, summarising a file, writing boilerplate: those burn tokens on a premium model for no good reason.

Herdr's `hc` command line has **templates**, and I've set up a couple that start [OpenCode](https://opencode.ai) on free models. My main agent hands the small stuff off to them and checks the result. Here's my main Claude Code session on the left, and an OpenCode helper it started on the right, doing a quick read-only lookup across my project files:

![Claude Code on the left, an OpenCode helper on a free model working in a split pane on the right](herdr/opencode-helper.webp)

It isn't tied to one vendor either. The new-agent menu knows about Claude Code, OpenCode, Antigravity, Gemini, Copilot, Codex and a bunch more, so I can pick the right tool for the job and they all live side by side in the same window.

## Shortcuts I don't think about anymore

Herdr is happy with the mouse, but the keyboard map is where it shines once your hands learn it:

- `Alt+1` … `Alt+9` to switch spaces
- `Ctrl+1` … `Ctrl+9` to switch tabs
- `Alt+H/J/K/L` (or the arrow keys) to move between panes
- `Alt+Up` / `Alt+Down` to jump to the previous or next agent
- `Ctrl+Shift+N` for a new space, `Ctrl+Shift+T` for a new tab
- `Ctrl+Shift+P` for the command palette

And if you forget one, `Ctrl+?` pops up a searchable list of every binding:

![The Herdr keybinds overlay, filterable by typing](herdr/keybinds.webp)

All of it lives in a plain `keys.json`, so remapping is just editing a file.

## Pinning the leader agent

When I'm running a bigger task, I usually have one "leader" agent that plans the work and hands pieces out to helpers. Herdr lets me **pin** that agent to the top of the agents bar. However many helpers it starts, the leader stays put in its own Pinned section, so I can always get back to the conversation that matters with one click.

The agents bar itself is great too. Every agent across every space shows up there, grouped by whether it's working, blocked or idle, with how long it's been that way. That alone killed the "oh no, it's been waiting for me this whole time" problem.

## Other things I've come to like

- **Terminals outlive the window.** The terminals run in a background process (`herdr-core`), so closing the window doesn't kill anything. I reopen it and everything's still running.
- **Remote machines in the same window.** You can add a machine over SSH and give it its own spaces, so a VPS and my laptop sit in one list.
- **Built-in Files and Changes panels** for a quick look at the project tree or the current git diff without leaving the window.
- **Mods.** Panels, sidebars and themes are all moddable. People share layouts and mods on [herdr.dev](https://herdr.dev/plugins/), and you can write your own.

## It's open source

The best part: Herdr is [open source on GitHub](https://github.com/herdrdev/herdr) under the Apache 2.0 licence. That matters to me for a tool that sits between me and every agent I run. I can read how it works, file issues, and know it isn't going to vanish behind a paywall.

If you're juggling more than one coding agent, give it a try. The [docs](https://herdr.dev/docs/) are a good place to start, especially the [quick start](https://herdr.dev/docs/quick-start/) and the [agent skill](https://herdr.dev/docs/agent-skill/) page.
