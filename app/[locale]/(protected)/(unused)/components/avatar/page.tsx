import Card from "@/components/code-snippet";
import BasicAvatar from "./basic-avatar";
import ImageAvatar from "./image-avatar";
import TonalAvatar from "./tonal-avatar";
import IconAvatar from "./icon-avatar";
import BorderAvatar from "./border-avatar";
import BorderColorAvatar from "./border-color-avatar";
import SizeAvatar from "./size-avatar";
import RoundedAvatar from "./rounded-avatar";
import TooltipAvatar from "./tooltip-avatar";
import AvatarShape from "./avatar-shape";
import AvatarGroup from "./avatar-group";
import { avatarGroup, avatarShape, basicAvatar, borderAvatar, borderColorAvatar, iconAvatar, imageAvatar, roundedAvatar, sizeAvatar, tonalAvatar, tooltipAvatar } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";

const AvatarPage = () => {
  return (
    <>
      <SiteBreadcrumb />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <Card title="Basic Avatar" code={basicAvatar}>
          <BasicAvatar />
        </Card>
        <Card title="Image Avatar" code={imageAvatar}>
          <ImageAvatar />
        </Card>
        <Card title="Tonal Avatar" code={tonalAvatar}>
          <TonalAvatar />
        </Card>
        <Card title="Icon Avatar" code={iconAvatar}>
          <IconAvatar />
        </Card>
        <Card title="Border Avatar" code={borderAvatar}>
          <BorderAvatar />
        </Card>
        <Card title="Border Color Avatar" code={borderColorAvatar}>
          <BorderColorAvatar />
        </Card>
        <Card title="Size Avatar" code={sizeAvatar}>
          <SizeAvatar />
        </Card>
        <Card title="Rounded Avatar" code={roundedAvatar}>
          <RoundedAvatar />
        </Card>
        <Card title="Avatar Shape" code={avatarShape}>
          <AvatarShape />
        </Card>
        <Card title="Tooltip Avatar" code={tooltipAvatar}>
          <TooltipAvatar />
        </Card>
        <Card title="Avatar Group" code={avatarGroup}>
          <AvatarGroup />
        </Card>
      </div>
    </>
  );
};

export default AvatarPage;