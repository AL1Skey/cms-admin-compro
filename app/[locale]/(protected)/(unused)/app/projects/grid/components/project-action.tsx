'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import EditProject from "../../edit-project";
import DeleteConfirmationDialog from "@/components/delete-confirmation-dialog";
import { Eye, MoreVertical, SquarePen, Trash2 } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { defaultProjects } from '../../data';
import { Link } from '@/i18n/routing'; const ProjectAction = () => {
    const [editTaskOpen, setEditTaskOpen] = useState<boolean>(false);
    const [deleteProject, setDeleteProject] = useState<boolean>(false)
    return (
        <>
            <EditProject
                open={editTaskOpen}
                setOpen={setEditTaskOpen}
            />
            <DeleteConfirmationDialog
                open={deleteProject}
                onClose={() => setDeleteProject(false)}
            />


            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        size="icon"
                        className="flex-none bg-transparent ring-offset-transparent hover:bg-transparent hover:ring-0 hover:ring-transparent w-6"
                    >
                        <MoreVertical className="h-4 w-4 text-default-700" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-0 overflow-hidden" align="end" >
                    <DropdownMenuItem

                        className="py-2 border-b border-default-200 text-default-600 focus:bg-default focus:text-default-foreground rounded-none cursor-pointer"

                    >
                        <Link href={`/app/projects/${defaultProjects[0].id}`} className=' flex  items-center w-full'>
                            <Eye className="w-3.5 h-3.5 me-1" />
                            View
                        </Link>

                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => setEditTaskOpen(true)}
                        className="py-2 border-b border-default-200 text-default-600 focus:bg-default focus:text-default-foreground rounded-none cursor-pointer"

                    >
                        <SquarePen className="w-3.5 h-3.5 me-1" />
                        Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => setDeleteProject(true)}
                        className="py-2 bg-destructive/30 focus:bg-destructive focus:text-destructive-foreground rounded-none cursor-pointer"

                    >
                        <Trash2 className="w-3.5 h-3.5  me-1" />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default ProjectAction