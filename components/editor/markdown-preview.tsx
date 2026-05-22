type MarkdownPreviewProps = {
  content: string;
};

export function MarkdownPreview({ content }: MarkdownPreviewProps) {
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-6">
      <h3 className="text-2xl text-white">Preview</h3>
      <pre className="mt-4 whitespace-pre-wrap font-sans text-sm leading-7 text-slate-300">
        {content}
      </pre>
    </article>
  );
}
