import { Badge } from "@/components/ui/badge";

type TagFilterProps = {
  activeTags: string[];
  tags: string[];
};

export function TagFilter({ activeTags, tags }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge
          className={
            activeTags.includes(tag)
              ? "border-violet-400/30 bg-violet-500/15 text-violet-100"
              : undefined
          }
          key={tag}
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
}
