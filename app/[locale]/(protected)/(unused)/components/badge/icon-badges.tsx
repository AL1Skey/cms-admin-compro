import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const IconBadges = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <Badge> <Star className="w-3.5 h-3.5 -mt-0.5 me-0.5" /> Default</Badge>
      <Badge color="primary"> <Star className="w-3.5 h-3.5 -mt-0.5 me-0.5" /> Primary</Badge>
      <Badge color="secondary"> <Star className="w-3.5 h-3.5 -mt-0.5 me-0.5" /> Secondary</Badge>
      <Badge color="success"><Star className="w-3.5 h-3.5 -mt-0.5 me-0.5" /> Success</Badge>
      <Badge color="info"><Star className="w-3.5 h-3.5 -mt-0.5 me-0.5" /> Info</Badge>
      <Badge color="warning"><Star className="w-3.5 h-3.5 -mt-0.5 me-0.5" /> Warning</Badge>
      <Badge color="destructive"><Star className="w-3.5 h-3.5 -mt-0.5 me-0.5" /> Destructive</Badge>
    </div>
  );
};

export default IconBadges;