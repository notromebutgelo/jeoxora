import { Badge } from "@/components/ui/badge";
import { getMasteryLabel } from "@/features/flashcards/mastery-utils";

type MasteryBadgeProps = {
  mastery: number;
};

export function MasteryBadge({ mastery }: MasteryBadgeProps) {
  return <Badge>{getMasteryLabel(mastery)}</Badge>;
}
