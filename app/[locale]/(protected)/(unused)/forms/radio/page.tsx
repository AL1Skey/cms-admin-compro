import Card from "@/components/code-snippet";
import BasicRadio from "./basic-radio";
import ColorRadio from "./color-radio";
import SizesRadio from "./sizes-radio";
import RadioGroupOptionsArray from "./radio-group-array";
import { basicRadio, colorRadio, radioGroupArray, sizesRadio } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";

const RadioPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="space-y-6">
        <Card title="Basic Radio" code={basicRadio}>
          <BasicRadio />
        </Card>
        <Card title="Color" code={colorRadio}>
          <ColorRadio />
        </Card>
        <Card title="Radio Button Size" code={sizesRadio}>
          <SizesRadio />
        </Card>
        <Card title="Radio Group Options Array" code={radioGroupArray}>
          <RadioGroupOptionsArray />
        </Card>
      </div>
    </div>
  );
};

export default RadioPage;