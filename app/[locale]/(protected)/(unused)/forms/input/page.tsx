import Card from "@/components/code-snippet";
import BasicInputs from "./basic-inputs";
import InputColors from "./input-colors";
import InputSize from "./input-size";
import { basicInput, inputColors, inputSize } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";
const InputPage = () => {
  return (
    <div>
      <SiteBreadcrumb/>
      <div className="space-y-6">
        <Card title="Basic Inputs" code={basicInput}>
          <BasicInputs />
        </Card>
        <Card title="Color Inputs" code={inputColors}>
          <InputColors />
        </Card>
        <Card title="Size" code={inputSize}>
          <InputSize />
        </Card>
      </div>
    </div>
  );
};

export default InputPage;