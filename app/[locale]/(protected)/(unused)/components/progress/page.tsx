
import Card from "@/components/code-snippet";
import BasicProgress from "./basic-progress";
import ColorProgress from "./color-progress";
import SizesProgress from "./sizes-progress";
import StripedProgress from "./striped-progress";
import AnimatedStriped from "./animate-striped";
import ProgressWithValue from "./progress-withvalue";
import { animateStriped, basicProgress, colorProgress, progressWithValue, sizesProgress, stripedProgress } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";

const ProgressPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Default Progress" code={basicProgress}>
          <BasicProgress />
        </Card>
        <Card title="Color Progress" code={colorProgress}>
          <ColorProgress />
        </Card>
        <Card title="Sizes Progress" code={sizesProgress}>
          <SizesProgress />
        </Card>
        <Card title="Striped Progress" code={stripedProgress}>
          <StripedProgress />
        </Card>
        <Card title="Animated Striped Progress" code={animateStriped}>
          <AnimatedStriped />
        </Card>
        <Card title="Progress With Value" code={progressWithValue}>
          <ProgressWithValue />
        </Card>
      </div>
    </div>
  );
};

export default ProgressPage;