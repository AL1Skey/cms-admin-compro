import { Button } from "@/components/ui/button";
const ShadowButton = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button shadow="sm">Primary</Button>
      <Button color="secondary" shadow="md">Secondary</Button>
      <Button color="success" shadow="lg">Success</Button>
      <Button color="info" shadow="xl">Info</Button>
    </div>
  );
};

export default ShadowButton;