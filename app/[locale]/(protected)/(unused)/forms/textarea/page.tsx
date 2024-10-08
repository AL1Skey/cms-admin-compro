import Card from "@/components/code-snippet";
import BasicTextarea from "./basic-textarea";
import DisplayedRows from "./displayed-rows";
import ColorsTextarea from "./colors-textarea";
import HorizontalLabel from "./horizontal-label";
import { basicTextarea, colorsTextarea, displayedRows, horizontalLabel } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";
const TextareaPage = () => {
  return (
    <div>
      <SiteBreadcrumb/>
      <div className="space-y-6">
        <Card title="Basic Textarea" code={basicTextarea}>
          <BasicTextarea />
        </Card>
        <Card title="Colors Textarea" code={colorsTextarea}>
          <ColorsTextarea />
        </Card>
        <Card title="Displayed Rows" code={displayedRows}>
          <DisplayedRows />
        </Card>
        <Card title="Horizontal Label" code={horizontalLabel}>
          <HorizontalLabel />
        </Card>
      </div>
    </div>
  );
};

export default TextareaPage;