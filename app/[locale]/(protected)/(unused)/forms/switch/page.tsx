import Card from "@/components/code-snippet";
import BasicSwitch from "./basic-switch";
import ColorSwitch from "./color-switch";
import SwitchSize from "./switch-size";
import SwitchWithBadge from "./switch-with-badge";
import SwitchWithIcon from "./switch-with-icon";
import { basicSwitch, colorSwitch, switchSize, switchWithBadge, switchWithIcon } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";
const SwitchPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="space-y-6">
        <Card title="Basic Switch" code={basicSwitch}>
          <BasicSwitch />
        </Card>
        <Card title="Theme Colors" code={colorSwitch}>
          <ColorSwitch />
        </Card>
        <Card title="Switch Size" code={switchSize}>
          <SwitchSize />
        </Card>
        <Card title="Switch With Badge" code={switchWithBadge}>
          <SwitchWithBadge />
        </Card>
        <Card title="Switch With Icon" code={switchWithIcon}>
          <SwitchWithIcon />
        </Card>
      </div>
    </div>
  );
};

export default SwitchPage;