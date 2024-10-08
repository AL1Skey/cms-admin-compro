import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const BasicSwitch = () => {
  return (
    <div className="flex items-center gap-6 flex-wrap">
      <div className="flex items-center gap-3">
        <Switch defaultChecked id="s1" />
        <Label htmlFor="s1">Active Switch</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="s2" />
        <Label htmlFor="s2">Inactive Switch</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="s3" disabled defaultChecked />
        <Label htmlFor="s3" >Disabled Active Switch</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="s3" disabled/>
        <Label htmlFor="s3" >Disabled Inactive Switch</Label>
      </div>

    </div>
  );
};

export default BasicSwitch;