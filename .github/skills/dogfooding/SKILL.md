---
name: dogfooding
user-invocable: true
description: "Review this app as a critical dogfooder: run it, inspect the UI/game loop, and give honest feedback about how fun, clear, and engaging it feels."
---

# Dogfooding Skill

Use this skill when the user asks for a critical product-style review of the app experience.

## What to do

1. Confirm the app is running or start the dev server (`npm run dev`).
2. Inspect the app entry points (`src/App.tsx`, `src/components/*`, `src/hooks/useBingoGame.ts`, `src/utils/bingoLogic.ts`).
3. Evaluate the experience from a real-user perspective:
   - Onboarding clarity and first impression
   - Core gameplay loop and interaction feedback
   - Visual reward and emotional payoff for bingo
   - Replayability and motivation to keep playing
   - Social or party-game feel
   - Any friction, confusion, or missing polish
4. If the app is running in the browser, verify the UI responds correctly and the bingo flow completes.
5. Produce a concise critical review with specific strengths, weaknesses, and improvement suggestions.

## Output format

- `What works well`
- `What feels less fun`
- `Priority improvements`
- `Overall verdict`

## Quality criteria

- Be honest and user-centered, not just technical.
- Focus on fun, engagement, and game feel.
- Mention concrete UI/UX or gameplay issues, not just generalities.
- Keep feedback actionable and grounded in the app’s actual behavior.
