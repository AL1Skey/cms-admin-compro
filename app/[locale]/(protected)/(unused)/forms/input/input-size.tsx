import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const InputSize = () => {
  return (
    <div className="space-y-2.5">
      <div className="space-y-1.5">
        <Label htmlFor="sm">Small</Label>
        <Input size="sm" id="sm" placeholder="Small" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="default">Default</Label>
        <Input id="default" placeholder="Default" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="md">Medium</Label>
        <Input size="md" id="md" placeholder="Medium" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="lg">Large</Label>
        <Input size="lg" id="lg" placeholder="Large" />
      </div>
    </div>
  );
};

export default InputSize;