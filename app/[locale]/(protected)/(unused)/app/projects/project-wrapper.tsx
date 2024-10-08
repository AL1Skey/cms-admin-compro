"use client"
import { Button } from "@/components/ui/button";
import { Filter, List, Plus } from "lucide-react";
import CreateProject from "./create-project";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link, usePathname } from "@/components/navigation";
import { getProjectNav } from "./data";

const ProjectWrapper = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const menus = getProjectNav(pathname)

    return (
        <div>
            <CreateProject
                open={open}
                setOpen={setOpen}
            />
            <div className="flex w-full flex-wrap items-center gap-4 mb-6">
                <h4 className="flex-1 font-medium lg:text-2xl text-xl capitalize text-default-900">
                    Project
                </h4>
                <div className="flex items-center gap-4 flex-wrap">
                    {menus?.map(({ label, href, active }, index) => (
                        <Button
                            key={index}
                            asChild
                            className={cn("flex-none capitalize bg-card text-default-600 hover:bg-card hover:text-default-600  hover:ring-0 hover:ring-transparent", {
                                "bg-default text-default-foreground hover:bg-default hover:text-default-foreground": active,
                            })}

                        >
                            <Link href={href}>
                                <List className="w-3.5 h-3.5 me-1" />
                                <span>{label}</span>
                            </Link>

                        </Button>
                    ))}


                    <Button className="flex-none bg-card text-default-600 hover:ring-0 hover:ring-transparent hover:bg-default hover:text-default-foreground" >
                        <Filter className="w-3.5 h-3.5 me-1" />
                        <span>On Going</span>
                    </Button>
                    <Button
                        className="flex-none"
                        onClick={() => setOpen(true)}
                    >
                        <Plus className="w-4 h-4 me-1" />
                        <span>Add Project</span>
                    </Button>
                </div>
            </div>
            {children}
        </div>
    );
};

export default ProjectWrapper;