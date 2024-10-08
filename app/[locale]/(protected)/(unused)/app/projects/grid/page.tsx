import React from 'react'
import { getProjects } from '../data'
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Icon } from "@/components/ui/icon";
import EmptyProject from './components/empty';
import ProjectAction from './components/project-action';
const ProjectGrid = async () => {
    const projects = await getProjects()
    if (projects.length === 0) return <EmptyProject />
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {projects?.map(({ projectLogo, title, desc, startDate, endDate, progress, assignee, remainingDays }, index) => (
                <Card key={index}>
                    <CardHeader className="flex-row gap-1  items-center space-y-0">
                        <div className="flex-1 flex items-center gap-4">
                            <Avatar className="flex-none h-10 w-10 rounded bg-default-200 text-default hover:bg-default-200">
                                <AvatarImage src={projectLogo} />
                                <AvatarFallback className="uppercase">  {title.charAt(0) + title.charAt(1)}</AvatarFallback>
                            </Avatar>
                            <h3 className="text-default-900 text-lg font-medium max-w-[210px] truncate text-center capitalize ">{title}</h3>
                        </div>
                        <ProjectAction />
                    </CardHeader>
                    <CardContent>
                        <div className="text-default-600 text-sm">{desc}</div>
                        <div className="flex gap-4 mt-6">
                            <div>
                                <div className="text-xs text-default-400 mb-1">Start Date</div>
                                <div className="text-xs text-default-600  font-medium">{startDate}</div>
                            </div>
                            <div>
                                <div className="text-xs text-default-400 mb-1">End Date</div>
                                <div className="text-xs text-default-600  font-medium">{endDate}</div>
                            </div>
                        </div>
                        <div className="mt-1">
                            <div className="text-end text-xs text-default-600 mb-1.5 font-medium">{progress}%</div>
                            <Progress value={progress} color="primary" size="sm" />
                        </div>
                        <div className="flex mt-5">
                            <div className="flex-1">
                                <div className="text-default-400  text-sm font-normal mb-3">Assigned to</div>
                                <div className="flex items-center -space-x-1">
                                    {
                                        assignee?.map((user, index) => (
                                            <Avatar
                                                key={`user-${index}`}
                                                className="h-6 w-6 shadow-none border-none bg-transparent hover:bg-transparent"
                                            >
                                                <AvatarImage src={user.image} />
                                                <AvatarFallback> {user.name.charAt(0) + user.name.charAt(1)}</AvatarFallback>
                                            </Avatar>
                                        ))
                                    }
                                    <div className="bg-card text-default-900  text-xs ring-2 ring-default-100  rounded-full h-6 w-6 flex flex-col justify-center items-center">
                                        +2
                                    </div>
                                </div>
                            </div>
                            <div className="flex-none">
                                <div className="flex items-center gap-1 bg-destructive/10 text-destructive rounded-full px-2 py-0.5 text-xs mt-1">
                                    <Icon icon="heroicons-outline:clock" />
                                    {remainingDays} days left
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}

        </div>
    )
}

export default ProjectGrid