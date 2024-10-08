import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const ColorSwitch = () => {
  return (
    <div className="flex items-center gap-6 flex-wrap">
      <div className="flex items-center gap-3">
        <Switch defaultChecked id="c1" />
        <Label htmlFor="c1">Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch defaultChecked color="primary" id="c2" />
        <Label htmlFor="c2">Primary</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch defaultChecked color="secondary" id="c3" />
        <Label htmlFor="c3">Secondary</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch defaultChecked color="info" id="c4" />
        <Label htmlFor="c4">Info</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch defaultChecked color="warning" id="c5" />
        <Label htmlFor="c5">Warning</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch defaultChecked color="success" id="c6" />
        <Label htmlFor="c6">Success</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch defaultChecked color="destructive" id="c7" />
        <Label htmlFor="c7">Destructive</Label>
      </div>
    </div>
  );
};

export default ColorSwitch;