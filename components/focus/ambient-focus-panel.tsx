export function AmbientFocusPanel() {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(109,40,217,0.18),transparent_45%),rgba(15,23,42,0.72)] p-8">
      <p className="text-xs uppercase tracking-[0.3em] text-amber-100/80">
        Ambient focus
      </p>
      <h3 className="mt-4 text-3xl text-white">Quiet, steady, distraction-light.</h3>
      <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
        This panel is a good home for soundscapes, timer state, session notes, and
        calming visual feedback.
      </p>
    </section>
  );
}
