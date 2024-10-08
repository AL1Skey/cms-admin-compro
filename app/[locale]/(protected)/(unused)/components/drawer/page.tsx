import Card from "@/components/code-snippet";
import BasicDrawer from "./basic-drawer";
import { basicDrawer } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";

const Drawer = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="space-y-6">
        <Card title="Basic Drawer" code={basicDrawer}>
          <BasicDrawer />
        </Card>
      </div>
    </div>
  );
};

export default Drawer;