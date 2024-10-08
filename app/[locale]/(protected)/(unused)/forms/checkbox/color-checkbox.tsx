import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ColorCheckbox = () => {
  return (
    <div className="flex items-center gap-6 flex-wrap">
      <div className="flex items-center gap-3">
        <Checkbox id="default" defaultChecked />
        <Label htmlFor="default" >Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox defaultChecked id="primary" color="primary" />
        <Label htmlFor="primary" >Primary</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox defaultChecked id="secondary" color="secondary" />
        <Label htmlFor="secondary" >Secondary</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox defaultChecked id="info" color="info" />
        <Label htmlFor="info" >Info </Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox defaultChecked id="success" color="success" />
        <Label htmlFor="success" >Success </Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox defaultChecked id="warning" color="warning" />
        <Label htmlFor="warning" >Warning </Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox defaultChecked id="destructive" color="destructive" />
        <Label htmlFor="destructive"  >Destructive </Label>
      </div>

    </div>
  );
};

export default ColorCheckbox;