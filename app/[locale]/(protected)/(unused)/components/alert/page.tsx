import Card from "@/components/code-snippet";
import SoftColorsAlert from "./soft-colors";
import LinkColorsAlert from "./link-colors";
import DissmissableAlert from "./dismissable-alert";
import DissmissableSoftAlert from "./dismissable-softalert";
import OutlineAlert from "./outline-alert";
import OutlineAlertIcon from "./outline-alerticon";
import BasicAlert from "./basic-alert";
import { basicAlert, dismissableAlert, dismissableSoftAlert, linkColorsAlert, outlineAlert, outlineAlertIcon, softColorAlert } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";

const AlertPage = () => {
  return (
    <>
    <SiteBreadcrumb/>
      <div className="grid grid-cols-2  gap-6">
        <div className="col-span-2 lg:col-span-1">
          <Card title="Color" code={basicAlert}>
            <BasicAlert />
          </Card>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Card title="Soft Color" code={softColorAlert}>
            <SoftColorsAlert />
          </Card>
        </div>
        <div className="col-span-2">
          <Card title="Link Colors" code={linkColorsAlert}>
            <LinkColorsAlert />
          </Card>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Card title="Dismissible Theme Color Alerts With Icon" code={dismissableAlert}>
            <DissmissableAlert />
          </Card>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Card title="Dismissible Light Color Alerts With Icon" code={dismissableSoftAlert}>
            <DissmissableSoftAlert />
          </Card>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Card title="Outline Theme Color Alerts" code={outlineAlert}>
            <OutlineAlert />
          </Card>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Card title="Outline Light Color Alerts With Icon" code={outlineAlertIcon}>
            <OutlineAlertIcon />
          </Card>
        </div>
      </div>
    </>
  );
};

export default AlertPage;