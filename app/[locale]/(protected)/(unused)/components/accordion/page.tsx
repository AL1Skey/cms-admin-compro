import Card from "@/components/code-snippet";
import BasicAccordion from "./basic-accordion";
import { basicAccordion } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";
const AccordionPage = () => {
  return (
    <div>
      <SiteBreadcrumb/>
      <Card title="Basic Accordion" code={basicAccordion}>
        <BasicAccordion />
      </Card>
    </div>
  );
};

export default AccordionPage;