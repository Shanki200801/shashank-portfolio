---
name: caco-ccor-guide
description: Hearth & Anvil, a fast, searchable crafting guide for Skyrim's CACO and CCOR mods, built from the plugin data
url: https://github.com/Shanki200801/caco-ccor-guide
language: JavaScript
created_at: 2026-09-19T20:52:36Z
updated_at: 2026-09-19T20:53:03Z
homepage: https://shanki200801.github.io/caco-ccor-guide/
topics: []
---

A searchable crafting guide for two Skyrim SE mods: kryptopyr's *Complete Alchemy & Cooking Overhaul* (CACO) and *Complete Crafting Overhaul Remastered* (CCOR) 2.6.4. Every recipe comes from the mods' plugin files, not from wikis. It is a static site with no framework and no runtime build step.

- **Recipes:** 2,700+ recipes from both mods. Search by output or ingredient, and filter by mod, category or station.
- **Item pages:** how any item is made and what it is used in. Tap an ingredient chip to jump to it.
- **My perks:** tick Alchemy and Smithing perks and skill levels. Recipes you can't craft yet get a lock, and you can hide them.
- **Alchemy:** CACO ingredient effects, including the Bruma and Hunterborn patches, with a 3-ingredient potion preview and effect filters.
- **Guide:** how each system works (bombs, waxes, distillation, poultices, blood alchemy, cooking, smelting, breakdown, learning, tempering, replicas). Recipe counts and perk gates are computed from the data.
- **Data pipeline:** a Python build joins the spreadsheet exports with a small TES5/SSE plugin reader, adding output counts, perk gates, skill requirements and item names.
