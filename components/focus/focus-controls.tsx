import { Button } from "@/components/ui/button";

type FocusControlsProps = {
  isRunning: boolean;
};

export function FocusControls({ isRunning }: FocusControlsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>{isRunning ? "Pause" : "Start"}</Button>
      <Button variant="outline">Reset</Button>
      <Button variant="secondary">Log session</Button>
    </div>
  );
}
