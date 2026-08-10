---
title: "QShare"
description: "A peer-to-peer encrypted file transfer CLI written in Go — one-time pairing codes, AES-256-GCM chunked transfer, and a relay fallback for machines stuck behind NAT."
date: "2025-06-08"
techStack: ["Go", "Cobra", "AES-256-GCM", "TCP", "Fly.io", "Docker", "GoReleaser"]
sourceLink: "https://github.com/Shanki200801/qshare-cli"
---

## Why I built it

I wanted to learn Go properly — not by following a tutorial, but by picking a problem that would force me into the parts of the language people actually struggle with: goroutines, channels, `io.Reader`/`io.Writer` plumbing, byte-level protocol design, and error handling without exceptions.

The problem I picked was one I hit constantly: sending a file from one machine to another. The usual options are all slightly wrong. Email caps the size. Cloud drives mean uploading a private file to someone else's computer and then hunting for the share settings. Chat apps re-compress your images. [magic-wormhole](https://github.com/magic-wormhole/magic-wormhole) gets this right, so I set out to rebuild that idea in Go and understand every layer of it.

The result is **QShare**: you run one command on the sending machine, read a short code out loud, and type it on the receiving machine.

```bash
# On the sending machine
qshare send --file ./quarterly-report.pdf
# Your code is: 7-tiger-cloud

# On the receiving machine
qshare receive 7-tiger-cloud
```

## How it works

1. **The sender generates a one-time code** — a number plus two dictionary words, chosen from a wordlist so the code stays short enough to say out loud but has enough entropy to not be guessable in the seconds it's alive.
2. **Both peers rendezvous at a relay.** The relay is a small stateless Go service whose only job is to match a sender and a receiver holding the same code, then get out of the way.
3. **The code becomes the key.** Both sides run the code through SHA-256 to derive a 256-bit symmetric key. The key never travels over the network — only the code does, and only between two humans.
4. **The file is chunked, sealed and streamed.** Each chunk is encrypted with AES-256-GCM, which gives confidentiality and integrity in one pass: a tampered or truncated chunk fails authentication instead of silently corrupting the output.
5. **Direct connection first, relay as fallback.** When both peers can reach each other, bytes go peer to peer. When NAT gets in the way, the relay forwards the (already encrypted) stream, so the fallback path never sees plaintext.

An optional `--key` flag lets the sender mix an extra secret into key derivation, so even someone who overhears the pairing code can't decrypt the transfer.

## What I actually learned

This project was a Go curriculum disguised as a tool. A few things that only really landed by building it:

- **Concurrency is a design constraint, not a feature.** The relay has to hold half-open pairings, expire them, and survive one peer disappearing mid-handshake. That pushed me into channels, `context` cancellation, and mutex-guarded state — and into learning what a goroutine leak looks like.
- **Streams beat buffers.** The first version read whole files into memory with `os.ReadFile`, which is fine for a PDF and catastrophic for a video. Reworking it into chunked reads changed how I think about `io` interfaces generally.
- **Protocol design is mostly framing.** Once you're writing raw bytes over TCP, you own the answer to "where does this message end?" Length-prefixed frames and explicit metadata headers stopped being trivia and became something I'd designed myself.
- **Rate limiting matters the moment you deploy.** A public relay with no limits is a free bandwidth service for strangers, so the relay grew per-IP rate limiting before it grew anything else.

I kept a `knowledge/` folder in the repo — primers I wrote for myself on concurrency, chunked transfer, encryption, entropy in code generation, relay robustness and CLI UX. Writing the explanation was consistently the point at which I realised I didn't understand something yet.

## Shipping it

The relay runs on Fly.io in the Singapore region via a dedicated `Dockerfile.relay`, and releases are cut with GoReleaser through a GitHub Actions workflow, so a tagged commit produces cross-platform binaries automatically. It turned out that packaging and distributing a CLI is its own body of knowledge, separate from writing one.

## Known limitations

I've kept an honest list in the repo rather than pretending it's finished:

- Directory transfers should auto-zip before sending.
- Resume-on-interrupt for large transfers isn't implemented yet.
- NAT traversal is relay-based; proper UPnP/STUN hole-punching is still on the roadmap.

Those gaps are the next batch of things I want to learn, which was always the point of the project.
