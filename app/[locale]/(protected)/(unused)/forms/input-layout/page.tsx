import SiteBreadcrumb from "@/components/site-breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HorizontalForm from "./horizontal-form";
import HorizontalFormWithIcon from "./horizontal-form-icon";
import VerticalForm from "./vertical-form";
import VerticalFormWithIcon from "./vertical-form-icon";

const InputLayout = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card>
          <CardHeader>
            <CardTitle>Horizontal Form</CardTitle>
          </CardHeader>
          <CardContent>
            <HorizontalForm />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Horizontal Form With Icon</CardTitle>
          </CardHeader>
          <CardContent>
            <HorizontalFormWithIcon />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Vertical Form</CardTitle>
          </CardHeader>
          <CardContent>
            <VerticalForm />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Vertical Form With Icon</CardTitle>
          </CardHeader>
          <CardContent>
            <VerticalFormWithIcon />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InputLayout;