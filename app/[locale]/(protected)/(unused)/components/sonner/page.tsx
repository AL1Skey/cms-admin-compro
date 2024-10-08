import Card from "@/components/code-snippet";
import BasicSonner from "./basic-sonner";
import { basicSonner } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";
const SoonerPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <Card title="Basic Sooner" code={basicSonner}>
        <BasicSonner />
      </Card>
    </div>
  );
};

export default SoonerPage;