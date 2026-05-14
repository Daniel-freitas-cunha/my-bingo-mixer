interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-10">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-4xl border border-white/10 bg-[rgba(8,12,35,0.92)] p-8 shadow-[0_30px_80px_rgba(14,30,110,0.22)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),transparent_55%)]" />
        <div className="relative space-y-10">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#7dd3fc]/70">Cyberpunk Mixer</p>
            <h1 className="text-5xl font-black tracking-tight text-white glow-text">Bingo Mixer</h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300">
              Explore the room, connect with neon minds, and mark your bingo in a glowing grid.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-[rgba(10,14,32,0.95)] p-6 shadow-[0_15px_45px_rgba(63,63,235,0.12)]">
            <h2 className="font-semibold text-white mb-4 text-lg">How to play</h2>
            <ul className="space-y-3 text-left text-sm text-slate-300">
              <li>• Find people who match each question</li>
              <li>• Tap a square when you find a match</li>
              <li>• Get 5 in a row to trigger a neon bingo</li>
            </ul>
          </div>

          <button
            onClick={onStart}
            className="w-full rounded-3xl bg-gradient-to-r from-[#7c3aed] via-[#22d3ee] to-[#ec4899] px-6 py-4 text-base font-semibold text-white shadow-[0_0_30px_rgba(236,72,153,0.35)] transition hover:brightness-110 active:scale-[0.98]"
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}
