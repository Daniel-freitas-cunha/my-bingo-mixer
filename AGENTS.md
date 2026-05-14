# AI Agent Workspace Guide

## What this project is
- A small client-side React + TypeScript app using Vite and Tailwind CSS v4.
- The game is a social bingo mixer: generate a bingo board, toggle squares, detect a bingo, and show a modal.
- No backend or API layer; all app logic lives under `src/`.

## How to run it
- Install: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Tests: `npm run test`

## Key files and directories
- `src/App.tsx` — app entry, switches between start and game screens.
- `src/hooks/useBingoGame.ts` — state management, localStorage persistence, game flow, and bingo detection triggers.
- `src/utils/bingoLogic.ts` — pure bingo logic functions (`generateBoard`, `toggleSquare`, `checkBingo`, `getWinningSquareIds`).
- `src/components/` — UI components: `StartScreen`, `GameScreen`, `BingoBoard`, `BingoSquare`, `BingoModal`.
- `src/data/questions.ts` — bingo question pool.
- `src/types/index.ts` — shared type definitions.
- `src/index.css` — Tailwind CSS import and global styling.
- `vite.config.ts` — Vite plugins, Tailwind integration, and GitHub Pages base path handling.

## Important conventions
- Use Tailwind CSS v4 idioms and prefer CSS `@theme` tokens over a config file.
- Keep business logic in `src/utils/bingoLogic.ts` and UI concerns in components.
- Preserve the browser-only `localStorage` guard in `src/hooks/useBingoGame.ts`.
- The project uses `vitest` with `jsdom`; test setup is in `src/test/setup.ts`.

## Useful existing workspace docs
- `README.md` — setup and repo overview.
- `workshop/GUIDE.md` — lab guide and learning flow.
- `.github/instructions/frontend-design.instructions.md` — frontend design guidance.
- `.github/instructions/tailwind-4.instructions.md` — Tailwind v4 best practices.

## Existing agent tooling
- `.github/agents/` contains project-specific agents for TDD, UI review, and frontend design.
- Use `tdd.agent.md` and related TDD agents for feature delivery with tests.

## Notes for agents
- This is a polish-focused frontend repo; prioritize clean, accessible, and playful UI updates.
- The app should remain lightweight and easy to understand.
- For build or test issues, the relevant scripts are in `package.json` and the workspace has no additional service dependencies.
