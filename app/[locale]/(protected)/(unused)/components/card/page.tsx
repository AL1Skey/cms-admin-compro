import SiteBreadcrumb from "@/components/site-breadcrumb";
import BasicCard from "./basic-card";
import MarketingImageCard from "./marketing-image-card";
import SalesAutomationCard from "./sales-automation-card";

const Card = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="space-y-6">
        <BasicCard />
        <MarketingImageCard />
        <SalesAutomationCard />
      </div>
    </div>
  );
};

export default Card;
