import { Badge } from "@/components/ui/badge";

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

export default RoundedBadge;