import { Card } from "@/components/ui/card";
import TransactionsTable from "./transactions";

const PurchaseList = () => {
  return (
    <div>
      Purchase List
      <Card>
        <TransactionsTable />
      </Card>
    </div>
  );
};

export default PurchaseList;
