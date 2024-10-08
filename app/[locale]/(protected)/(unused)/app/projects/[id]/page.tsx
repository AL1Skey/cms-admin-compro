import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import ProgressBlock from "@/components/blocks/progress-block";
import { Link } from '@/i18n/routing';

import { meets, tasks, messagesData, activityList, teamData, files } from "./data"
import Image from "next/image";
import DashboardDropdown from "@/components/dashboard-dropdown";

import TaskItem from "@/components/project/task-item";
import MessageListItem from "@/components/project/message-list-item";
import ActivityItem from "@/components/project/activity";
import TeamTable from "@/components/project/team-table";
import NotesCalendar from "@/components/project/notes-calendar";
import { getProjectById } from "../data";
import { Alert } from "@/components/ui/alert";

const SinglePage = async ({ params: { id } }: { params: { id: string }; }) => {
    const project = await getProjectById(id)
    if (!project) return <Alert color="destructive"> project id is not valid</Alert>
    return (
        <div className="space-y-5">
            <div className="grid grid-cols-12 gap-5">

                <Card className="col-span-12 xl:col-span-3">
                    <CardContent className="p-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="lg:col-span-1 col-span-2">
                                <Card className="bg-info/20 shadow-none border-none">
                                    <CardContent className=" p-4  text-center">
                                        <div className="mx-auto h-10 w-10  rounded-full flex items-center justify-center bg-white mb-4">
                                            <BarChart className=" h-6 w-6 text-info" />
                                        </div>
                                        <div className="block text-sm text-default-600 font-medium  mb-1.5"> Total Task</div>
                                        <div className="text-2xl text-default-900  font-medium">  64</div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="lg:col-span-1 col-span-2">
                                <Card className="bg-warning/20 shadow-none border-none">
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
                            </div>
                            <div className="lg:col-span-1 col-span-2">
                                <Card className="bg-primary/20 shadow-none border-none">
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
                            </div>
                            <div className="lg:col-span-1 col-span-2">
                                <Card className="bg-success/20 shadow-none border-none">
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
                            <div className="col-span-2">
                                <ProgressBlock
                                    title="Progress"
                                    height={183}
                                    className="border-none shadow-none"
                                    chartType="pie"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-12 xl:col-span-5">
                    <CardHeader>
                        <CardTitle>About Project</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">

                        <div className="text-base font-medium text-default-800  mb-3">
                            Background information
                        </div>
                        <p className="text-sm text-default-600">
                            The Optimistic Website Company - Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercita -tion veniam consequat sunt
                            nostrud amet.
                        </p>
                        <br />
                        <p className="text-sm text-default-600">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint.The Optimistic Website Company - Amet minim mollit non
                            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit. Exercita -tion veniam consequat
                            sunt nostrud amet.
                        </p>
                        <p className="text-sm text-default-600 mt-4">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint.The Optimistic Website Company.
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint.The Optimistic Website Company. <br /> <br />
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint.The Optimistic Website Company.
                        </p>
                        <div className="flex flex-wrap mt-8">
                            <div className="xl:mr-8 mr-4 mb-3 space-y-1">
                                <div className="font-semibold text-default-500 ">
                                    Existing website
                                </div>
                                <div className="flex items-center gap-2 text-xs font-normal text-primary">
                                    <Icon icon="heroicons:link" />
                                    <Link href="#">www.example.com</Link>
                                </div>
                            </div>
                            <div className="xl:me-8 me-4 mb-3 space-y-1">
                                <div className="font-semibold text-default-500">
                                    Project brief
                                </div>
                                <div className="flex items-center gap-2 text-xs font-normal text-primary-600 ">
                                    <Icon icon="heroicons:link" />
                                    <Link href="#">www.example.com</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-default-100  rounded px-4 pt-4 pb-1 flex flex-wrap justify-between mt-6">
                            <div className="me-3 mb-3 space-y-2">
                                <div className="text-xs font-medium text-default-600">
                                    Project owner
                                </div>
                                <div className="text-xs text-default-600">
                                    John Doe
                                </div>
                            </div>
                            <div className="me-3 mb-3 space-y-2">
                                <div className="text-xs font-medium text-default-600">
                                    Budget
                                </div>
                                <div className="text-xs text-default-600 ">
                                    $75,800
                                </div>
                            </div>
                            <div className="me-3 mb-3 space-y-2">
                                <div className="text-xs font-medium text-default-600">
                                    Start date
                                </div>
                                <div className="text-xs text-default-600">
                                    01/11/2021
                                </div>
                            </div>
                            <div className="me-3 mb-3 space-y-2">
                                <div className="text-xs font-medium text-default-600 ">
                                    Deadline
                                </div>
                                <div className="text-xs text-warning">01/11/2021</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-12 xl:col-span-4">
                    <CardHeader>
                        <CardTitle>Notes</CardTitle>
                    </CardHeader>
                    <CardContent className="px-2">
                        <NotesCalendar />
                        <ul className="divide-y divide-default-100">
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <Card>
                    <CardHeader className="flex-row  items-center justify-between">
                        <CardTitle>Task List</CardTitle>
                        <DashboardDropdown />
                    </CardHeader>
                    <CardContent className="p-0">
                        <ul className="divide-y divide-default-100">
                            {
                                tasks.map((task, index) => <TaskItem
                                    key={index}
                                    task={task} />)
                            }
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex-row items-center justify-between">
                        <CardTitle>Messages</CardTitle>
                        <DashboardDropdown />
                    </CardHeader>
                    <CardContent className="p-0">
                        <ul className="divide-y divide-default-100">
                            {
                                messagesData.map((message, index) =>
                                    <MessageListItem
                                        message={message}
                                        key={index} />)
                            }
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex-row items-center justify-between">
                        <CardTitle>Activity</CardTitle>
                        <DashboardDropdown />
                    </CardHeader>
                    <CardContent className="p-0">
                        <ul className="relative before:absolute before:start-6 before:top-3.5 before:w-[1px] before:h-[80%] before:bg-default-200">
                            {
                                activityList.map((activity, index) =>
                                    <ActivityItem
                                        activity={activity}
                                        key={index}
                                    />)
                            }
                        </ul>
                    </CardContent>
                </Card>
            </div>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 lg:col-span-8">
                    <Card>
                        <CardHeader className="flex-row items-center justify-between">
                            <CardTitle>Team Members</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <TeamTable data={teamData} />
                        </CardContent>
                    </Card>
                </div>
                <div className="col-span-12 lg:col-span-4">
                    <Card>
                        <CardHeader className="flex-row items-center justify-between">
                            <CardTitle>Files</CardTitle>
                            <DashboardDropdown />
                        </CardHeader>
                        <CardContent>
                            <ul className="divide-y divide-default-100">
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
                                                            className=" w-full h-full object-cover rounded-full border hover:border-white border-transparent"
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
                                                    className="text-xs text-slate-900 dark:text-white"
                                                >
                                                    Download
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
    )
}

export default SinglePage