import type { ReactNode } from "react";
import { WorkspaceShell } from "@/components/layouts/workspace-shell";

type WorkspaceLayoutProps = {
  children: ReactNode;
};

export default function WorkspaceLayout({ children }: WorkspaceLayoutProps) {
  return <WorkspaceShell>{children}</WorkspaceShell>;
}
