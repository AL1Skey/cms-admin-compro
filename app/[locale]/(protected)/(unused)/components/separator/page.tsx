import Card from "@/components/code-snippet";
import BasicSeparator from "./basic-separator";
import { basicSeparator } from "./souce-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";
const SeparatorPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <Card title="Separator" code={basicSeparator}>
        <BasicSeparator />
      </Card>
    </div>
  );
};

export default SeparatorPage;