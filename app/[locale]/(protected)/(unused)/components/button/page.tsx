
import Card from "@/components/code-snippet";
import BasicButton from "./basic-button";
import OutlineButton from "./outline-button";
import SoftButton from "./soft-button";
import ShadowButton from "./shadow-button";
import RoundedButton from "./rounded-button";
import RoundedOutline from "./rounded-outline";
import IconButtons from "./icon-buttons";
import IconRounded from "./icon-rounded";
import SizesButton from "./sizes-button";
import DisabledButton from "./disabled-button";
import LoadingButton from "./loading-button";
import BlockButton from "./block-button";
import LinkButton from "./link-button";
import GhostButton from "./ghost-button";
import { basicButton, blockButton, disabledButton, ghostButton, iconButtons, iconRounded, linkButton, loadingButton, outlineButton, roundedButton, roundedOutline, shadowButton, sizesButton, softButton } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";


const ButtonPage = () => {
    return (
        <>
            <SiteBreadcrumb />
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <Card title="Basic" code={basicButton}>
                    <BasicButton />
                </Card>
                <Card title="Outline" code={outlineButton}>
                    <OutlineButton />
                </Card>
                <Card title="Soft Color" code={softButton}>
                    <SoftButton />
                </Card>
                <Card title="Shadow Button" code={shadowButton}>
                    <ShadowButton />
                </Card>
                <Card title="Rounded" code={roundedButton}>
                    <RoundedButton />
                </Card>
                <Card title="Rounded Outline" code={roundedOutline}>
                    <RoundedOutline />
                </Card>
                <Card title="Icon Buttons" code={iconButtons}>
                    <IconButtons />
                </Card>
                <Card title="Icon Rounded" code={iconRounded}>
                    <IconRounded />
                </Card>
                <Card title="Size" code={sizesButton}>
                    <SizesButton />
                </Card>
                <Card title="Disabled Button" code={disabledButton}>
                    <DisabledButton />
                </Card>
                <Card title="Loading Button" code={loadingButton}>
                    <LoadingButton />
                </Card>
                <Card title="Block" code={blockButton}>
                    <BlockButton />
                </Card>
                <Card title="Link Button" code={linkButton}>
                    <LinkButton />
                </Card>
                <Card title="Ghost Button" code={ghostButton}>
                    <GhostButton />
                </Card>
            </div>
        </>
    );
};

export default ButtonPage;