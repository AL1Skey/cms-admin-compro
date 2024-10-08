
'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";
import { type Contact as ContactType, type Chat as ChatType } from "../utils";
import { Link, usePathname } from "@/components/navigation";
import { useChatConfig } from "@/hooks/use-chat";


const ContactList = ({ contact }: {
    contact: ContactType,

}) => {
    const { avatar, id, fullName, status, about, unreadmessage, date } =
        contact;

    const pathname = usePathname();
    const [chatConfig, setChatConfig] = useChatConfig()
    return (
        <Link
            onClick={() => setChatConfig({
                ...chatConfig,
                isOpen: false
            })}
            href={`/app/chat/${id}`} className={cn(
                " gap-4 py-2 lg:py-2.5 px-3 border-l-2 border-transparent   hover:bg-default-100 cursor-pointer flex ",
                {
                    "lg:bg-default-100 ": `/app/chat/${id}` === pathname
                }
            )} >


            <div className="flex-1 flex items-center  gap-3 ">
                <div className="relative inline-block ">
                    <Avatar className="border-none bg-transparent hover:bg-transparent">
                        <AvatarImage src={avatar.src} />
                        <AvatarFallback className="uppercase">
                            {fullName.slice(0, 2)}
                        </AvatarFallback>
                    </Avatar>
                    <Badge
                        className=" h-2 w-2  p-0 ring-1 ring-border ring-offset-[1px]   items-center justify-center absolute top-2 -end-[3px]"
                        color={status === "online" ? "success" : "secondary"}
                    ></Badge>
                </div>
                <div className="block">
                    <div className="truncate max-w-[120px]">
                        <span className="text-sm text-default-900 font-medium">
                            {" "}
                            {fullName}
                        </span>
                    </div>
                    <div className="truncate  max-w-[120px]">
                        <span className=" text-xs  text-default-700 ">
                            {about}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex-none  flex-col items-end  gap-2 hidden lg:flex">
                <span className="text-xs text-default-600 text-end uppercase">
                    {date}
                </span>
                <span
                    className={cn(
                        "h-[14px] w-[14px] flex items-center justify-center bg-default-400 rounded-full text-default-foreground text-[10px] font-medium",
                        {
                            "bg-[#FFC155]": unreadmessage > 0,
                        }
                    )}
                >
                    {unreadmessage === 0 ? (
                        <Icon icon="uil:check" className="text-sm" />
                    ) : (
                        unreadmessage
                    )}
                </span>
            </div>
        </Link>
    );
};

export default ContactList;
