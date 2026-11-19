---
title: "Hearth & Anvil: CACO + CCOR Crafting Guide"
description: "A fast, searchable crafting guide for Skyrim's CACO and CCOR mods. Every recipe comes straight from the mods' plugin files, not from wikis."
date: "2026-09-19"
techStack: ["JavaScript", "Python", "HTML", "CSS", "GitHub Pages"]
sourceLink: "https://github.com/Shanki200801/caco-ccor-guide"
demoLink: "https://shanki200801.github.io/caco-ccor-guide/"
---

## The problem

Crafting in Skyrim with CACO and CCOR installed means hunting through dozens of recipes, perk gates and skill requirements. Wikis go stale, so I built a guide from the mods' own data.

## What it does

- **Recipes:** 2,700+ recipes from both mods. Search by output or ingredient, and filter by mod, category or station.
- **Item pages:** how any item is made and what it is used in. Tap an ingredient chip to jump to it.
- **My perks:** tick Alchemy and Smithing perks and skill levels. Recipes you can't craft yet get a lock, and you can hide them.
- **Alchemy:** CACO ingredient effects, including the Bruma and Hunterborn patches, with a 3-ingredient potion preview and effect filters.
- **Guide:** how each system works (bombs, waxes, distillation, poultices, blood alchemy, cooking, smelting, breakdown, learning, tempering, replicas). Recipe counts and perk gates are computed from the data.

### Implementation details

- A static site with no framework and no runtime build step: about 45 KB of gzipped recipe data and one small JS file.
- A Python build (`tools/build.py`) joins the spreadsheet exports with a small TES5/SSE plugin reader (`tools/esp.py`). It adds output counts, perk gates (`HasPerk`), skill requirements (`GetActorValue`), and item names resolved from FormIDs.
- Deploys to GitHub Pages from `site/` on every push to `main`.
