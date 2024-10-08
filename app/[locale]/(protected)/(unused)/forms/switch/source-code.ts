export const basicSwitch=`import { Label } from "@/components/ui/label";
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

export default BasicSwitch;`

export const colorSwitch=`import { Label } from "@/components/ui/label";
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

export default ColorSwitch;`

export const switchSize=`import { Label } from "@/components/ui/label";
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

export default SwitchSize;`

export const switchWithBadge=`import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
const SwitchWithBadge = () => {
  return (
    <div className="flex items-center gap-6 flex-wrap">
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          id="badge1"
          startContent="On"
          endContent="Off"
        />
        <Label htmlFor="badge1">Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="primary"
          id="badge2"
          startContent="On"
          endContent="Off" />
        <Label htmlFor="badge2">Primary</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="secondary"
          id="badge3"
          startContent="On"
          endContent="Off"
        />
        <Label htmlFor="badge3">Secondary</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="info"
          id="badge4"
          startContent="On"
          endContent="Off"
        />
        <Label htmlFor="badge4">Info</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="warning"
          id="badge5"
          startContent="On"
          endContent="Off"
        />
        <Label htmlFor="badge5">Warning</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="success"
          id="badge6"
          startContent="On"
          endContent="Off"
        />
        <Label htmlFor="badge6">Success</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="destructive"
          id="badge7"
          startContent="On"
          endContent="Off"
        />
        <Label htmlFor="badge7">Destructive</Label>
      </div>
    </div>
  );
};

export default SwitchWithBadge;`

export const switchWithIcon=`import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Ban, Bell, Check, Lock, LockOpen, Moon, PhoneIncoming, PhoneMissed, Sun, Volume2, VolumeX, X } from "lucide-react";

const SwitchWithIcon = () => {
  return (
    <div className="flex items-center gap-6 flex-wrap">
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          id="badge_icon1"
          startContent={<Volume2 className="w-4 h-4" />}
          endContent={<VolumeX className="w-4 h-4 text-default-900" />}
        />
        <Label htmlFor="badge_icon1">Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="primary"
          id="badge_icon2"
          startContent={<Check className="w-4 h-4" />}
          endContent={<X className="w-4 h-4 text-default-900" />} />
        <Label htmlFor="badge_icon2">Primary</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="secondary"
          id="badge_icon3"
          startContent={<Check className="w-4 h-4" />}
          endContent={<X className="w-4 h-4 text-default-900" />}
        />
        <Label htmlFor="badge_icon3">Secondary</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="info"
          id="badge_icon4"
          startContent={<PhoneIncoming className="w-4 h-4" />}
          endContent={<PhoneMissed className="w-4 h-4 text-default-900" />}
        />
        <Label htmlFor="badge_icon4">Info</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="warning"
          id="badge_icon5"
          startContent={<Check className="w-4 h-4" />}
          endContent={<Ban className="w-4 h-4 text-default-900" />}
        />
        <Label htmlFor="badge_icon5">Warning</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="success"
          id="badge_icon6"
          startContent={<Sun className="w-4 h-4" />}
          endContent={<Moon className="w-4 h-4 text-default-900" />}
        />
        <Label htmlFor="badge_icon6">Success</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          defaultChecked
          color="destructive"
          id="badge_icon7"
          startContent={<LockOpen className="w-4 h-4" />}
          endContent={<Lock className="w-4 h-4 text-default-900" />}
        />
        <Label htmlFor="badge_icon7">Destructive</Label>
      </div>
    </div>
  );
};

export default SwitchWithIcon;`