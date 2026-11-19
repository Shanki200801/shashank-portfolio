---
title: "StockTrader Reports"
description: "Daily, weekly and monthly reports from an evidence-driven stock screener and ₹1,00,000 paper-trading loop for Nifty 500 stocks. No real money is traded."
date: "2026-11-17"
techStack: ["Python", "pandas", "HTML", "GitHub Actions"]
demoLink: "https://shanki200801.github.io/stocktrader-reports/"
sourceLink: "https://github.com/Shanki200801/stocktrader-reports"
---

## The problem

Most stock "signals" are never tested against costs, survivorship bias or multiple testing. I wanted a paper-trading loop where every method has to prove itself before it gets trusted, and where every prediction is recorded before its outcome exists.

## What it does

- **Daily brief:** portfolio, prediction tracker, positions history, news, data checks and learning state.
- **Weekly digest:** book vs the Nifty 500, each holding's contribution, regime and breadth, VIX and FII/DII, and a sortable table of every Nifty 500 stock.
- **Monthly report:** equity curve, rebalance trades with reasons and costs, per-stock P&L attribution, and a live-vs-backtest scorecard.
- **Evidence pages:** each method is backtested net of Indian costs and must pass a statistical gate (Newey-West t, IC, Deflated Sharpe, Benjamini-Hochberg FDR), tested on a survivorship-free universe.

### Implementation details

- The source repo is private. A GitHub Action runs on weekdays, updates prices, runs the paper book and builds static HTML from an append-only ledger.
- Numbers come only from code. LLM skills summarise the results and never invent prices or returns.
- Every past day, week and month is archived and can be regenerated from the ledger.
