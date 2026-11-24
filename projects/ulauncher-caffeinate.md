---
title: "Caffeinate for Ulauncher"
description: "Keep the screen on and stop Linux from sleeping, straight from Ulauncher, like macOS caffeinate or Amphetamine. It never touches your power settings."
date: "2026-11-24"
techStack: ["Python", "Ulauncher API", "D-Bus", "systemd"]
sourceLink: "https://github.com/Shanki200801/ulauncher-caffeinate"
---

## The problem

Keeping a Linux desktop awake during a long download, a presentation or a build usually means changing power settings and remembering to change them back. I wanted macOS's `caffeinate` in a launcher.

## What it does

Type `caf` in Ulauncher:

- **Until I turn it off**, or for **30 minutes / 1 / 2 / 4 hours**
- **Custom durations:** `caf 45`, `caf 1h30m`, `caf 2h`
- **Turn off:** lets the screen blank and the computer sleep again

Each item shows the current state (for example *on, 44m left*), and a notification confirms each change.

### Implementation details

- While it's on, a tiny background process holds an inhibit lock. On GNOME, Cinnamon, MATE and Budgie it uses `org.gnome.SessionManager.Inhibit`, which blocks screen blanking, the lock screen and suspend. Anywhere else with systemd it falls back to `systemd-inhibit --what=idle:sleep`.
- Turning it off, or the timer running out, ends that process and releases the lock. No power settings are modified.
- The bundled `caffeinate.py` also works on its own from the command line (`caffeinate.py 90`, `status`, `off`).
