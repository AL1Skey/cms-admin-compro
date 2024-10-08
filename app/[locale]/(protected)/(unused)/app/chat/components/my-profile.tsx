'use client'

import { Icon } from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { useChatConfig } from "@/hooks/use-chat";
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area";

const MyProfile = () => {
    const [chatConfig, setChatConfig] = useChatConfig();
    let status = "active";
    return (
        <div>
            <div className="flex justify-between gap-1">
                <div className="flex gap-3">
                    <div className="flex-none">
                        <Avatar>
                            <AvatarImage src="/images/users/user-1.jpg" />
                            <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="flex-1 text-start">
                        <div className="text-default-800  text-sm font-medium mb-1">
                            Jane Cooper
                            <span className="bg-success inline-block h-2.5 w-2.5 rounded-full ms-3"></span>
                        </div>
                        <div className=" text-default-500  text-xs font-normal">
                            Available
                        </div>
                    </div>
                </div>
                <Button
                    size="icon"
                    className="w-8 h-8"
                    color="secondary"
                    rounded="full"
                    onClick={() => setChatConfig({ ...chatConfig, showProfile: true })}
                >
                    <Icon icon="heroicons-outline:dots-horizontal" className="w-4 h-4" />
                </Button>
            </div>

            <div className={cn('absolute bg-card rounded-md   h-full start-0 top-0 bottom-0  w-full z-50', {
                'hidden -start-full': !chatConfig.showProfile
            })}>
                <ScrollArea className="h-full">
                    <div className="p-6">
                        <div className="flex justify-end">
                            <Button size="icon" color="secondary" className="w-8 h-8" rounded="full" onClick={() => setChatConfig({ ...chatConfig, showProfile: false })}>
                                <Icon icon="heroicons-outline:x" className="w-4 h-4" />
                            </Button>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="relative">
                                <Avatar className="h-16 w-16 border border-default-200 p-1 bg-transparent hover:bg-transparent ">
                                    <AvatarImage src="/images/users/user-1.jpg" className="rounded-full" />
                                    <AvatarFallback>SC</AvatarFallback>
                                </Avatar>
                                <span
                                    className={cn("absolute top-3 -end-[3px] h-3 w-3 rounded-full bg-success  border border-primary-foreground",
                                        {
                                            "bg-success": status === "active",
                                            "bg-warning": status === "away",
                                            "bg-destructive": status === "busy",
                                            "bg-secondary": status === "offline",
                                        }
                                    )}
                                ></span>
                            </div>
                            <div className="text-center">
                                <div className="text-default-800  text-sm font-medium mb-0.5">
                                    Jane Cooper
                                </div>
                                <div className=" text-default-500  text-xs font-normal">
                                    Admin
                                </div>
                            </div>
                        </div>
                        <div className="my-8">
                            <Label htmlFor="bio" className="mb-2 block text-default-900"> About </Label>
                            <Textarea id="bio" placeholder="About your self" />
                        </div>
                        <div>
                            <Label htmlFor="status" className="block mb-3 text-default-700">Status</Label>
                            <RadioGroup defaultValue="comfortable">
                                <div className="flex items-center gap-2">
                                    <RadioGroupItem value="default" id="active" color="success" />
                                    <Label htmlFor="active">Active</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RadioGroupItem value="busy" id="busy" color="destructive" />
                                    <Label htmlFor="busy">Do Not Disturb</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RadioGroupItem value="away" id="away" color="warning" />
                                    <Label htmlFor="away">Away</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RadioGroupItem value="offline" id="offline" color="warning" />
                                    <Label htmlFor="offline">Offline</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        <Button className="mt-7">Logout</Button>
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
};

export default MyProfile;
