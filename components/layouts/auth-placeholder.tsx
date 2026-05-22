type AuthPlaceholderProps = {
  actionLabel: string;
  description: string;
  helperText: string;
  title: string;
};

export function AuthPlaceholder({
  actionLabel,
  description,
  helperText,
  title,
}: AuthPlaceholderProps) {
  return (
    <section className="jeoxora-shell p-8 md:p-10">
      <span className="jeoxora-pill">Route Ready</span>
      <h2 className="mt-6 text-4xl leading-tight text-white">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
      <button
        className="mt-8 rounded-full bg-violet-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-500"
        type="button"
      >
        {actionLabel}
      </button>
      <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-6 text-slate-400">
        {helperText}
      </p>
    </section>
  );
}
