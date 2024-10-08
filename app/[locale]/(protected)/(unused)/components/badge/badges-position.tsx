import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const BadgePositions = () => {
  return (
    <div className="flex flex-wrap gap-8">
      <Button className="relative">
        Notifications
        <Badge color="success" className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">5</Badge>
      </Button>
      <Button color="success" className="relative">
        Messages
        <Badge color="warning" className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">5</Badge>
      </Button>
      <Button color="destructive" variant="outline" className="relative">
        Audio Call
        <Badge color="destructive" className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2">5</Badge>
      </Button>
      <Button color="success" variant="outline" className="relative">
        Drafts
        <Badge color="success" className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">5</Badge>
      </Button>
    </div>
  );
};

export default BadgePositions;