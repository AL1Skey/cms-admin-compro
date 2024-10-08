import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const BasicRadio = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <RadioGroup
        className="flex flex-wrap"
        default-value="default"
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem defaultChecked id="default" value="default" />
          <Label className="text-default-600" htmlFor="default">Default</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="Unselected" value="Unselected" />
          <Label className="text-default-600" htmlFor="Unselected">Unselected</Label>
        </div>
      </RadioGroup>
      <RadioGroup default-value="disabled">
        <div className="flex items-center gap-2">
          <RadioGroupItem disabled checked id="disabled" value="disabled" />
          <Label className="text-default-600" htmlFor="disabled">Disabled</Label>
        </div>
      </RadioGroup>
      <RadioGroup>
        <div className="flex items-center gap-2">
          <RadioGroupItem
            disabled
            id="Unselected Disabled"
            value="Unselected Disabled"
          />
          <Label className="text-default-600" htmlFor="Unselected Disabled">Unselected Disabled</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default BasicRadio;