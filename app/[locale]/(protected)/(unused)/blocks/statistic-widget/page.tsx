import Image from "next/image";
import OrdersBlock from "@/components/blocks/orders-block";
import ProgressBlock from "@/components/blocks/progress-block";
import { StatisticsBlock } from "@/components/blocks/statistics-block";
import { StatusBlock } from "@/components/blocks/status-block";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icon } from "@/components/ui/icon";
import { Box, TrendingDown, TrendingUp, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart } from "lucide-react";
import EarningBlock from "@/components/blocks/earning-block";
import SiteBreadcrumb from "@/components/site-breadcrumb";

const StatisticPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <StatusBlock
            title="Total Revenue"
            total="3,564"
            iconWrapperClass="bg-info/10"
            chartColor="#00EBFF"
            icon={<ShoppingCart className="w-5 h-5  text-info" />}
          />
          <StatusBlock
            title="Products sold"
            total="564"
            icon={<Box className="w-5 h-5 text-warning" />}
            iconWrapperClass="bg-warning/10"
            chartColor="#FB8F65"
          />

          <StatusBlock
            title="Growth"
            total="+5.0%"
            icon={<TrendingUp className="w-5 h-5 text-primary" />}
            iconWrapperClass="bg-primary/10"
            chartColor="#2563eb"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <StatisticsBlock
            title="Total Revenue"
            total="3,564"
            className="bg-info/10"
          />
          <StatisticsBlock
            title="Products sold"
            total="564"
            className="bg-warning/10"
            chartColor="#FB8F65"
          />
          <StatisticsBlock
            title="Growth"
            total="+5.0%"
            className="bg-primary/10"
            chartColor="#2563eb"
          />
        </div>
        <div>
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
                      <span className="block font-light text-default-800">Good evening,</span>
                      <span className="block text-default-900">Mr. Jone Doe</span>
                    </h4>
                    <p className="text-sm text-default-600">Welcome to Dashcode</p>
                  </div>
                </div>
                {/*  status blocks */}
                <StatusBlock
                  title="Current balance"
                  total="$34,564"
                  chartType="bar"
                  className="bg-secondary/10 shadow-none rounded"
                  opacity={1}
                />
                <StatusBlock
                  title="Credit"
                  total="$3,564"
                  chartColor="#80fac1"
                  className="bg-secondary/10 shadow-none rounded"
                  series={[40, 70, 45, 100, 75, 40, 80, 90]}
                  chartType="bar"
                  opacity={1}
                />
                <StatusBlock
                  title="Debit"
                  total="$3,564"
                  chartColor="#ffbf99"
                  className="bg-secondary/10 shadow-none rounded"
                  chartType="bar"
                  series={[40, 70, 45, 100, 75, 40, 80, 90]}
                  opacity={1}
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          <Card className="bg-warning/20 relative">
            <CardContent className="p-4 ">
              <Image
                src="/images/all-img/shade-1.png"
                alt="images"
                draggable="false"
                className="absolute top-0 start-0 w-full h-full object-contain"
                width={300}
                height={200}
                priority
              />
              <div className="mb-6 text-sm text-default-900 font-medium">Sales </div>
              <div className=" text-2xl text-default-900 font-medium mb-6"> 354</div>
              <div className="flex gap-2">
                <div className="flex-none text-xl">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 text-sm">
                  <span className="block mb-0.2">25.67% </span>
                  <span className="block mb-1 text-default-600">
                    From last week
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-info/20 relative">
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
              <div className="mb-6 text-sm text-default-900 font-medium">Revenue </div>
              <div className=" text-2xl text-default-900 font-medium mb-6">$86,954</div>
              <div className="flex gap-2">
                <div className="flex-none text-xl">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 text-sm">
                  <span className="block mb-0.2">8.67% </span>
                  <span className="block mb-1 text-default-600">
                    From last week
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-primary/20 relative">
            <CardContent className=" p-4">
              <Image
                src="/images/all-img/shade-3.png"
                alt="images"
                draggable="false"
                className="absolute top-0 start-0 w-full h-full object-contain"
                width={300}
                height={200}
                priority
              />
              <div className="mb-6 text-sm text-default-900 font-medium">Conversion </div>
              <div className=" text-2xl text-default-900 font-medium mb-6">15%</div>
              <div className="flex gap-2">
                <div className="flex-none text-xl">
                  <TrendingDown className="w-4 h-4 text-destructive" />
                </div>
                <div className="flex-1 text-sm">
                  <span className="block mb-0.2 text-destructive">1.67% </span>
                  <span className="block mb-1 text-default-600">
                    From last week
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-success/20 relative">
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
              <div className="mb-6 text-sm text-default-900 font-medium">Leads </div>
              <div className=" text-2xl text-default-900 font-medium mb-6">654</div>
              <div className="flex gap-2">
                <div className="flex-none text-xl">
                  <TrendingDown className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 text-sm">
                  <span className="block mb-0.2 text-primary">1.67% </span>
                  <span className="block mb-1 text-default-600">
                    From last week
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          <Card className="bg-info/20">
            <CardContent className=" p-4  text-center">
              <div className="mx-auto h-10 w-10  rounded-full flex items-center justify-center bg-white mb-4">
                <BarChart className=" h-6 w-6 text-info" />
              </div>
              <div className="block text-sm text-default-600 font-medium  mb-1.5"> Total Task</div>
              <div className="text-2xl text-default-900  font-medium">  64</div>
            </CardContent>
          </Card>
          <Card className="bg-warning/20">
            <CardContent className=" p-4  text-center">
              <div
                className="mx-auto h-10 w-10  rounded-full flex items-center justify-center bg-white mb-4"
              >
                <Icon className="w-6 h-6 text-warning" icon="heroicons:chart-pie" />
              </div>
              <div className="block text-sm text-default-600 font-medium  mb-1.5">Completed</div>
              <div className="text-2xl text-default-900  font-medium">45</div>
            </CardContent>
          </Card>
          <Card className="bg-primary/20">
            <CardContent className=" p-4  text-center">
              <div
                className="mx-auto h-10 w-10  rounded-full flex items-center justify-center bg-white mb-4"
              >
                <Icon className="w-6 h-6 text-primary" icon="heroicons:clock" />
              </div>
              <div className="block text-sm text-default-600 font-medium  mb-1.5">Hours</div>
              <div className="text-2xl text-default-900  font-medium">190</div>
            </CardContent>
          </Card>
          <Card className="bg-success/20">
            <CardContent className="p-4 text-center">
              <div
                className="mx-auto h-10 w-10  rounded-full flex items-center justify-center bg-white mb-4"
              >
                <Icon className="w-6 h-6 text-success" icon="heroicons:calculator" />
              </div>
              <div className="block text-sm text-default-600 font-medium  mb-1.5">Spendings</div>
              <div className="text-2xl text-default-900  font-medium">$3,564</div>
            </CardContent>
          </Card>
        </div>
        {/* progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          <ProgressBlock
            title="Progress"
          />
          <ProgressBlock
            title="Progress"
            colors={["#F1595C", "#F9E1E5"]}
            labels={["Completed", "In Progress"]}
          />
          <ProgressBlock
            title="Progress"
            colors={["#50C793", "#E5F3E5"]}
            labels={["Success", "Failure"]}
          />
          <ProgressBlock
            title="Progress"
            colors={["#FA916B", "#fcc8b5"]}
          />
        </div>
        <div className="grid grid-cols-6 gap-4">
          <OrdersBlock
            title="Orders"
            total="123k"
          />
          <OrdersBlock
            title="Orders"
            total="123k"
            chartColor="#f1595c"
          />
          <OrdersBlock
            title="Orders"
            total="123k"
            chartColor="#50c893"
          />
          <OrdersBlock
            title="Profit"
            total="123k"
            chartColor="#4669fa"
            chartType="line"
            percentageContent={<span className="text-primary">+2.5%</span>}
          />
          <OrdersBlock
            title="Profit"
            total="123k"
            chartColor="#f1595c"
            chartType="line"
            percentageContent={<span className="text-destructive">+2.5%</span>}
          />
          <OrdersBlock
            title="Profit"
            total="123k"
            chartColor="#50c893"
            chartType="line"
            percentageContent={<span className="text-success">+2.5%</span>}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <EarningBlock
            title="Earnings"
            total="$12,335.00"
            percentage="+08%"
          />
          <EarningBlock
            title="Earnings"
            total="$12,335.00"
            percentage="+08%"
          />
          <EarningBlock
            title="Earnings"
            total="$12,335.00"
            percentage="+08%"
          />
        </div>
      </div>
    </div>
  );
};

export default StatisticPage;