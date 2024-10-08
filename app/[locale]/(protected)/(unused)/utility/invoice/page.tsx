
import TransactionsTable from "./transactions";
import { Card } from "@/components/ui/card";

import SiteBreadcrumb from "@/components/site-breadcrumb";
const Invoice = () => {
  return (
    <div>
      <SiteBreadcrumb/>
      <Card>
        <TransactionsTable />
      </Card>
    </div>
  );
};

export default Invoice;
