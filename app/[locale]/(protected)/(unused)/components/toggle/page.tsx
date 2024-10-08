import Card from "@/components/code-snippet";
import BasicToggle from "./basic-toggle";
import OutlineToggle from './outline-toggle';
import ToggleWithText from "./toggle-with-text";
import SizeToggle from "./size-toggle";
import DisabledToggle from "./disabled-toggle";
import ToggleGroups from "./toggle-groups";
import { basicToggle, disabledToggle, outlineToggle, sizeToggle, toggleGroups, toggleWithText } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";
const TogglePage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <Card title="Basic Toggle" code={basicToggle}>
          <BasicToggle />
        </Card>
        <Card title="Outline Toggle" code={outlineToggle}>
          <OutlineToggle />
        </Card>
        <Card title="Toggle With Text" code={toggleWithText}>
          <ToggleWithText />
        </Card>
        <Card title="Toggle Size" code={sizeToggle}>
          <SizeToggle />
        </Card>
        <Card title="Disabled Toggle" code={disabledToggle}>
          <DisabledToggle />
        </Card>
        <Card title="Toggle Group" code={toggleGroups}>
          <ToggleGroups />
        </Card>
      </div>
    </div>
  );
};

export default TogglePage;