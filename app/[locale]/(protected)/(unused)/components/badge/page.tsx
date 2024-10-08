
import Card from "@/components/code-snippet";
import BasicBadge from "./basic-badge";
import IconBadges from "./icon-badges";
import BadgesButton from "./badges-button";
import BadgePositions from "./badges-position";
import GradientBadges from "./gradient-badges";
import RoundedBadge from "./rounded-badge";
import { badgesIcon, badgesInButton, badgesPosition, basicBadges, gradientBadges, iconBadges, roundedBadges } from "./source-code";
import BadgesIcon from "./badges-icon";
import SiteBreadcrumb from "@/components/site-breadcrumb";

const BadgePage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <Card title="Basic Badges" code={basicBadges}>
          <BasicBadge />
        </Card>
        <Card title="Rounded Badges" code={roundedBadges}>
          <RoundedBadge />
        </Card>
        <Card title="Badges Icon" code={iconBadges}>
          <IconBadges />
        </Card>
        <Card title="Badges With Icon" code={badgesIcon}>
          <BadgesIcon />
        </Card>
        <Card title="Badges In Buttons" code={badgesInButton}>
          <BadgesButton />
        </Card>
        <Card title="Badge Positions" code={badgesPosition}>
          <BadgePositions />
        </Card>
        <Card title="Gradient Badges" code={gradientBadges}>
          <GradientBadges />
        </Card>
      </div>
    </div>
  );
};

export default BadgePage;
