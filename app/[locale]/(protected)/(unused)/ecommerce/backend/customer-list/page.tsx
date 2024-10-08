import { Card } from "@/components/ui/card"
import TransactionsTable from "./transactions";

const CustomerList = () => {
  return (
    <div>
      Customer List
      <Card>
        <TransactionsTable />
      </Card>
    </div>
  );
}

export default CustomerList