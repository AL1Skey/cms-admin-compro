import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const BadgesButton = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <Button>Notifications <Badge color="success" className="ms-1">5</Badge></Button>
      <Button
        color="success">Messages
        <Badge color="warning" className="ms-1">5</Badge>
      </Button>
      <Button
        color="destructive"
        variant="outline"
        className="hover:bg-transparent hover:text-destructive"
      >Mails
        <Badge color="destructive" className="ms-1">5</Badge>
      </Button>
    </div>
  );
};

export default BadgesButton;