import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SwitchSize = () => {
  return (
    <div className="flex items-center gap-6 flex-wrap">
      <div className="flex items-center gap-3">
        <Switch defaultChecked id="sm" size="sm"/>
        <Label htmlFor="sm">Small Size</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch defaultChecked id="default" />
        <Label htmlFor="default">Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch defaultChecked id="md" size="md"/>
        <Label htmlFor="md">Medium Size</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch defaultChecked id="lg" size="lg"/>
        <Label htmlFor="lg">Large Size</Label>
      </div>
    
    </div>
  );
};

export default SwitchSize;