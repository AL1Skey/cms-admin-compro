"use client";
import Card from "@/components/code-snippet";
import ReactSelectOption from "./react-select-options";
import BasicSelect from "./basic-select";
import SiteBreadcrumb from "@/components/site-breadcrumb";


const ReactSelectPage = () => {
  return (
    <div>
      <SiteBreadcrumb/>
    <div className="space-y-5">
      <Card title="Basic React Select" code="">
        <BasicSelect />
      </Card>
      <Card title="React Select Options" code="">
        <ReactSelectOption />
      </Card>
    </div>
    </div>
  );
};

export default ReactSelectPage;
