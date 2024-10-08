import Card from "@/components/code-snippet";
import BasicResizable from "./basic-resizable";
import { basicResizable } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";
const ResizablePage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <Card title="Resizable" code={basicResizable}>
        <BasicResizable />
      </Card>
    </div>
  );
};

export default ResizablePage;