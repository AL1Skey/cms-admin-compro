import Card from "@/components/code-snippet";
import BasicDropdown from "./basic-dropdown";
import OutlineDropdown from "./outline-dropdown";
import FlatDropdown from "./flat-dropdown";
import DropdownSizes from "./dropdown-sizes";
import SplitDropdown from "./split-dropdown";
import SplitOutline from "./split-outline";
import DropdownDirections from "./dropdown-directions";
import { basicDropdown, dropdownDirections, dropdownSizes, flatDropdown, outlineDropdown, splitDropdown, splitOutlineDropdown } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";

const DropdownPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Basic Dropdown" code={basicDropdown}>
          <BasicDropdown />
        </Card>
        <Card title="Outline Dropdown" code={outlineDropdown}>
          <OutlineDropdown />
        </Card>
        <Card title="Flat Dropdown" code={flatDropdown}>
          <FlatDropdown />
        </Card>
        <Card title="Dropdown Sizes" code={dropdownSizes}>
          <DropdownSizes />
        </Card>
        <Card title="Dropdown Directions" code={dropdownDirections}>
          <DropdownDirections />
        </Card>
        <Card title="Split Dropdowns" code={splitDropdown}>
          <SplitDropdown />
        </Card>
        <Card title="Split Outline Dropdowns" code={splitOutlineDropdown}>
          <SplitOutline />
        </Card>
      </div>
    </div>
  );
};

export default DropdownPage;