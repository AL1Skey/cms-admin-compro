import Card from "@/components/code-snippet";
import BasicCombobox from "./basic-combobox";
import { basicCombobox } from "./soure-code"
import SiteBreadcrumb from "@/components/site-breadcrumb";
const ComboboxPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <Card title="Combobox Page" code={basicCombobox}>
        <BasicCombobox />
      </Card>
    </div>
  );
};

export default ComboboxPage;