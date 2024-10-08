import Card from "@/components/code-snippet";
import BasicBreadcrumb from "./basic-breadcrumb";
import CustomSeparator from "./custom-separator";
import BreadcrumbDropdown from "./breadcrumb-dropdown";
import BreadcrumbCollapsed from "./breadcrumb-collapsed";
import { basicBreadcrumb, breadcrumbCollapsed, breadcrumbDropdown, customSeparator } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";
const BreadcrumbPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="space-y-6">
        <Card title="Basic Breadcrumb" code={basicBreadcrumb}>
          <BasicBreadcrumb />
        </Card>
        <Card title="Custom Separator" code={customSeparator}>
          <CustomSeparator />
        </Card>
        <Card title="Breadcrumb Dropdown" code={breadcrumbDropdown}>
          <BreadcrumbDropdown />
        </Card>
        <Card title="Breadcrumb Collapsed" code={breadcrumbCollapsed}>
          <BreadcrumbCollapsed />
        </Card>
      </div>
    </div>
  );
};

export default BreadcrumbPage;