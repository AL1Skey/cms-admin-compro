import { Link } from '@/i18n/routing';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
    Box,
    Ellipsis,
    LogOutIcon,
    Printer,
    Star,
} from "lucide-react";
import Image from "next/image";
import { getMailById } from "../utils";
import { Alert } from "@/components/ui/alert";
import GoBack from "./components/go-back"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Icon } from "@/components/ui/icon";
const MailDetails = async ({ params: { id } }: { params: { id: string }; }) => {
    const mail = await getMailById(id)
    if (!mail) {
        return <Alert color="destructive"> Mail not found</Alert>
    }
    return (
        <Card className=" h-full overflow-auto">
            <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-solid">
                <GoBack />
                <div className="flex gap-3">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    size="icon"
                                    className="rounded-full bg-default-100 hover:text-default-50 hover:outline-0 hover:outline-offset-0  hover:border-0 hover:ring-0 text-default-600 hover:ring-offset-0 p-4"
                                >
                                    <LogOutIcon className=" h-5 w-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Forward</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    size="icon"
                                    className="rounded-full bg-default-100 hover:text-default-50 hover:outline-0 hover:outline-offset-0  hover:border-0 hover:ring-0 text-default-600 hover:ring-offset-0 p-4"
                                >
                                    <Star className=" h-5 w-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Favourite</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    size="icon"
                                    className="rounded-full bg-default-100 hover:text-default-50 hover:outline-0 hover:outline-offset-0  hover:border-0 hover:ring-0 text-default-600 hover:ring-offset-0 p-4"
                                >
                                    <Box className=" h-5 w-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Archive</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    size="icon"
                                    className="rounded-full bg-default-100 hover:text-default-50 hover:outline-0 hover:outline-offset-0  hover:border-0 hover:ring-0 text-default-600 hover:ring-offset-0 p-4"
                                >
                                    <Printer className=" h-5 w-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Print</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    size="icon"
                                    className="rounded-full bg-default-100 hover:text-default-50 hover:outline-0 hover:outline-offset-0  hover:border-0 hover:ring-0 text-default-600 hover:ring-offset-0 p-4"
                                >
                                    <Ellipsis className=" h-5 w-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Actions</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                </div>
            </CardHeader>
            <CardContent >
                <p className="text-lg font-semibold text-default-800 mt-6">
                    Pay bills & win up to 600$ Cashback!
                </p>
                <div className="flex items-center mt-4 gap-4">
                    <Avatar className=" h-8 w-8">
                        <AvatarImage
                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt="Avatar image"
                        />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <p className="text-sm text-default-700 font-semibold">John Doe</p>
                </div>
                <div className="my-4 border-b border-solid  border-default-200 pb-6 space-y-4 text-default-600 text-base">
                    <p>Hi Jane Cooper,</p>
                    <p>
                        Jornalists call this critical, introductory section the Lede, and
                        when bridge properly executed, it is that carries your reader from
                        an headine try at attention-grabbing to the body of your blog post,
                        if you want to get it right on of these 10 clever ways to omen your
                        next blog
                    </p>
                    <p>
                        posr with a bang With resrpect, i must disagree with Mr.Zinsser. We
                        all know the most part of important part of any article is the
                        title.Without a compelleing title, your reader will not even get to
                        the first sentence.After the title, however, the first few sentences
                        of your article are certainly the most important part.
                    </p>
                    <div>
                        <p>Best regards,</p>
                        <p>Esther Howard</p>
                    </div>
                </div>
                <div className="py-5 flex gap-5 flex-wrap items-center border-b border-solid border-default-200">
                    <div className="flex flex-col items-center">
                        <Image
                            className="w-[150px] h-[95px]"
                            width={500}
                            height={300}
                            src="/images/all-img/inbox-1.png"
                            alt="mail"
                        />
                        <Link className="text-primary mt-1" href="/">Download</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            className="w-[150px] h-[95px]"
                            width={500}
                            height={300}
                            src="/images/all-img/inbox-2.png"
                            alt="mail"
                        />
                        <Link className="text-primary mt-1" href="/">Download</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            className="w-[150px] h-[95px]"
                            width={500}
                            height={300}
                            src="/images/all-img/inbox-3.png"
                            alt="mail"
                        />
                        <Link className="text-primary mt-1" href="/">Download</Link>
                    </div>
                </div>
                <Button color="secondary" variant="soft" size="md" className="mt-4">
                    <Icon icon="heroicons:chat-bubble-left-right" className="h-5 w-5 me-3" /> Reply
                </Button>
            </CardContent>
        </Card>
    );
};

export default MailDetails;
