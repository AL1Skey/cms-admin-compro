export const basicBadges=`import { Badge } from "@/components/ui/badge";
const BasicBadge = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <Badge>Default</Badge>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="info">Info</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="destructive">Destructive</Badge>
    </div>
  );
};

export default BasicBadge;`

export const roundedBadges=`import { Badge } from "@/components/ui/badge";

const RoundedBadge = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <Badge rounded="sm">Default</Badge>
      <Badge color="primary" rounded="md" >Primary</Badge>
      <Badge color="secondary" rounded="lg">Secondary</Badge>
      <Badge color="success" rounded="full">Success</Badge>
    </div>
  );
};

export default RoundedBadge;`

export const iconBadges=`import { Badge } from "@/components/ui/badge";
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

export default IconBadges;`

export const badgesInButton=`import { Badge } from "@/components/ui/badge";
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

export default BadgesButton;`

export const badgesPosition=`import { Badge } from "@/components/ui/badge";
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

export default BadgePositions;`

export const gradientBadges=`import { Badge } from "@/components/ui/badge";

const GradientBadges = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <Badge className="bg-gradient-to-r from-primary to-success border-none">Primary</Badge>
      <Badge className="bg-gradient-to-r from-secondary to-secondary/80 border-none">Secondary</Badge>
      <Badge className="bg-gradient-to-tr from-success to-info border-none">Success</Badge>
      <Badge className="bg-gradient-to-tr from-info to-primary border-none">Info</Badge>
      <Badge className="bg-gradient-to-r from-warning to-destructive border-none">Warning</Badge>
      <Badge className="bg-gradient-to-r from-destructive to-warning border-none">Destructive</Badge>
    </div>
  );
};

export default GradientBadges;`

export const badgesIcon=`import { Badge } from "@/components/ui/badge";
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

export default BadgesIcon;`