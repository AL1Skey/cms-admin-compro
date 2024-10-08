import { Badge } from "@/components/ui/badge";

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

export default BasicBadge;