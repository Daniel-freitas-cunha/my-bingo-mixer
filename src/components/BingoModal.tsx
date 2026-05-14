interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6">
      <div className="relative w-full max-w-sm overflow-hidden rounded-4xl border border-accent-bright/30 bg-[rgba(4,8,22,0.94)] p-6 text-center shadow-[0_0_80px_rgba(34,211,238,0.16)]">
        <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.22),transparent_50%)]" />
        <div className="relative space-y-5">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#0f172a]/80 border border-accent-bright/40 text-5xl text-fg-soft shadow-[0_0_40px_rgba(34,211,238,0.25)]">
            🎉
          </div>
          <h2 className="text-4xl font-black text-white">BINGO!</h2>
          <p className="text-sm leading-relaxed text-slate-300">
            A linha Cyberpunk foi ativada. Continue conectando e marcando cartas.
          </p>
          <button
            onClick={onDismiss}
            className="mt-2 inline-flex w-full justify-center rounded-3xl bg-linear-to-r from-accent via-accent-bright to-cta px-6 py-3 text-base font-semibold text-white shadow-[0_0_30px_rgba(236,72,153,0.28)] transition hover:brightness-110 active:scale-[0.98]"
          >
            Keep Playing
          </button>
        </div>
      </div>
    </div>
  );
}
