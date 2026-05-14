import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex aspect-square items-center justify-center rounded-3xl border border-white/10 p-4 text-center text-[0.78rem] leading-snug transition-all duration-150 select-none shadow-[0_0_6px_rgba(255,255,255,0.05)]';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-gradient-to-br from-[#7c3aed]/80 via-[#22d3ee]/60 to-[#ec4899]/80 border-[#ec4899]/70 text-white shadow-[0_0_20px_rgba(236,72,153,0.35)]'
      : 'bg-[rgba(34,211,238,0.16)] border-[rgba(45,212,191,0.45)] text-cyan-100 shadow-[0_0_16px_rgba(45,212,191,0.24)]'
    : 'bg-[rgba(255,255,255,0.04)] text-slate-200 shadow-[inset_0_0_10px_rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.08)]';

  const freeSpaceClasses = square.isFreeSpace
    ? 'bg-[rgba(124,58,237,0.18)] border-[rgba(124,58,237,0.35)] text-[#d8b4fe] font-semibold shadow-[0_0_20px_rgba(124,58,237,0.22)]'
    : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="break-words hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-2 right-2 text-sm text-cyan-100">✓</span>
      )}
    </button>
  );
}
