import Card from "@/components/code-snippet";
import BasicCard from "./basic-card";
import { hoverCard } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";
const HoverCardPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <Card title="Basic Hover Card" code={hoverCard}>
        <BasicCard />
      </Card>
    </div>
  );
};

export default HoverCardPage;