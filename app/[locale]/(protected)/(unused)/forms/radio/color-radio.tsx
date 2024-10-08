import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const ColorRadio = () => {
  return (
    <div className="flex flex-wrap gap-6">
    <RadioGroup className="flex flex-wrap" default-value="r1">
      <div className="flex items-center gap-2">
        <RadioGroupItem defaultChecked id="r1" value="r1" />
        <Label className="text-default-600" htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem color="primary" id="r2" value="r2" />
        <Label className="text-default-600" htmlFor="r2">Primary</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem color="info" id="r3" value="r3" />
        <Label className="text-default-600" htmlFor="r3">Info</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem color="success" id="r4" value="r4" />
        <Label className="text-default-600" htmlFor="r4">Success</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem color="warning" id="r5" value="r5" />
        <Label className="text-default-600" htmlFor="r5">Warning</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem color="destructive" id="r6" value="r6" />
        <Label className="text-default-600" htmlFor="r6">Destructive</Label>
      </div>
    </RadioGroup>
    </div>
  );
};

export default ColorRadio;