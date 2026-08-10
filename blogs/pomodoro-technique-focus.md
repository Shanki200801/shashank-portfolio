---
title: "25 Minutes at a Time: How the Pomodoro Technique Fixed My Focus"
date: "2026-08-05"
description: "I didn't have a productivity problem. I had a starting problem, a context-switching problem, and a stopping problem. A kitchen timer fixed all three."
tags: ["focus", "productivity", "pomodoro", "habits", "engineering"]
---

I used to think I had a discipline problem.

I'd sit down at 9:30 with a clear task — say, tracing why a Pub/Sub subscriber was double-processing a message — and at 12:15 I'd look up having read eleven Slack threads, skimmed two Stack Overflow answers that weren't about my bug, refactored an unrelated helper, and made no progress on the actual thing. The hours were gone. The work wasn't done. And the story I told myself was that I needed to *try harder*.

That was the wrong diagnosis. I didn't have one problem, I had three:

1. **A starting problem.** Big tasks are intimidating, so I'd warm up with something small and never get to the big one.
2. **A context-switching problem.** Every notification cost me far more than the thirty seconds it took to read.
3. **A stopping problem.** On the days I *did* get into it, I'd work five hours straight, skip lunch, and be useless by 4pm.

The Pomodoro technique fixed all three, and it did it with a rule so stupid-simple I resisted it for a year.

## The rule

Pick one thing. Set a timer for 25 minutes. Work on only that thing. When the timer rings, stop — even mid-sentence — and take a 5 minute break away from the screen. After four of these, take a longer break, 15 to 30 minutes.

That's it. That's the whole technique. Francesco Cirillo came up with it as a student in the late 1980s using a tomato-shaped kitchen timer, which is where the name comes from.

I dismissed it for exactly the reason you might be dismissing it right now: it sounds like productivity theatre. Twenty-five minutes is arbitrary. Deep work takes longer than that. Interrupting yourself when it's finally flowing is insane.

I was wrong about almost all of it.

## Why it actually works

### The unit of work becomes small enough to start

"Debug the double-processing bug" is a task with no visible end. My brain treats it as a cliff. But "spend 25 minutes reading the subscriber's ack logic" is not a cliff — it's a step, and it's *definitely* going to be over in 25 minutes.

This is the single biggest thing Pomodoro gave me. I stopped negotiating with myself about whether to start. The commitment isn't "solve this", it's "look at this for 25 minutes", and that's a commitment I can always honour. Nine times out of ten the actual work starts happening somewhere around minute four, once the resistance has nothing left to push against.

### It turns interruptions into something with a cost

Before, every stray thought was free to act on. Now, when something surfaces mid-block — *did I reply to that PR review? what's the deploy status? I should check that Slack thread* — it collides with a rule: **not during a pomodoro**. So I write it on a scrap of paper and go back.

The list is almost always shorter than the interruption impulse suggests. Most of those thoughts were never important; they were just my brain looking for an exit from something hard. The ones that *are* real get handled in the break, five minutes later, and nothing burned down in the meantime.

This matters more for engineering than for most work. Loading a distributed system into your head — which service publishes what, what the retry semantics are, where the state actually lives — takes fifteen or twenty minutes. A single "quick question" ping costs me all of it. Protecting the block isn't precious; it's arithmetic.

### The forced stop is the actual feature

This is the part I fought hardest, and the part that turned out to matter most.

Stopping when the timer rings feels wrong when you're mid-flow. But two things happen when you do it anyway. First, you come back with the problem still warm — leaving mid-thought means there's an obvious next move waiting for you, which kills the restart cost. Second, you stop trading tomorrow morning for this afternoon.

I used to have brilliant Tuesdays and useless Wednesdays. The five-minute break — actually standing up, actually leaving the desk, no phone — is what flattened that out. My total output per week went *up* while my hours went down, mostly because I stopped spending entire days recovering from the previous one.

And a surprising number of my hardest bugs have resolved themselves during those breaks. Not while staring at the code — while filling a glass of water. The break isn't time off from the problem, it's the part where the background process gets CPU.

## What I do in practice

I've drifted from the textbook version, and I think that's fine — the point is the structure, not the ritual.

- **The block is 25 minutes for shallow or dreaded work, 50 for deep work.** Writing a migration plan or reading unfamiliar code deserves a longer runway. Code review, ticket triage and email get 25.
- **Every block gets one written intention.** Not "work on the API" — "make the SAGA compensation path handle a missing inventory record." If I can't write it in a sentence, I don't understand the task well enough to start, and figuring that out is its own pomodoro.
- **Distractions go on paper, not into a tab.** Physical paper. Opening a note-taking app is a browser away from being a distraction itself.
- **I count blocks, not hours.** "I did six blocks today" is an honest measure. "I worked nine hours" mostly measures how long I sat down.
- **Breaks are away from the screen.** Scrolling during a break is not a break; it's the same activity with a different tab.
- **Three or four deep blocks is a genuinely good day.** This was hard to accept. Four uninterrupted 50-minute blocks of real thinking is more than most people manage, and pretending otherwise is how you end up performing productivity instead of doing work.

## What it doesn't fix

I want to be honest about the limits, because most posts about this technique read like an advert.

It doesn't work for reactive days. If I'm on call, or shepherding a deploy, or in and out of meetings, the block structure just shatters and trying to enforce it adds frustration on top of a bad day. On those days I don't pretend — I batch the small stuff and accept that no deep work is happening.

It doesn't make boring work interesting. It makes boring work *finite*, which is almost as good.

And it doesn't survive a bad relationship with the timer. If you treat a broken pomodoro as a failure and get discouraged, the whole thing collapses into another stick to beat yourself with. A broken block just means you start another one.

## Why I still do it

The compounding effect isn't about output — it's about trust.

When I say "I'll spend a block on this", I now believe myself. That belief means I stop procrastinating on tasks I'm avoiding, because I'm not committing to finishing them, only to facing them for 25 minutes. The scary work stops being scary once you've watched a dozen intimidating problems dissolve into "well, that was four blocks."

A kitchen timer didn't make me smarter. It made the distance between deciding to work and actually working short enough that I stopped falling into the gap.
