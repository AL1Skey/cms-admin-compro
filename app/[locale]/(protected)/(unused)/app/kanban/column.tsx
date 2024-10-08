'use client'
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { Column, Task } from "./data";
import TaskCard from "./task";
import { Plus, Trash2 } from "lucide-react";
import EmptyTask from "./empty";

import DeleteConfirmationDialog from "@/components/delete-confirmation-dialog";

function ColumnContainer({ column, tasks, handleOpenTask }: { column: Column; tasks: Task[], handleOpenTask: () => void }) {
    const [editMode, setEditMode] = useState<boolean>(false);

    const [deleteColumn, setDeleteColumn] = useState<boolean>(false);
    const tasksIds = useMemo(() => {
        return tasks.map((task) => task.id);
    }, [tasks]);

    const {
        setNodeRef,
        attributes,
        listeners,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: column.id,
        data: {
            type: "Column",
            column,
        },
        disabled: editMode,
    });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    return (
        <>
            <DeleteConfirmationDialog
                open={deleteColumn}
                onClose={() => setDeleteColumn(false)}
            />

            <Card
                ref={setNodeRef}
                style={style}
                className={cn("flex-1 w-[280px] bg-default-200 shadow-none app-height flex flex-col relative", {
                    "opacity-20": isDragging,
                })}
            >
                <CardHeader className="flex-none bg-card relative rounded-t-md py-4" {...attributes} {...listeners}>
                    <div className={cn("absolute -start-[1px] top-1/2 -translate-y-1/2 h-[60%] w-0.5 bg-primary",
                        {
                            "bg-warning": (column.title).toLocaleLowerCase() === "work in progress",
                            "bg-success": (column.title).toLocaleLowerCase() === "done",
                        }
                    )}></div>
                    <div className="flex items-center gap-2" >
                        <div className="flex-1 text-lg capitalize text-default-900 font-medium">{column.title}</div>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        size="icon"
                                        className="w-6 h-6 bg-transparent  hover:bg-transparent border border-default-200 text-default-600 hover:ring-0 hover:ring-transparent"
                                        onClick={() => setDeleteColumn(true)}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent className="bg-destructive">
                                    <p>Delete</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        size="icon"
                                        className="w-6 h-6 bg-transparent ring-offset-transparent hover:bg-transparent border border-default-200 text-default-600 hover:ring-0 hover:ring-transparent"
                                        onClick={handleOpenTask}
                                    >
                                        <Plus className="w-4 h-4" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Add Project</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </CardHeader>
                <CardContent className="flex-1 pt-6 px-3.5 h-full overflow-y-auto no-scrollbar">
                    {/* Column task container */}
                    <div className=" space-y-6">
                        {tasks?.length === 0 && <EmptyTask />}
                        <SortableContext items={tasksIds}>
                            {tasks.map((task) => (
                                <TaskCard task={task} key={task.id} />
                            ))}
                        </SortableContext>
                    </div>
                </CardContent>

            </Card>
        </>
    );
}

export default ColumnContainer;
