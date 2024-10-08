import Card from "@/components/code-snippet";
import BasicMenu from "./basic-menu";
import { basicMenu } from "./souce-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";

const MenuBarPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <Card title="Basic Menu" code={basicMenu}>
        <BasicMenu />
      </Card>
    </div>
  );
};

export default MenuBarPage;