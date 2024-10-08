import Card from "@/components/code-snippet";
import BasicPopover from "./basic-popover";
import PlacementPopover from "./placement-popover";
import { basicPopover, placementPopover } from "./souce-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";

const PopoverPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="space-y-6">
        <Card
          title="Basic Popover"
          code={basicPopover}>
          <BasicPopover />
        </Card>
        <Card
          title="Placement Popover"
          code={placementPopover}>
          <PlacementPopover />
        </Card>
      </div>
    </div >
  );
};

export default PopoverPage;