---
name: stocktrader-reports
description: Daily, weekly and monthly reports from an evidence-driven stock screener and ₹1,00,000 paper-trading loop for the Indian market
url: https://github.com/Shanki200801/stocktrader-reports
language: HTML
created_at: 2026-11-17T17:18:54Z
updated_at: 2026-11-17T17:19:05Z
homepage: https://shanki200801.github.io/stocktrader-reports/
topics:
  - stocks
  - paper-trading
  - backtesting
  - nse
  - reports
---

Public reports from StockTrader, an evidence-driven screener and paper-trading loop for Nifty 500 stocks (NSE). No real money is traded. Delivery equity only, with no F&O, shorting or leverage. The source repo is private. A GitHub Action builds the static HTML on weekdays from the ledger and publishes it here.

- **Daily brief:** portfolio, prediction tracker, positions history, news, data checks and learning state.
- **Weekly digest:** book vs the Nifty 500, each holding's contribution, regime and breadth, VIX and FII/DII, and a sortable table of every Nifty 500 stock.
- **Monthly report:** equity curve, rebalance trades with reasons and costs, per-stock P&L attribution, and a live-vs-backtest scorecard.
- **Evidence pages:** every method is backtested net of Indian costs and must pass a statistical gate (Newey-West t, IC, Deflated Sharpe, Benjamini-Hochberg FDR), tested on a survivorship-free universe.
- **How-to guide:** explains how to read the reports and how past days are archived.

Numbers come only from code. LLMs summarise them and never invent prices or returns.
