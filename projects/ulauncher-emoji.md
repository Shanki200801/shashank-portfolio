---
title: "Emoji for Ulauncher"
description: "A Ulauncher extension that finds emojis by name or everyday keyword and pastes them into the app you were typing in. No downloads and no API keys."
date: "2026-11-24"
techStack: ["Python", "Ulauncher API", "IBus", "X11"]
sourceLink: "https://github.com/Shanki200801/ulauncher-emoji"
---

## The problem

Most emoji pickers only match official Unicode names, so "laugh" doesn't find 😂 (*face with tears of joy*). Many also download a large emoji database or need an API key.

## What it does

- `em laugh` → 😂 😆 🤣, `em heart` → ❤️ 💕 🩷, `em flag india` → 🇮🇳
- Typing `em` on its own shows your recently used emojis.
- **Auto-paste:** after you pick, Ulauncher closes, focus returns to your app, and the extension presses Ctrl+V (Ctrl+Shift+V in terminals). On Wayland, or without `python3-xlib`, the emoji is simply copied.
- Shows one entry per emoji, with text-style duplicates removed. Skin-tone variants stay hidden unless you ask for them.

### Implementation details

- Reads the CLDR emoji dictionaries that already ship with IBus (`/usr/share/ibus/dicts/emoji-*.dict`). It loads the full English list, your regional variant (such as `en_IN` or `en_GB`) and your own language's keywords when they exist.
- Every search word must match a name or keyword, which keeps results tight.
- Recents are shared with [QuickPick](/projects/quickpick), and the auto-paste helper also works as a standalone script.
