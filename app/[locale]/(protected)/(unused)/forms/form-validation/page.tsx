import SiteBreadcrumb from "@/components/site-breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SimpleFormValidation from "./simple-form";
import ValidateWithTooltip from "./validate-with-tooltip";
import ValidateRadio from "./validate-radio";
import MultipleTypes from "./multiple-types";
import PasswordValidation from "./passoword-validation";

const FormValidation = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-2 lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle> Simple Form Validation</CardTitle>
            </CardHeader>
            <CardContent>
              <SimpleFormValidation/>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle> Simple Form Validation With Tooltip</CardTitle>
            </CardHeader>
            <CardContent>
              <ValidateWithTooltip/>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle> Validate Radio Group</CardTitle>
            </CardHeader>
            <CardContent>
              <ValidateRadio/>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Validate Password</CardTitle>
            </CardHeader>
            <CardContent>
              <PasswordValidation/>
            </CardContent>
          </Card>
        </div>
    
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Multiple Types</CardTitle>
            </CardHeader>
            <CardContent>
              <MultipleTypes/>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FormValidation;