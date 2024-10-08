import Card from "@/components/code-snippet";
import BasicPagination from "./basic-pagination";
import PaginationWithElipsis from "./pagination-withelipsis";
import PaginationWithBg from "./pagination-withbg";
import PaginationWithText from "./pagination-withtext";
import { basicPagination, paginationWithBackground, paginationWithElipsis, paginationWithText } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";

const PaginationPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="space-y-6">
        <Card title="Basic Pagination" code={basicPagination}>
          <BasicPagination />
        </Card>
        <Card title="Pagination With Background" code={paginationWithBackground}>
          <PaginationWithBg />
        </Card>
        <Card title="Pagination With Text" code={paginationWithText}>
          <PaginationWithText />
        </Card>
        <Card
          title="Pagination With Elipsis"
          code={paginationWithElipsis}
        >
          <PaginationWithElipsis />
        </Card>
      </div>
    </div>
  );
};

export default PaginationPage;