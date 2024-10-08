"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Contact, ProfileUser } from "@/app/api/chat/data";
import { useChatConfig } from "@/hooks/use-chat";

const ChatHeader = ({ contact }: { contact: any }) => {
    let active = true;
    const isLg = useMediaQuery("(max-width: 1024px)");

    const [chatConfig, setChatConfig] = useChatConfig()

    return (
        <div className="flex  items-center">
            <div className="flex-1 flex gap-3 items-center">
                {isLg && (
                    <Button size="icon" variant='ghost' color="secondary" onClick={() => setChatConfig({
                        ...chatConfig,
                        isOpen: true
                    })}>
                        <Icon icon="heroicons-outline:menu-alt-1" className="w-5 h-5" />
                    </Button>
                )}
                <div className="relative inline-block">
                    <Avatar className="border-none shadow-none bg-transparent hover:bg-transparent">
                        <AvatarImage src={contact?.avatar?.src} alt="" />
                        <AvatarFallback>{contact?.fullName?.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <Badge
                        className=" h-2 w-2  p-0 ring-1 ring-border ring-offset-[1px]  absolute top-2 -end-0.5"
                        color={active ? "success" : "secondary"}
                    ></Badge>
                </div>
                <div className="hidden lg:block">
                    <div className="text-default-800 text-sm font-medium mb-0.5 ">
                        <span className="relative">{contact?.fullName}</span>
                    </div>
                    <div className="text-default-600 text-xs font-normal">
                        {active ? "Active Now" : "Offline"}
                    </div>
                </div>
            </div>
            <div className="flex-none flex gap-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                type="button"
                                size="icon"
                                className="rounded-full bg-default-100 text-default-900 hover:bg-default-100 hover:ring-0 hover:ring-transparent"
                            >
                                <Icon icon="heroicons-outline:phone" className="text-xl" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" align="end">
                            <p>Start a voice call</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                type="button"
                                size="icon"
                                className="rounded-full bg-default-100 text-default-900 hover:bg-default-100 hover:ring-0 hover:ring-transparent"
                            >
                                <Icon icon="heroicons-outline:video-camera" className="text-xl" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" align="end">
                            <p>Start a video call</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                {!isLg && (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    onClick={() => setChatConfig({ ...chatConfig, showInfo: !chatConfig.showInfo })}
                                    type="button"
                                    size="icon"
                                    className={cn(
                                        "rounded-full bg-default-100 text-primary hover:bg-default-100 hover:ring-0 hover:ring-transparent",
                                        {
                                            "text-default-900": !chatConfig.showInfo,
                                        }
                                    )}

                                >
                                    <span className="text-xl ">
                                        {chatConfig.showInfo ? (
                                            <Icon icon="heroicons-outline:dots-vertical" className="text-xl" />

                                        ) : (
                                            <Icon icon="heroicons-outline:dots-horizontal" className="text-xl" />
                                        )}
                                    </span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="bottom" align="end">
                                <p>Conversation information</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )}
            </div>
        </div>
    );
};

export default ChatHeader;
