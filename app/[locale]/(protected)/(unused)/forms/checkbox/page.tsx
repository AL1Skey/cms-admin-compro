import Card from "@/components/code-snippet";
import BasicCheckbox from "./basic-checkbox";
import ColorCheckbox from "./color-checkbox";
import OptionsArrayCheckbox from "./options-array";
import { basicCheckbox, colorCheckbox, optionsArrayCheckbox } from "./soure-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";
const CheckboxPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="space-y-6">
        <Card title="Basic Checkbox" code={basicCheckbox}>
          <BasicCheckbox />
        </Card>
        <Card title="Color Checkbox" code={colorCheckbox}>
          <ColorCheckbox />
        </Card>
        <Card title="Options Array Checkbox" code={optionsArrayCheckbox}>
          <OptionsArrayCheckbox />
        </Card>
      </div>
    </div>
  );
};

export default CheckboxPage;