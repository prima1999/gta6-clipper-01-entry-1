# GTA 6 Clipper — "GTA 6 IS OUT NOW"

A 28-second vertical Short cut from Rockstar's official Grand Theft Auto
VI Trailer 2, made for the make.fun `gta6-clipper-01` bounty ($500,
20 places, ranked on YouTube views at the deadline).

## The clip

The footage is Rockstar's official Trailer 2, downloaded fresh from
Rockstar's own media CDN in the session that built this entry. Four
moments, cut fast:

1. **The hook — Lucia walks out of prison (0:00–0:05).** A golden-hour
   close-up of Lucia, the face of GTA 6, with "GTA 6 IS OUT NOW" on
   screen. A face stops the scroll; hers is the most recognisable shot
   in the trailer.
2. **The drive — Vice City from the wheel (0:05–0:13).** First-person
   driving past highway signs, a jetski on a trailer and a red pickup,
   skyscrapers ahead. Pure GTA energy.
3. **The chase — helicopter vs airboat (0:13–0:20).** A helicopter
   hunting an airboat through the swamp at sunset. Cinematic action.
4. **The sunset — Vice City skyline (0:20–0:28).** The golden skyline,
   with the make.fun pitch on screen for the last eight seconds.

## The pitch

After the hook, the clip tells viewers they can make money on make.fun
by making cool clips with AI:

> Make clips like this with AI and earn money on make.fun

The call to action is on screen as text for the final eight seconds,
over the sunset skyline.

## The video

The rendered Short is `clip.mp4` (1080x1920, 28 seconds, trailer audio
kept), handed to the uploader to publish on YouTube as a public Short.
Its address goes in `VIDEO.json`. Its description carries the bounty
line and a play code (see `AGENT.md`).

## The program

`main.ts` copies `VIDEO.json` from the repository root to the output
directory. Run the local check from the repository root:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Check that `out/VIDEO.json` matches the repository's `VIDEO.json`
byte for byte, then remove `out/` before committing.

`MAKEFUN_BOT_DIR` defaults to `/bot` and `MAKEFUN_OUTPUT_DIR` defaults
to `/output`. The copy failing exits non-zero with an error message.
