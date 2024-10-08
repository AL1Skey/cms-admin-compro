import Card from "@/components/code-snippet";
import BasicNav from "./basic-nav";
import { basicNav } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";
const NavPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <Card title="Navigation Menu" code={basicNav}>
        <BasicNav />
      </Card>
    </div>
  );
};

export default NavPage;