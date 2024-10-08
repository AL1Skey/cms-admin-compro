export const basicInput=`import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BasicInputs = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="projectName">Project Name*</Label>
        <Input type="text" id="projectName" placeholder="Management Dashboard" />
      </div>
      <div className="space-y-1.5">
        <Label >Readonly Input</Label>
        <Input type="text" placeholder="You can't edit me" readOnly />
      </div>
      <div className="space-y-1.5">
        <Label>Disabled Input</Label>
        <Input type="text" placeholder="You can't edit me" disabled />
      </div>
    </div>
  );
};

export default BasicInputs;`

export const inputColors=`import { Input } from "@/components/ui/input";

const InputColors = () => {
  return (
    <div className="space-y-3">
      <Input placeholder="Default" />
      <Input placeholder="Primary" color="primary" />
      <Input placeholder="Secondary" color="secondary" />
      <Input placeholder="Info" color="info" />
      <Input placeholder="Warning" color="warning" />
      <Input placeholder="Success" color="success" />
      <Input placeholder="Destructive" color="destructive" />
    </div>
  );
};

export default InputColors;`

export const inputSize=`import { Input } from "@/components/ui/input";
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

export default InputSize;`