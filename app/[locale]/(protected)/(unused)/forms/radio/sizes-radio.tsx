import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const SizesRadio = () => {
  return (
    <div className="flex flex-wrap gap-6">
      <RadioGroup className="flex flex-wrap" default-value="s1">
        <div className="flex items-center gap-2">
          <RadioGroupItem color="success" id="s4" value="s4" />
          <Label className="text-default-600" htmlFor="s4">Default</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem defaultChecked id="s1" value="s1" size="sm" />
          <Label className="text-default-600" htmlFor="s1">Small Size</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem color="primary" id="s2" value="s2" size="md" />
          <Label className="text-default-600" htmlFor="s2">Medium Size</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem color="info" id="s3" value="s3" size="lg" />
          <Label className="text-default-600" htmlFor="s3">Large</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default SizesRadio;