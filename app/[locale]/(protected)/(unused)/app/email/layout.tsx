import { Metadata } from "next";
import MailWrapper from "./mail-wrapper";
import MailSidebarWrapper from "./sidebar-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import Compose from "./compose";
import Nav from "@/components/nav";
import { ScrollArea } from "@/components/ui/scroll-area";
export const metadata: Metadata = {
  title: "Mail",
  description: "Mail Application",
};
const Layout = ({ children }: { children: React.ReactNode }) => {

  return <MailWrapper>
    <div className="flex gap-5  h-full ">
      <MailSidebarWrapper>
        <Card className=" h-full   ">
          <CardContent className=" h-full space-y-2 pt-6 px-0">
            <div className="px-5">
              <Compose />
            </div>
            <ScrollArea className="h-[calc(100%-30px)]">
              <Nav
                links={[
                  {
                    title: "Inbox",
                    icon: "uil:image-v",
                    active: true,
                  },
                  {
                    title: "Starred",
                    icon: "heroicons:star",
                    active: false,
                  },
                  {
                    title: "Sent",
                    icon: "heroicons:paper-airplane",
                    active: false,
                  },
                  {
                    title: "Drafts",
                    icon: "heroicons:pencil-square",
                    active: false,
                  },
                  {
                    title: "Spam",
                    icon: "heroicons:information-circle",
                    active: false,
                  },
                  {
                    title: "Trash",
                    icon: "heroicons:trash",
                    active: false,
                  },
                ]}
              />
              <div className="space-y-2 mt-3">
                <p className="text-sm font-medium text-default-900 px-5">TAGS</p>
                <Nav
                  dotStyle
                  links={[
                    {
                      title: "personal",
                      active: true,
                    },
                    {
                      title: "social",
                      active: false,
                    },
                    {
                      title: "promotions",
                      active: false,
                    },
                    {
                      title: "business",
                      active: false,
                    },
                  ]}
                />
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </MailSidebarWrapper>
      <div className="flex-1 w-full h-full">
        {children}
      </div>
    </div>
  </MailWrapper>;
};

export default Layout;
