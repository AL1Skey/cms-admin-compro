import { Card } from "@/components/ui/card"
import TransactionsTable from "./transactions"

const PurchaseHistory = () => {
  return (
    <div>
      Purchase History
      <Card>
        <TransactionsTable />
      </Card>
    </div>
  );
}

export default PurchaseHistory