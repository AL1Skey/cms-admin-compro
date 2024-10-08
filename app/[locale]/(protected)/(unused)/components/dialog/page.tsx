import Card from "@/components/code-snippet";
import BasicDialog from "./basic-dialog";
import SizesDialog from "./size-dialog";
import {  basicDialog, sizesDialog } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";

const DialogPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="space-y-6">
        <Card title="Basic  Dialog" code={basicDialog}>
          <BasicDialog />
        </Card>
        <Card title="Size Dialog" code={sizesDialog}>
          <SizesDialog />
        </Card>
      </div>
    </div>
  );
};

export default DialogPage;