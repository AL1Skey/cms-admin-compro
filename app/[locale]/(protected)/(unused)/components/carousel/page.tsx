import Card from "@/components/code-snippet";
import BasicCarousel from "./basic-carousel";
import SizeCarousel from "./size-carousel";
import SpacingCarousel from "./spacing-carousel";
import VerticalCarousel from "./vertical-carousel";
import AutoplayCarousel from "./autoplay-carousel";
import CustomCarousel from "./custom-carousel";
import SiteBreadcrumb from "@/components/site-breadcrumb";
import { basicCarousel, sizeCarousel, spacingCarousel, verticalCarousel, autoplayCarousel, customCarousel } from "./source-code"
const CarouselPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="space-y-6">
        <Card title="Basic" code={basicCarousel}>
          <BasicCarousel />
        </Card>
        <Card title="Size Carousel" code={sizeCarousel}>
          <SizeCarousel />
        </Card>
        <Card title="Spacing Carousel" code={spacingCarousel}>
          <SpacingCarousel />
        </Card>
        <Card title="Vertical Carousel" code={verticalCarousel}>
          <VerticalCarousel />
        </Card>
        <Card title="Autoplay Carousel" code={autoplayCarousel}>
          <AutoplayCarousel />
        </Card>
        <Card title="Custom Carousel" code={customCarousel}>
          <CustomCarousel />
        </Card>
      </div>
    </div>
  );
};

export default CarouselPage;