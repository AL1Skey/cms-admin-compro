import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const BasicCheckbox = () => {
  return (
    <div className="flex flex-wrap gap-6">
      <div className="flex gap-3 items-center">
        <Checkbox id="cb1" />
        <Label htmlFor="cb1">Checked</Label>
      </div>
      <div className="flex gap-3 items-center">
        <Checkbox id="cb2" defaultChecked />
        <Label htmlFor="cb2">Unchecked</Label>
      </div>
      <div className="flex gap-3 items-center">
        <Checkbox id="cb3" disabled />
        <Label htmlFor="cb3">Unchecked Disabled</Label>
      </div>
      <div className="flex gap-3 items-center">
        <Checkbox id="cb3" defaultChecked disabled />
        <Label htmlFor="cb3">Checked Disabled</Label>
      </div>
    </div>
  );
};

export default BasicCheckbox;