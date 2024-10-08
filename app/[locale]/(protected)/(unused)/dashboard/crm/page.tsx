import DashboardDropdown from "@/components/dashboard-dropdown";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";
import DealDistributionsChart from "./components/deal-distributions-chart";
import { campaigns } from "./data";
import TrendsCalculationChart from "./components/trends-calculation-chart";
import TransactionsTable from "./components/transactions";
import { useTranslations } from "next-intl";

const CrmPage = () => {
   const t = useTranslations("CrmDashboard");
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-8 space-y-5">
          <Card>
            <CardContent className="p-4">
              <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-3">
                <Card className="bg-warning/20 relative shadow-none border-none">
                  <CardContent className="p-4">
                    <Image
                      src="/images/all-img/shade-1.png"
                      alt="images"
                      draggable="false"
                      className="absolute top-0 start-0 w-full h-full object-contain"
                      width={300}
                      height={200}
                      priority
                    />
                    <div className="mb-6 text-sm text-default-900 font-medium">
                      {t("sales")}
                    </div>
                    <div className=" text-2xl text-default-900 font-medium mb-6">
                      354
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-none text-xl">
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 text-sm">
                        <span className="block mb-0.2">25.67% </span>
                        <span className="block mb-1 text-default-600">
                          {t("from_last_weeks")}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-info/20 relative shadow-none border-none">
                  <CardContent className="p-4">
                    <Image
                      src="/images/all-img/shade-2.png"
                      alt="images"
                      draggable="false"
                      className="absolute top-0 start-0 w-full h-full object-contain"
                      width={300}
                      height={200}
                      priority
                    />
                    <div className="mb-6 text-sm text-default-900 font-medium">
                      {t("revenue")}
                    </div>
                    <div className=" text-2xl text-default-900 font-medium mb-6">
                      $86,954
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-none text-xl">
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 text-sm">
                        <span className="block mb-0.2">8.67% </span>
                        <span className="block mb-1 text-default-600">
                          {t("from_last_weeks")}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-primary/20 relative shadow-none border-none">
                  <CardContent className="p-4">
                    <Image
                      src="/images/all-img/shade-3.png"
                      alt="images"
                      draggable="false"
                      className="absolute top-0 start-0 w-full h-full object-contain"
                      width={300}
                      height={200}
                      priority
                    />
                    <div className="mb-6 text-sm text-default-900 font-medium">
                      {t("conversion")}
                    </div>
                    <div className=" text-2xl text-default-900 font-medium mb-6">
                      15%
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-none text-xl">
                        <TrendingDown className="w-4 h-4 text-destructive" />
                      </div>
                      <div className="flex-1 text-sm">
                        <span className="block mb-0.2 text-destructive">
                          1.67%{" "}
                        </span>
                        <span className="block mb-1 text-default-600">
                          {t("from_last_weeks")}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-success/20 relative shadow-none border-none">
                  <CardContent className=" p-4">
                    <Image
                      src="/images/all-img/shade-4.png"
                      alt="images"
                      draggable="false"
                      className="absolute top-0 start-0 w-full h-full object-contain"
                      width={300}
                      height={200}
                      priority
                    />
                    <div className="mb-6 text-sm text-default-900 font-medium">
                      {t("leads")}
                    </div>
                    <div className=" text-2xl text-default-900 font-medium mb-6">
                      654
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-none text-xl">
                        <TrendingDown className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 text-sm">
                        <span className="block mb-0.2 text-primary">
                          1.67%{" "}
                        </span>
                        <span className="block mb-1 text-default-600">
                          {t("from_last_weeks")}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex-row flex-wrap gap-2">
              <CardTitle className="flex-1 whitespace-nowrap">
                {t("deal_distribution_by_stage")}
              </CardTitle>
              <DashboardDropdown />
            </CardHeader>
            <CardContent>
              <DealDistributionsChart />
            </CardContent>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-4 space-y-5">
          <Card>
            <CardHeader className="flex-row gap-3">
              <CardTitle className="flex-1">{t("campaigns")}</CardTitle>
              <DashboardDropdown />
            </CardHeader>
            <CardContent>
              <ul className="divide-y divide-default-100 dark:divide-default-300">
                {campaigns.map((item, i) => (
                  <li
                    key={`campaign-${i}`}
                    className="first:text-xs text-sm text-default-600 py-2.5 px-2 first:uppercase"
                  >
                    <div className="flex justify-between">
                      <span>{item.name}</span>
                      <span>{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row gap-3">
              <CardTitle className="flex-1">
                {t("trends_calculation")}
              </CardTitle>
              <DashboardDropdown />
            </CardHeader>
            <CardContent>
              <TrendsCalculationChart />
            </CardContent>
          </Card>
        </div>
      </div>
      <div>
        <Card>
          <CardContent className="px-0">
            <TransactionsTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CrmPage;