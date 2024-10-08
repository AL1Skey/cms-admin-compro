import Card from "@/components/code-snippet";
import BasicSelect from "./basic-select";
import ControlledSelect from "./controlled-select";
import ColorSelect from "./color-select";
import SizesSelect from "./size-select";
import SelectScrollable from "./scrollable-select";
import { basicSelect,controlledSelect,colorSelect, sizeSelect, scrollableSelect } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";
const SelectPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <Card title="Basic Select" code={basicSelect}>
          <BasicSelect />
        </Card>
        <Card title="Controlled Select" code={controlledSelect}>
          <ControlledSelect />
        </Card>
        <Card title="Colors" code={colorSelect}>
          <ColorSelect />
        </Card>
        <Card title="Size" code={sizeSelect}>
          <SizesSelect />
        </Card>
        <Card title="Scrollable Select" code={scrollableSelect}>
          <SelectScrollable />
        </Card>
      </div>
    </div>
  );
};

export default SelectPage;