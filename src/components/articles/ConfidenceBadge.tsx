import { Badge } from "@/components/common/Badge";
import { getConfidenceLabel, getConfidenceColor } from "@/lib/utils";

export function ConfidenceBadge({ score }: { score: number }) {
  return (
    <Badge className={getConfidenceColor(score)}>
      {getConfidenceLabel(score)} ({Math.round(score * 100)}%)
    </Badge>
  );
}
