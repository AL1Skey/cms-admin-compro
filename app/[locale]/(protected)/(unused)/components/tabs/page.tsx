
import Card from "@/components/code-snippet";
import BasicTab from "./basic-tab";
import TabsWithIcon from "./tabs-with-icon";
import VerticalTab from "./vertical-tab";
import JustifyTab from "./justify-tab";
import { basicTab, justifyTab, tabsWithIcon, verticalTab } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";

const TabsPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Default Tabs" code={basicTab}>
          <BasicTab />
        </Card>
        <Card title="Tabs With Icon" code={tabsWithIcon}>
          <TabsWithIcon />
        </Card>
        <Card title="Vertical Tab" code={verticalTab}>
          <VerticalTab />
        </Card>
        <Card title="Justify Tabs" code={justifyTab}>
          <JustifyTab />
        </Card>
      </div>
    </div>
  );
};

export default TabsPage;