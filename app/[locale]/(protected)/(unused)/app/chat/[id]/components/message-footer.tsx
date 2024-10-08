"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icon } from "@/components/ui/icon";
import { Annoyed, SendHorizontal } from "lucide-react";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import {
    Tooltip,
    TooltipArrow,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Label } from "@/components/ui/label";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { postMessageAction } from "@/action/app-actions";
import { useTheme } from "next-themes";

const MessageFooter = () => {
    const { theme: mode } = useTheme();
    const [message, setMessage] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
        e.target.style.height = "auto"; // Reset the height to auto to adjust
        e.target.style.height = `${e.target.scrollHeight - 15}px`;
    };

    const handleSelectEmoji = (emoji: any) => {
        setMessage(message + emoji.native);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!message) return;
        const data: any = {
            message,
        };

        await postMessageAction("55fe838e-9a09-4caf-a591-559803309ef1", "sfsfsf");
        setMessage("");


    };
    return (
        <>


            <div
                className="w-full flex items-end gap-1 lg:gap-4 lg:px-4 relative px-2 "
            >
                <div className="flex-none flex gap-1 absolute md:static top-0 left-1.5 z-10 ">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    size="icon"
                                    className="rounded-full hover:ring-0 hover:ring-transparent bg-default-100 hover:bg-default-100 hover:text-default-900 text-default-900">
                                    <Icon icon="heroicons-outline:link" className="w-5 h-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Add link</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                size="icon"
                                className="rounded-full hover:ring-0 hover:ring-transparent bg-default-100 hover:bg-default-100 hover:text-default-900 text-default-900">
                                <Annoyed className="w-6 h-6 text-default" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent side="top" align="start" className="w-fit p-0 shadow-none border-none bottom-0 rtl:left-5 ltr:-left-[110px]">
                            <Picker
                                data={data}
                                onEmojiSelect={handleSelectEmoji}
                                theme={mode === "dark" ? "dark" : "light"}
                            />
                        </PopoverContent>
                    </Popover>

                </div>
                <div className="flex-1">
                    <form onSubmit={handleSubmit}>
                        <div className="flex  gap-1 relative">
                            <textarea
                                value={message}
                                onChange={handleChange}
                                placeholder="Type your message..."
                                className="bg-background focus:outline-none  rounded-xl break-words ps-8  md:ps-3 px-3 flex-1 h-10 pt-2 p-1 pr-8 no-scrollbar "
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSubmit(e as any);
                                    }
                                }}
                                style={{
                                    minHeight: "40px",
                                    maxHeight: "120px",
                                    overflowY: "auto",
                                    resize: "none",
                                }}
                            />

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            size="icon"
                                            type="submit"
                                            className="rounded-full hover:ring-0 hover:ring-transparent bg-default-100 hover:bg-default-100 hover:text-default-900 text-default-900"
                                        >
                                            <Icon
                                                icon="heroicons-outline:paper-airplane"
                                                className="transform rotate-[60deg] w-5 h-5"
                                            />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent align="end">
                                        <p>Send Message</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default MessageFooter;
