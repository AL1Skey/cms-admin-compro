import { Button } from "@/components/ui/button";
const GhostButton = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="ghost">Default</Button>
      <Button color="primary" variant="ghost">Primary</Button>
      <Button color="secondary" variant="ghost">Secondary</Button>
      <Button color="success" variant="ghost">Success</Button>
      <Button color="info" variant="ghost">Info</Button>
      <Button color="warning" variant="ghost">Warning</Button>
      <Button color="destructive" variant="ghost">Destructive</Button>
    </div>
  );
};

export default GhostButton;