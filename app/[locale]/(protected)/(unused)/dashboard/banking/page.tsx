import { StatusBlock } from "@/components/blocks/status-block";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import CardSlider from "./components/card-slider";
import AmountTransfer from "./components/amount-transfer";
import TransactionsTable from "./components/transactions";
import DashboardDropdown from "@/components/dashboard-dropdown";
import HistoryChart from "./components/history-chart";
import AccountChart from "./components/account-chart";
import { useTranslations } from "next-intl";

const BankingPage = () => {
  const t = useTranslations("BankingDashboard");
  return (
    <div className="space-y-5">
      <Card>
        <CardContent className=" p-6">
          <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 place-content-center">
            <div className="flex space-x-4 h-full items-center rtl:space-x-reverse">
              <div className="flex-none">
                <Avatar className="h-20 w-20 bg-transparent hover:bg-transparent">
                  <AvatarImage src="/images/all-img/main-user.png" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-medium mb-2">
                  <span className="block font-light text-default-800">
                    {t("widget_title")},
                  </span>
                  <span className="block text-default-900">Mr. Jone Doe</span>
                </h4>
                <p className="text-sm text-default-600">{t("widget_desc")}</p>
              </div>
            </div>
            {/*  status blocks */}
            <StatusBlock
              title={t("current_balance")}
              total="$34,564"
              chartType="bar"
              className="bg-default-50 shadow-none border-none"
              opacity={1}
            />
            <StatusBlock
              title={t("credit")}
              total="$3,564"
              chartColor="#80fac1"
              className="bg-default-50 shadow-none border-none"
              series={[40, 70, 45, 100, 75, 40, 80, 90]}
              chartType="bar"
              opacity={1}
            />
            <StatusBlock
              title={t("debit")}
              total="$3,564"
              chartColor="#ffbf99"
              className="bg-default-50 shadow-none border-none"
              chartType="bar"
              series={[40, 70, 45, 100, 75, 40, 80, 90]}
              opacity={1}
            />
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-12 gap-5">
        <div className="lg:col-span-4 col-span-12 space-y-5">
          <Card>
            <CardHeader>
              <CardTitle>{t("my_card")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-[90%] mx-auto mt-2">
                <CardSlider />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{t("quick_transfer")}</CardTitle>
            </CardHeader>
            <CardContent>
              <AmountTransfer />
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-8 col-span-12 space-y-5">
          <Card>
            <CardContent className="p-0">
              <TransactionsTable />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex-row gap-1">
              <CardTitle className="flex-1">{t("history")}</CardTitle>
              <DashboardDropdown />
            </CardHeader>
            <CardContent>
              <HistoryChart />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <Card>
          <CardHeader className="flex-row gap-1">
            <CardTitle className="flex-1">{t("account_receivable")}</CardTitle>
            <DashboardDropdown />
          </CardHeader>
          <CardContent>
            <AccountChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex-row gap-1">
            <CardTitle className="flex-1">{t("account_payable")}</CardTitle>
            <DashboardDropdown />
          </CardHeader>
          <CardContent>
            <AccountChart
              series={[
                {
                  data: [31, 40, 28, 51, 42, 109, 100],
                },
              ]}
              chartColor="primary"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BankingPage;
