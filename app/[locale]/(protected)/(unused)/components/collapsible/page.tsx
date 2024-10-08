import Card from "@/components/code-snippet";
import BasicCollapsible from "./basic-collapsible";
import SiteBreadcrumb from "@/components/site-breadcrumb";
import {basicCarousel} from "./source-code"
const CollapsiblePage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <Card title="Collapsible" code={basicCarousel}>
        <BasicCollapsible />
      </Card>
    </div>
  );
};

export default CollapsiblePage;