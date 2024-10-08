import { Badge } from "@/components/ui/badge";
import { BellRing, Heart, Mail } from "lucide-react";

const BadgesIcon = () => {
  return (
    <div className="flex flex-wrap gap-10">
      <div className="relative inline-block">
        <BellRing className="w-5 h-5 text-default-700" />
        <Badge className="absolute top-0 right-0 rounded-full px-1 py-0.5 text-xs bg-default -translate-y-3.5 translate-x-3.5">15</Badge>
      </div>
      <div className="relative inline-block">
        <Mail className="w-5 h-5 text-default-700" />
        <Badge className="absolute top-0 right-0 rounded-full px-1.5 py-0.5 text-xs bg-primary -translate-y-3.5 translate-x-3.5">5</Badge>
      </div>
      <div className="relative inline-block">
        <Heart className="w-5 h-5 text-default-700" />
        <Badge className="absolute top-0 right-0 rounded-full px-1.5 py-0.5 text-xs bg-warning -translate-y-3.5 translate-x-3.5">8</Badge>
      </div>
    </div>
  );
};

export default BadgesIcon;