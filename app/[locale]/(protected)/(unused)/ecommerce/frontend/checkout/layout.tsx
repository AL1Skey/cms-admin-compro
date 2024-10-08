import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CheckoutHeader from "./checkout-header";
import SiteBreadcrumb from "@/components/site-breadcrumb";

const layout = ({ children }: { children: React.ReactNode }) => {

  return (

    <div>
      <SiteBreadcrumb />
      <Card>
        <CardHeader>
          <CheckoutHeader />
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </div>
  );
};

export default layout;
