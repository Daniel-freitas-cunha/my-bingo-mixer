import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex min-h-screen flex-col px-4 py-6 sm:px-6 lg:px-8">
      <header className="flex items-center justify-between rounded-[1.75rem] border border-white/10 bg-[rgba(8,12,35,0.95)] p-4 shadow-[0_20px_60px_rgba(59,130,246,0.14)]">
        <button
          onClick={onReset}
          className="rounded-2xl border border-accent-bright/30 bg-[rgba(15,23,42,0.9)] px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-[rgba(15,23,42,1)]"
        >
          ← Back
        </button>
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#7dd3fc]/70">Neon Bingo</p>
          <h1 className="text-2xl font-black text-white">Bingo Mixer</h1>
        </div>
        <div className="w-16" />
      </header>

      <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-300">
        Tap a square when you find someone who matches the question. Reach 5 in a row to unlock the bingo event.
      </p>

      {hasBingo && (
        <div className="mt-4 rounded-3xl bg-linear-to-r from-accent/90 via-accent-bright/80 to-cta/90 px-4 py-3 text-center font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,0.22)]">
          🎉 BINGO! You got a neon line!
        </div>
      )}

      <div className="mt-8 flex-1">
        <div className="mx-auto flex max-w-5xl justify-center rounded-4xl border border-white/10 bg-[rgba(5,8,21,0.86)] p-4 shadow-[0_35px_80px_rgba(11,36,75,0.16)]">
          <BingoBoard
            board={board}
            winningSquareIds={winningSquareIds}
            onSquareClick={onSquareClick}
          />
        </div>
      </div>
    </div>
  );
}
