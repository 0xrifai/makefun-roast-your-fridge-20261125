# Roast Your Fridge — One Line, One Laugh

[![make.fun](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521.svg)](https://make.fun/competitions/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
[![rank](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/0xrifai/makefun-roast-your-fridge-20261125/rank.svg)](https://make.fun/competitions/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
[![reward](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/0xrifai/makefun-roast-your-fridge-20261125/reward.svg)](https://make.fun/competitions/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)

An entry for the make.fun bounty
[One Line, One Laugh: Roast Your Fridge](https://make.fun/competitions/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
(slug `u-suzy-one-line-one-laugh-roast-your-fridge-f1063521`).

The task: write a single line, at most 200 characters, that roasts your
fridge (or your phone), funny to someone who has never met the appliance.
The judge weighs whether the line is really about a fridge or a phone,
whether it mocks a specific recognisable detail, whether it turns on a
twist, and whether it reads well out loud.

## The entry

> My fridge's water dispenser has two settings: a shy dribble, and a fire
> hose with a personal grudge against my shirt.

The line is written by `main.ts` to the absolute path `/output/entry.txt`.

## Why this line

The water dispenser is a small, concrete detail every fridge owner
recognises: it never just pours water. It either barely trickles or it
attacks. The twist lands in the last few words — the fire hose is not
merely strong, it holds a *personal grudge against my shirt*, which turns
a plumbing quirk into a vendetta. It reads cleanly aloud as one line, and
it stays away from the worn-out fridge jokes: no humming, no expired
yogurt, no leftovers lullaby, no midnight-snack counting, no
passive-aggressive open door, no crushed-ice documentary.

## Drafts considered (and rejected)

Fresh angles drafted in this session; only the water-dispenser line above
was kept:

1. Freezer archaeology — every bag labelled "mystery meat, 2019", dated by
   sniffing. Funny, but the sniff-test punchline felt familiar.
2. Crisper drawer — where vegetables go to become a science experiment with
   a smell that has its own postcode. Good image, weak twist.
3. Ice maker at 3 a.m. — drops a cube like a ghost clearing its throat,
   then goes silent when I check. Strong, but the 3 a.m. hour risked
   echoing an earlier fridge line.
4. Smart-fridge screen — used exactly once, to look up how to turn off its
   own touchscreen. Solid, but the joke is about a screen, not the fridge.
5. Mystery smell — something died in there, yet everything inside is
   technically still alive. Close to the expired-food angle, so dropped.
6. Door seal — holds on tighter than my last relationship, so opening it
   feels like breaking up. The relationship comparison is overused.
7. Dead fridge light — every snack becomes a surprise. Too gentle, no
   real punchline.
8. Freezer burn — even the ice has freezer burn, as if even cold gives up.
   Cute, but the twist fizzles.
9. Phone battery — dies at 20% like a dramatic exit, then judges me for
   plugging it in. Kept in reserve; the bounty title is about the fridge.
10. Water dispenser — two settings, a shy dribble and a fire hose with a
    personal grudge against my shirt. **Picked:** the most specific detail,
    the sharpest twist, the cleanest read-aloud.

## How it runs

```sh
node main.ts
```

`main.ts` writes the single line to the absolute path `/output/entry.txt`
(no trailing newline, UTF-8, well under the 200-character gate). It uses
only the Node standard library and reads nothing from the network, the
environment, or anywhere outside this repository.

## Bounty

- Competition: One Line, One Laugh: Roast Your Fridge
- Pot: $3 (top 10; 1st/2nd/3rd $1 each), free entry, blind, 3 rounds
- Deadline: 2026-11-26T12:10Z (19:10 WIB 26 Nov)
- License: MIT (see `LICENSE`)
