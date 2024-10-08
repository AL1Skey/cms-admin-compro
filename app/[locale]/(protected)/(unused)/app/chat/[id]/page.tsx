
import { getChatsByContactId, getProfileUser } from '../utils'
import { Icon } from "@/components/ui/icon";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import Image from 'next/image';
import { redirect } from '@/components/navigation';
import MessageFooter from './components/message-footer';
import ChatHeader from './components/chat-header';
import InfoWrapper from './components/info-wrapper';
import { MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const socials = [
    {
        name: "facebook",
        icon: "bi:facebook",
        link: "#",
    },
    {
        name: "twitter",
        link: "#",
        icon: "bi:twitter",
    },
    {
        name: "instagram",
        link: "#",
        icon: "bi:instagram",
    },
];

const ChatPageSingle = async ({ params: { id } }: { params: { id: string }; }) => {
 
    const { chat, contact } = await getChatsByContactId(id)
    const profile = await getProfileUser()

    if (!contact) {
        redirect('/app/chat')
    }

    return (
        <>
            <Card className="h-full flex flex-col flex-1 ">
                <CardHeader className="flex-none mb-0 border-b border-default-200 py-5">
                    <ChatHeader contact={contact} />
                </CardHeader>
                <CardContent className="  relative flex-1 overflow-y-auto no-scrollbar">
                    {chat && chat?.chat?.length > 0 ? (
                        chat?.chat?.map(({ senderId, message, }, index) => (
                            <div className="block  " key={index}>
                                {senderId === "e2c1a571-5f7e-4f56-9020-13f98b0eaba2" ? (
                                    <>
                                        <div className="flex gap-2 items-start justify-end group w-full mb-4">
                                            <div className="flex flex-col  gap-1">
                                                <div className="flex items-center gap-1">
                                                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible ">
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <span className="w-7 h-7 rounded-full bg-default-200 flex items-center justify-center">
                                                                    <MoreHorizontal />
                                                                </span>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent
                                                                className="w-fit"
                                                                align="end"
                                                                side="top"
                                                            >
                                                                <DropdownMenuItem>Remove</DropdownMenuItem>
                                                                <DropdownMenuItem>Forward</DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </div>
                                                    <div className="whitespace-pre-wrap break-all">
                                                        <div className="bg-default-100 text-default-900 text-sm  p-3 font-normal rounded-md ">
                                                            {message}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="font-normal text-xs text-default-400 dark:text-default-600 text-start mt-1"> 2:40 pm  </div>
                                            </div>
                                            <div className="flex-none self-end -translate-y-5">
                                                <div className="h-8 w-8 rounded-full ">
                                                    <Image
                                                        src={profile?.avatar}
                                                        alt=""
                                                        className="block w-full h-full object-cover rounded-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex gap-2 items-start group mb-4">
                                        <div className="flex-none self-end -translate-y-5">
                                            <div className="h-8 w-8 rounded-full">
                                                <Image
                                                    src={contact?.avatar || `/images/users/user-5.jpg`}
                                                    alt=""
                                                    className="block w-full h-full object-cover rounded-full"
                                                />
                                            </div>

                                        </div>
                                        <div className="flex-1 flex flex-col gap-2">
                                            <div className="flex flex-col   gap-1">
                                                <div className="flex items-center gap-1">
                                                    <div className="whitespace-pre-wrap break-all relative z-[1]">
                                                        <div className="bg-default-100 text-default-900 text-sm  p-3 font-normal rounded-md ">
                                                            {message}
                                                        </div>
                                                    </div>
                                                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible ">
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <span className="w-7 h-7 rounded-full bg-default-200 flex items-center justify-center">
                                                                    <MoreHorizontal />
                                                                </span>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent
                                                                className="w-fit"
                                                                align="end"
                                                                side="top"
                                                            >
                                                                <DropdownMenuItem>Remove</DropdownMenuItem>
                                                                <DropdownMenuItem>Forward</DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </div>
                                                </div>
                                                <div className="font-normal text-xs text-default-400 dark:text-default-600 text-start mt-1"> 2:40 pm  </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="text-center   absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Icon icon="typcn:messages" className="h-20 w-20 text-default-300 mx-auto" />
                            <div className="mt-4 text-lg font-medium text-default-500">No messages </div>
                            <div className="mt-1 text-sm font-medium text-default-400">{`don't worry, just take a deep breath & say "Hello"`}</div>
                        </div>
                    )}

                </CardContent>
                <CardFooter className="flex-none flex-col px-0 py-4 border-t border-border">
                    <MessageFooter />
                </CardFooter>
            </Card>

            <InfoWrapper>
                <h4 className="text-xl text-default-900 font-medium mb-8 px-6 mt-6">
                   About
                </h4>

                <div className='flex flex-col items-center px-6'>
                    <Avatar className="h-24 w-24 border-none shadow-none bg-transparent hover:bg-transparent">
                        <AvatarImage src={contact?.avatar?.src || `/images/users/user-5.jpg`} alt="" />
                        <AvatarFallback>{contact?.fullName?.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="text-center mt-4 ">
                        <h5 className="text-base text-default-600  font-medium mb-1">
                            {contact?.fullName}
                        </h5>
                        <h6 className="text-xs text-default-600  font-normal">
                            {contact?.role}
                        </h6>
                    </div>
                </div>

                <ul className="mt-5 px-6 space-y-4 border-b border-default-200  pb-5 ">
                    <li className="flex justify-between text-sm text-default-600 ">
                        <div className="flex gap-2 items-start ">
                            <Icon
                                icon="heroicons-outline:location-marker"
                                className="text-base"
                            />
                            <span>Location</span>
                        </div>
                        <div className="font-medium">Bangladesh</div>
                    </li>
                    <li className="flex justify-between text-sm text-default-600 ">
                        <div className="flex gap-2 items-start">
                            <Icon icon="heroicons-outline:user" className="text-base" />
                            <span>Members since</span>
                        </div>
                        <div className="font-medium">Oct 2021</div>
                    </li>
                    <li className="flex justify-between text-sm text-default-600 ">
                        <div className="flex gap-2 items-start ">
                            <Icon icon="heroicons-outline:translate" className="text-base" />
                            <span>Language</span>
                        </div>
                        <div className="font-medium">English</div>
                    </li>
                </ul>
                <ul className="mt-5 px-6 space-y-4 border-b border-default-200  pb-5 ">
                    {socials?.map((slink, sindex) => (
                        <li
                            key={sindex}
                            className="text-sm text-default-600"
                        >
                            <button className="flex gap-2">
                                <Icon icon={slink.icon} className="text-base" />
                                <span className="capitalize font-normal text-default-600">
                                    {slink.name}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
                <h4 className="py-4 text-sm px-6 text-default-500  font-medium">
                    Shared documents
                </h4>
                <div className="grid grid-cols-3 gap-2 px-6">
                    {
                        ["/images/chat/sd1.png", "/images/chat/sd2.png", "/images/chat/sd3.png", "/images/chat/sd4.png", "/images/chat/sd5.png", "/images/chat/sd6.png"].map((image, index) => (
                            <Image
                                key={`image-${index}`}
                                src={image}
                                alt=""
                                width={200}
                                height={100}
                                className='w-full h-12 object-cover rounded-md'
                            />

                        ))
                    }
                </div>
            </InfoWrapper>
        </>
    )

}

export default ChatPageSingle