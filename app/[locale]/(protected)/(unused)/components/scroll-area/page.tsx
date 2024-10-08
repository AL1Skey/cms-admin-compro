
import Card from "@/components/code-snippet";
import BasicScroll from "./basic-scroll";
import SiteBreadcrumb from "@/components/site-breadcrumb";
const ScrollAreaPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <Card title="Basic Scroll" code="">
        <BasicScroll />
      </Card>
    </div>
  );
};

export default ScrollAreaPage;