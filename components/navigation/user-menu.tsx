import { Button } from "@/components/ui/button";

type UserMenuProps = {
  userName: string;
};

export function UserMenu({ userName }: UserMenuProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="hidden text-right md:block">
        <p className="text-sm text-white">{userName}</p>
        <p className="text-xs text-slate-400">Workspace owner</p>
      </div>
      <Button size="sm" variant="outline">
        Account
      </Button>
    </div>
  );
}
