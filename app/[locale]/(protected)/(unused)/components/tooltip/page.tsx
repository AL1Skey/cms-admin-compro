import Card from "@/components/code-snippet";
import TooltipPositions from "./tooltip-positions";
import VariousTrigger from "./various-trigger";
import WithDelay from "./with-delay";
import ControlTooltip from "./control-tooltip";
import BasicTooltip from "./basic-tooltip";
import TooltipWithArrow from "./tooltip-with-arrow";
import { basicTooltip, controlTooltip, tooltipPosition, tooltipWithDelay, tooltupWithArrow, variousTrigger } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";

const TooltipPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="grid grid-cols-1  gap-6">
        <Card title="Basic Tooltip" code={basicTooltip}>
          <BasicTooltip />
        </Card>
        <Card title="Tooltip with Arrow" code={tooltupWithArrow}>
          <TooltipWithArrow />
        </Card>
        <Card title="Tooltip Position" code={tooltipPosition}>
          <TooltipPositions />
        </Card>
        <Card title="Various Triggers" code={variousTrigger}>
          <VariousTrigger />
        </Card>
        <Card title="Delay Tooltip" code={tooltipWithDelay}>
          <WithDelay />
        </Card>
        <Card title="Control Tooltip" code={controlTooltip}>
          <ControlTooltip />
        </Card>
      </div>
    </div>
  );
};

export default TooltipPage;