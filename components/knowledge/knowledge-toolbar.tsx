import { SearchBar } from "@/components/knowledge/search-bar";
import { Button } from "@/components/ui/button";

type KnowledgeToolbarProps = {
  query: string;
};

export function KnowledgeToolbar({ query }: KnowledgeToolbarProps) {
  return (
    <div className="flex flex-col gap-3 rounded-[1.75rem] border border-white/10 bg-slate-950/50 p-4 md:flex-row md:items-center md:justify-between">
      <SearchBar placeholder="Search reviewers, tags, or doctrines..." value={query} />
      <div className="flex gap-3">
        <Button variant="outline">Filter tags</Button>
        <Button>New reviewer</Button>
      </div>
    </div>
  );
}
