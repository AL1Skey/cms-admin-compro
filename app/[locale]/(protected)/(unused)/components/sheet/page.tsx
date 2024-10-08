import Card from "@/components/code-snippet";
import BasicSheet from "./basic-sheet";
import SheetSide from "./sheet-side";
import { basicSheet, sheetPosition } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";
const SheetPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="space-y-6">
        <Card title="Basic Sheet" code={basicSheet}>
          <BasicSheet />
        </Card>
        <Card title="Sheet Position" code={sheetPosition}>
          <SheetSide />
        </Card>
      </div>
    </div>
  );
};

export default SheetPage;