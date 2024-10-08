import { Button } from "@/components/ui/button";
const SizesButton = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="lg">Large</Button>
      <Button>Default</Button>
      <Button size="md">medium</Button>
      <Button size="sm">Small</Button>
    </div>
  );
};

export default SizesButton;