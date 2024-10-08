
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import ContactList from "./components/contact-list";
import { getContacts } from './utils';
import MyProfile from './components/my-profile';
import Search from './components/search';
import ChatSidebarWrapper from './sidebar-wrapper';
import ChatWrapper from './chat-wrapper';



const layout = async ({ children }: { children: React.ReactNode }) => {
  
    const contacts = await getContacts()
    return (
        <ChatWrapper>
            <ChatSidebarWrapper>
                <Card className="h-full pb-0 ">
                    <CardHeader className="border-none pb-3">
                        <MyProfile />
                    </CardHeader>
                    <CardContent className="pt-0 px-0 h-full ">
                        <ScrollArea className="lg:h-[calc(100%-62px)]  h-[calc(100%-80px)] ">
                            <div className='sticky top-0 z-10 bg-card'>
                                <Search />
                            </div>
                            {
                                contacts?.map((contact) => {
                                    return (
                                        <ContactList
                                            key={contact.id}
                                            contact={contact}
                                        />
                                    )
                                })
                            }
                        </ScrollArea>
                    </CardContent>
                </Card>
            </ChatSidebarWrapper>
            <div className='flex-1 h-full flex gap-5'>
                {children}
            </div>
        </ChatWrapper>
    )
}

export default layout