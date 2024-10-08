import Card from "@/components/code-snippet";
import BasicSlider from "./basic-slider";
import { basicSlider } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";
const SliderPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <Card title="Basic Slider" code={basicSlider}>
        <BasicSlider />
      </Card>
    </div>
  );
};

export default SliderPage;