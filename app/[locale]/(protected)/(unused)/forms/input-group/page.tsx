"use client";
import Card from "@/components/code-snippet";
import InputGroupSize from "./input-group-size";
import MergedInputGroup from "./merged-input-group";
import InputGroupsButton from "./input-groups-button";
import BasicInputGroup from "./basic-input-group";
import InputGroupRadius from "./input-group-radius";
import CheckboxRadioGroup from "./checkbox-radio-group";
import MultipleAddons from "./multiple-addons";
import InputButtonWithDropdown from "./input-button-with-dropdown";
import { basicInputGroup, checkboxRadioGroup, inputButtonWithDropdown, inputGroupButtons, inputGroupRadius, inputGroupSize, mergedInputGroup, multipleAddons } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";

const InputGrouPpage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Basic Input Group" code={basicInputGroup}>
          <div className=" space-y-4">
            <BasicInputGroup />
          </div>
        </Card>
        <Card title="Merged Input Group" code={mergedInputGroup}>
          <div className=" space-y-4">
            <MergedInputGroup />
          </div>
        </Card>
        <Card title="Input Group Radius" code={inputGroupRadius}>
          <div className=" space-y-4">
            <InputGroupRadius />
          </div>
        </Card>
        <Card title="Input Group Size" code={inputGroupSize}>
          <div className=" space-y-4">
            <InputGroupSize />
          </div>
        </Card>
        <Card title="Checkbox & Radio" code={checkboxRadioGroup}>
          <div className=" space-y-4">
            <CheckboxRadioGroup />
          </div>
        </Card>
        <Card title="Multiple Addons" code={multipleAddons}>
          <div className=" space-y-4">
            <MultipleAddons />
          </div>
        </Card>
        <Card title="Buttons Inputs" code={inputGroupButtons}>
          <div className=" space-y-4">
            <InputGroupsButton />
          </div>
        </Card>
        <Card title="Input Groups With Buttons With Dropdown" code={inputButtonWithDropdown}>
          <div className=" space-y-4">
            <InputButtonWithDropdown />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default InputGrouPpage;
