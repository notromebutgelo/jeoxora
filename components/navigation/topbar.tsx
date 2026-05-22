import { UserMenu } from "@/components/navigation/user-menu";
import { WorkspaceBreadcrumb } from "@/components/navigation/workspace-breadcrumb";

type TopbarProps = {
  title: string;
};

export function Topbar({ title }: TopbarProps) {
  return (
    <header className="jeoxora-shell flex items-center justify-between px-5 py-4">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-violet-200/70">
          Workspace
        </p>
        <h2 className="mt-1 text-xl text-white">{title}</h2>
        <WorkspaceBreadcrumb />
      </div>
      <UserMenu userName="Law Student" />
    </header>
  );
}
