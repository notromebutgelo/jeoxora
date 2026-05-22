import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type DialogProps = {
  children?: ReactNode;
  description?: string;
  onConfirm?: () => void;
  onOpenChange?: (open: boolean) => void;
  open: boolean;
  title: string;
};

export function Dialog({
  children,
  description,
  onConfirm,
  onOpenChange,
  open,
  title,
}: DialogProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description ? <p className="mt-2 text-sm text-slate-300">{description}</p> : null}
        </CardHeader>
        {children ? <CardContent>{children}</CardContent> : null}
        <CardFooter className="flex gap-3">
          <Button onClick={() => onOpenChange?.(false)} type="button" variant="outline">
            Cancel
          </Button>
          <Button onClick={onConfirm} type="button">
            Confirm
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
