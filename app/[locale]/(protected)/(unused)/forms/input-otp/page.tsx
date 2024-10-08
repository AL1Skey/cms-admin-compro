import Card from "@/components/code-snippet";
import BasicInput from "./basic-input";
import PatternOtp from "./pattern-otp";
import SeperatorOtp from "./separator-otp";
import ControlledOtp from "./controlled-otp";
import { basicOtp, patternOtp, separatorOtp, controlledOtp } from "./source-code"
import SiteBreadcrumb from "@/components/site-breadcrumb";
const InputOtp = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="grid lg:grid-cols-2 gap-6 ">
        <Card title="Basic Otp" code={basicOtp}>
          <BasicInput />
        </Card>
        <Card title="Pattern Otp" code={patternOtp}>
          <PatternOtp />
        </Card>
        <Card title="Separator Otp" code={separatorOtp}>
          <SeperatorOtp />
        </Card>
        <Card title="Controlled Otp" code={controlledOtp}>
          <ControlledOtp />
        </Card>
      </div>
    </div>
  );
};

export default InputOtp;