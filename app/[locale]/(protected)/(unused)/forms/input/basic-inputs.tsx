import { Input } from "@/components/ui/input";
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

export default BasicInputs;