---
title: "QuickPick"
description: "A Raycast-inspired clipboard history and emoji picker for Linux (GTK3, X11). Idles at about 22 MB and pastes straight into the app you were typing in."
date: "2026-11-24"
techStack: ["Python", "GTK3", "PyGObject", "CopyQ", "IBus", "X11"]
sourceLink: "https://github.com/Shanki200801/quickpick"
image: "/images/quickpick.png"
---

## The problem

After moving from macOS to Linux Mint I missed Raycast's Clipboard History and Emoji Picker. The full launcher alternatives pull in a Node runtime or need extra permissions to auto-paste. I only wanted the two popups, and I wanted them light.

## What it does

- **Clipboard history (Super+V):** list, preview and details pane. Filter by type (text, images, links, colours), pin, and delete.
- **Emoji picker (Ctrl+Alt+Space):** large grid with recents, categories and everyday-keyword search ("lol", "party", "thanks").
- **Auto-paste:** both popups paste into the app you were typing in, using Ctrl+Shift+V in terminals.

### Implementation details

- One small background daemon keeps popups instant. The UI is built on first use and released 60 seconds after it is hidden. It idles at about 22 MB.
- The emoji grid is drawn on a single canvas instead of thousands of widgets, and emoji data loads only when the picker first opens.
- CopyQ handles clipboard capture and storage. QuickPick is only the UI and talks to it through `copyq eval`. It adds one automatic command that stamps each item with the time and source window.
- Before pasting or deleting, actions look the item up again by its content. A new copy arriving while the window is open can't make you act on the wrong item.
