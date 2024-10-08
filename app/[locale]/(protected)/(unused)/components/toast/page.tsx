import Card from "@/components/code-snippet";
import BasicToast from "./basic-toast";
import ToastWithTitle from "./toast-with-title";
import ToastWithAction from "./toast-with-action";
import ToastVariant from "./toast-variant";
import { basicToast, toastVariant, toastWithAction, toastWithTitle } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";
const ToastPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <Card title="Basic Toast" code={basicToast}>
          <BasicToast />
        </Card>
        <Card title="Toast with Title" code={toastWithTitle}>
          <ToastWithTitle />
        </Card>
        <Card title="Toast with Action" code={toastWithAction}>
          <ToastWithAction />
        </Card>
        <Card title="Toast Variant" code={toastVariant}>
          <ToastVariant />
        </Card>
      </div>
    </div>
  );
};

export default ToastPage;