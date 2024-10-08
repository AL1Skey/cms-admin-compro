import ProgressBlock from "@/components/blocks/progress-block";
import DashboardDropdown from "@/components/dashboard-dropdown";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { BarChart } from "lucide-react";
import { meets, messagesData, tasks, activityList, teamData, files } from "./data";
import Image from "next/image";
import TaskItem from "@/components/project/task-item";
import MessageListItem from "@/components/project/message-list-item";
import ActivityItem from "@/components/project/activity";
import TeamTable from "@/components/project/team-table";
import NotesCalendar from "@/components/project/notes-calendar";
import DealsDistributionChart from "@/components/project/deals-distribution-chart";
import { useTranslations } from "next-intl";

const ProjectPage = () => {
    const t = useTranslations("ProjectDashboard");
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-8 space-y-5">
          <Card>
            <CardContent className="p-5">
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12 lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-3">
                  <Card className="bg-info/20 shadow-none border-none">
                    <CardContent className=" p-4  text-center">
                      <div className="mx-auto h-10 w-10  rounded-full flex items-center justify-center bg-white mb-4">
                        <BarChart className=" h-6 w-6 text-info" />
                      </div>
                      <div className="block text-sm text-default-600 font-medium  mb-1.5">
                        {" "}
                        {t("total_task")}
                      </div>
                      <div className="text-2xl text-default-900  font-medium">
                        64
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-warning/20 shadow-none border-none">
                    <CardContent className=" p-4  text-center">
                      <div className="mx-auto h-10 w-10  rounded-full flex items-center justify-center bg-white mb-4">
                        <Icon
                          className="w-6 h-6 text-warning"
                          icon="heroicons:chart-pie"
                        />
                      </div>
                      <div className="block text-sm text-default-600 font-medium  mb-1.5">
                        {t("completed")}
                      </div>
                      <div className="text-2xl text-default-900  font-medium">
                        45
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/20 shadow-none border-none">
                    <CardContent className=" p-4  text-center">
                      <div className="mx-auto h-10 w-10  rounded-full flex items-center justify-center bg-white mb-4">
                        <Icon
                          className="w-6 h-6 text-primary"
                          icon="heroicons:clock"
                        />
                      </div>
                      <div className="block text-sm text-default-600 font-medium  mb-1.5">
                        {t("hours")}
                      </div>
                      <div className="text-2xl text-default-900  font-medium">
                        190
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-success/20 shadow-none border-none">
                    <CardContent className="p-4 text-center">
                      <div className="mx-auto h-10 w-10  rounded-full flex items-center justify-center bg-white mb-4">
                        <Icon
                          className="w-6 h-6 text-success"
                          icon="heroicons:calculator"
                        />
                      </div>
                      <div className="block text-sm text-default-600 font-medium  mb-1.5">
                        {t("spendings")}
                      </div>
                      <div className="text-2xl text-default-900  font-medium">
                        $3,564
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="col-span-12 lg:col-span-4">
                  <ProgressBlock
                    title={t("progress")}
                    height={113}
                    className="border-none shadow-none"
                    chartType="pie"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex-row  justify-between">
              <CardTitle>{t("deal_distribution_by_stage")}</CardTitle>
              <DashboardDropdown />
            </CardHeader>
            <CardContent>
              <DealsDistributionChart height={310} />
            </CardContent>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>{t("notes")}</CardTitle>
            </CardHeader>
            <CardContent className="px-2">
              <NotesCalendar />
              <ul className="divide-y divide-default-100 dark:divide-default-300">
                {meets.map((item, i) => (
                  <li key={i} className=" py-2.5 px-3">
                    <div className="flex gap-2">
                      <div className="flex-1 flex gap-2.5">
                        <div className="flex-none">
                          <div className="h-8 w-8">
                            <Image
                              src={item.img}
                              alt=""
                              className="w-full h-full "
                              width={32}
                              height={32}
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-default-600 text-sm  mb-1 font-medium">
                            {item.title}
                          </div>
                          <div className="flex gap-1 font-normal text-xs  text-default-500">
                            <div className="text-base">
                              <Icon icon="heroicons-outline:video-camera" />
                            </div>
                            {item.meet}
                          </div>
                        </div>
                      </div>
                      <div className="flex-none text-xs text-default-600">
                        {item.date}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Card>
          <CardHeader className="flex-row  items-center justify-between">
            <CardTitle>{t("task_list")}</CardTitle>
            <DashboardDropdown />
          </CardHeader>
          <CardContent className="p-0">
            <ul className="divide-y divide-default-100 dark:divide-default-300">
              {tasks.map((task, index) => (
                <TaskItem key={index} task={task} />
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>{t("messages")}</CardTitle>
            <DashboardDropdown />
          </CardHeader>
          <CardContent className="p-0">
            <ul className="divide-y divide-default-100  dark:divide-default-300">
              {messagesData.map((message, index) => (
                <MessageListItem message={message} key={index} />
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>{t("activity")}</CardTitle>
            <DashboardDropdown />
          </CardHeader>
          <CardContent className="p-0">
            <ul className="relative before:absolute before:start-6 before:top-3.5 before:w-[1px] before:h-[80%] before:bg-default-200 dark:before:bg-default-300">
              {activityList.map((activity, index) => (
                <ActivityItem activity={activity} key={index} />
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-8">
          <Card>
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>{t("team_members")}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <TeamTable data={teamData} />
            </CardContent>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Card>
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>{t("files")}</CardTitle>
              <DashboardDropdown />
            </CardHeader>
            <CardContent>
              <ul className="divide-y divide-default-100  dark:divide-default-300">
                {files.map((item, i) => (
                  <li key={i} className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 flex gap-2">
                        <div className="flex-none">
                          <div className="h-8 w-8">
                            <Image
                              src={item.img}
                              alt=""
                              width={32}
                              height={32}
                              className=" w-full h-full object-cover rounded-full border hover:border-primary-foreground border-transparent"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-default-600 text-sm">
                            {item.title}
                          </div>
                          <div className="font-normal text-xs text-default-500 mt-1">
                            {item.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex-none">
                        <button
                          type="button"
                          className="text-xs text-default-900 "
                        >
                          {t("download")}
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;