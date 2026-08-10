---
title: "Almanac"
description: "A daily research-and-writing platform. Everyone gets the same subject each day, writes an essay about it, and only unlocks the community's essays after publishing their own."
date: "2026-08-02"
techStack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Better Auth", "Gemini", "Tailwind", "shadcn/ui", "Vercel"]
sourceLink: "https://github.com/Shanki200801/Almanac-learn"
demoLink: "https://almanac-learn.vercel.app"
image: "/images/almanac.svg"
---

## The problem

Most "learning" I do online is passive. I watch a video, skim a thread, ask a model to summarise a paper, and walk away with the *feeling* of having learned something. A week later almost none of it survives.

The thing that actually works — the thing that has always worked — is having to explain it. You cannot write a coherent paragraph about a topic you only half-understand; the gaps show up in your own sentences. So I built a platform around that constraint instead of around consumption.

**Almanac** is built on one loop:

```
Research → Understand → Write → Publish → Read others → Return tomorrow
```

## How it works

Every day, **everyone gets the same subject**. Not a personalised feed, not a recommendation — one global subject with a category, a difficulty, and a handful of reading links to start from.

You research it on your own. Then you write an essay in your own words in a markdown editor that autosaves as you go. When you publish, two things happen: your essay gets a permanent, shareable URL, and the community's essays for that subject unlock for you.

That last rule — **publish before you read** — is the whole design. It's what stops the platform from becoming another feed you scroll. You can't absorb someone else's framing of the topic before you've committed to your own, which means the comparison afterwards is genuinely interesting: you find out where your understanding was thin by seeing what other people noticed that you didn't.

Beyond the core loop:

- **On-demand subjects** — up to five extra subjects a day if the daily one doesn't grab you (these stay out of the daily feed).
- **Reflection prompts** — every third essay, you get asked what you've actually learned.
- **Personal library** — a searchable catalogue of everything you've written.
- **Weekly streaks** — deliberately weekly, not daily. A streak you lose because you had one bad Tuesday is a streak that teaches you to quit.
- **Shareable essays** — SEO-friendly public URLs with OpenGraph previews, because writing that nobody can link to is writing that dies.

## Architecture

The whole thing is a Next.js App Router app deployed on Vercel, leaning on server components and server actions rather than a separate API layer.

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js (App Router) | Server components keep essay rendering off the client bundle |
| Database | PostgreSQL (Neon / Vercel Postgres) | Relational data — users, subjects, essays, streaks |
| ORM | Drizzle | Typed schema with migrations that read like SQL |
| Auth | Better Auth (Google, GitHub) | Session handling without owning password storage |
| AI | Google Gemini | Generates and enriches the subject catalogue |
| UI | Tailwind + shadcn/ui | Fast to build, consistent, easy to theme |

**The daily subject is a cron job.** A Vercel cron hits `/api/cron/daily-subject` at midnight UTC, which promotes the next subject so every user in every timezone is looking at the same one. Timezone handling turned out to be the subtlest part of the build — "today" means something different for a user in Bengaluru and a user in Berlin, and streaks have to be fair to both, so viewer timezone is captured and reconciled against the global subject day.

## What I got out of it

This was my first project built entirely around **server components and server actions** rather than a REST API plus a client-side data layer, and it changed how I think about where code should run. Data fetching collapsed into the components that needed it, mutations became typed function calls, and the amount of state I had to synchronise on the client dropped dramatically.

Two other things I'd carry into the next project:

- **Drizzle over a heavier ORM.** Schema-as-TypeScript with generated migrations hit the right point between raw SQL and full abstraction — I always knew what query was actually running.
- **Constraints are product features.** Publish-before-read, one subject a day, weekly rather than daily streaks — none of these are technically hard, and all of them are the reason the product is different from a feed.

Almanac is live and I use it myself, which is the only honest test of whether the loop works.
