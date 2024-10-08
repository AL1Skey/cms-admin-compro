import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicTable from "./basic-table";
import BasicTableHead from "./basic-table-head";
import BorderedTable from "./bordered-table";
import BorderlessTable from "./borderless-table";
import StripedRows from "./striped-rows";
import HoverableTable from "./hoverable-table";
import SiteBreadcrumb from "@/components/site-breadcrumb";

const BasicTablePage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <Card>
          <CardHeader>
            <CardTitle>Basic Table</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <BasicTable />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Table Head</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <BasicTableHead />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bordered Table</CardTitle>
          </CardHeader>
          <CardContent>
            <BorderedTable />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Borderless Table</CardTitle>
          </CardHeader>
          <CardContent>
            <BorderlessTable />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Striped Rows Table</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <StripedRows />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Hover Table</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <HoverableTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BasicTablePage;