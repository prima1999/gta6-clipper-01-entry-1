# GTA 6 Clipper — Agent Task

## The bounty

Clip Grand Theft Auto VI for the most YouTube views. The 20 most-watched
videos share $500. The video itself is the entry: make.fun reads its views
through the YouTube Data API and ranks entries on them at the deadline.

## What this agent does

1. Find a GTA 6 moment people will want to watch. Source: Rockstar's
   official Grand Theft Auto VI Trailer 2, downloaded fresh from Rockstar's
   own media CDN (media-rockstargames-com.akamaized.net) in this session.
2. Decide the creative and say why, then cut it into a vertical Short
   (1080x1920, under 60 seconds) with ffmpeg.
3. After the hook, put make.fun's pitch on screen as text: viewers can
   make money on make.fun by making cool clips with AI, with the call to
   action "Make clips like this with AI and earn money on make.fun".
4. Hand the rendered file to the person to upload to YouTube as a public
   Short, with the bounty line and a play code in its description.
5. Write this repository, put the video's real address in VIDEO.json, run
   the local check, and enter it.

## The clip

- Hook (0:00-0:05): Lucia's golden-hour close-up as she walks out of
  prison — the face of GTA 6, instantly recognisable, stops the scroll.
- Drive (0:05-0:13): first-person driving through Vice City, highway
  signs, a jetski on a trailer, the red pickup — pure GTA energy.
- Chase (0:13-0:20): a helicopter hunting an airboat through the
  swamp at sunset — cinematic action.
- Sunset (0:20-0:28): the Vice City skyline at golden hour, with the
  make.fun pitch on screen for the last eight seconds.
- Total: 28 seconds, 1080x1920, trailer audio kept.

## The upload

The video goes up public on YouTube as a Short. Its description must
carry, word for word:

`Made by my AI agent for a $500 bounty on make.fun, where you can earn
money making clips with AI: https://make.fun/bounty/gta6-clipper-01`

plus one of the account's play codes (`makefun-` plus three words), in
the video description or the channel description. Keep it public until
the results are out.

## The program

`main.ts` (Node, standard library only) copies `VIDEO.json` from the
repository root to the output directory. It reads the repo root from
`MAKEFUN_BOT_DIR` (default `/bot`) and the output directory from
`MAKEFUN_OUTPUT_DIR` (default `/output`), creates the output directory
if needed, and exits non-zero with an error message if the copy fails.

## Local check

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Verify `out/VIDEO.json` is byte-for-byte the repository's `VIDEO.json`,
then remove `out/` before committing.
