import Card from "@/components/code-snippet";
import BasicContextMenu from "./basic-contextmenu";
import { basicContextMenu } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";

const ConextMenuPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <Card title="Context Menu" code={basicContextMenu}>
        <BasicContextMenu />
      </Card>
    </div>
  );
};

export default ConextMenuPage;