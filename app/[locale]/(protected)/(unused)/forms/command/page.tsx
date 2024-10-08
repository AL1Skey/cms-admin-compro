import Card from "@/components/code-snippet";
import BasicCommand from "./basic-command";
import { basicCommand } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";

const CommandPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <Card title="Command" code={basicCommand}>
        <BasicCommand />
      </Card>
    </div>
  );
};

export default CommandPage;