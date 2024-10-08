import { Card } from "@/components/ui/card";
import TransactionsTable from "./transactions";

const Sellers = () => {
  return (
    <div>
      Sellers
      <Card>
        <TransactionsTable />
      </Card>
    </div>
  );
};

export default Sellers;
