import { Card, CardContent, CardHeader } from "@/components/ui/card";
import MailItem from "./mail";
import MailHeader from "./mail-header";
import { getMail } from "./utils";
const EmailApp = async () => {
  const mails = await getMail()
  return (
      <Card className="h-full rounded-md">
        <CardHeader className="border-b border-default-200 sticky top-0 z-10 bg-card py-4">
          <MailHeader />
        </CardHeader>
        <CardContent className="p-0 h-full">
          <div className="h-[calc(100%-80px)] overflow-y-auto no-scrollbar">
            {mails.map((mail, index) => (
              <MailItem key={`mail-${index}`} mail={mail} />
            ))}
          </div>
        </CardContent>
      </Card>
  );
};

export default EmailApp;
