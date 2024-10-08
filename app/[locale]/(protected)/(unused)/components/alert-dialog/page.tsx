import Card from "@/components/code-snippet";
import BasicAlertDialog from "./basic-alert-dialog";
import SiteBreadcrumb from "@/components/site-breadcrumb";
import {basicAlertDialog} from "./source-code";
const AlertDialogPage = () => {
  return (
    <div>
      <SiteBreadcrumb/>
      <Card title="Basic Alert Dialog" code={basicAlertDialog}>
        <BasicAlertDialog />
      </Card>
    </div>
  );
};

export default AlertDialogPage;