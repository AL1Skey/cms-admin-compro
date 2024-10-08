import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SiteBreadcrumb from "@/components/site-breadcrumb";
const Faq = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <Tabs defaultValue="started">
        <div className="grid grid-cols-12 gap-6">
          <Card className="lg:col-span-3 md:col-span-5 col-span-12 h-max">
            <CardContent className=" p-6">
              <TabsList className="md:flex-col gap-2 flex-wrap md:items-start justify-start">
                <TabsTrigger
                  value="started"
                  className="data-[state=active]:bg-secondary  data-[state=active]:text-default rounded-md px-6 py-3 w-full justify-start"
                >
                  Getting Started
                </TabsTrigger>
                <TabsTrigger
                  value="privacy"
                  className="data-[state=active]:bg-secondary  data-[state=active]:text-default rounded-md px-6 py-3 w-full justify-start"
                >
                  Privacy and Security
                </TabsTrigger>
                <TabsTrigger
                  value="legal"
                  className="data-[state=active]:bg-secondary  data-[state=active]:text-default rounded-md px-6 py-3 w-full justify-start"
                >
                  Legal
                </TabsTrigger>
              </TabsList>
            </CardContent>
          </Card>
          <div className="lg:col-span-9 md:col-span-7 col-span-12 mt-4 lg:mt-0">
            <TabsContent value="started" className="mt-0">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem className="dark:bg-secondary bg-white" value="item-1">
                  <AccordionTrigger className="dark:bg-secondary bg-white data-[state=open]:bg-default-200 data-[state=active]:text-default">
                    How does Dashcode work?
                  </AccordionTrigger>
                  <AccordionContent className="dark:bg-secondary bg-white">
                    Journalist call this critical, introductory section the and
                    when bridge properly executed, it is the that carries your
                    reader from anheadine try at attention-grabbing to the body
                    of your blog post.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="dark:bg-secondary bg-white" value="item-2">
                  <AccordionTrigger className="dark:bg-secondary bg-white data-[state=open]:bg-default-200 data-[state=active]:text-default">
                    Where I can learn more about using Dashcode?
                  </AccordionTrigger>
                  <AccordionContent className="dark:bg-secondary bg-white">
                    Journalist call this critical, introductory section the and
                    when bridge properly executed, it is the that carries your
                    reader from anheadine try at attention-grabbing to the body
                    of your blog post.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="dark:bg-secondary bg-white" value="item-3">
                  <AccordionTrigger className="dark:bg-secondary bg-white data-[state=open]:bg-default-200 data-[state=active]:text-default">
                    Why Dashcode is so important?
                  </AccordionTrigger>
                  <AccordionContent className="dark:bg-secondary bg-white">
                    Journalist call this critical, introductory section the and
                    when bridge properly executed, it is the that carries your
                    reader from anheadine try at attention-grabbing to the body
                    of your blog post.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="dark:bg-secondary bg-white" value="item-4">
                  <AccordionTrigger className="dark:bg-secondary bg-white data-[state=open]:bg-default-200 data-[state=active]:text-default">
                    Where I can find Dashcode?
                  </AccordionTrigger>
                  <AccordionContent className="dark:bg-secondary bg-white">
                    Journalist call this critical, introductory section the and
                    when bridge properly executed, it is the that carries your
                    reader from anheadine try at attention-grabbing to the body
                    of your blog post.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="privacy" className="mt-0">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem className="dark:bg-secondary bg-white" value="item-1">
                  <AccordionTrigger className="dark:bg-secondary bg-white data-[state=open]:bg-default-200 data-[state=active]:text-default">
                    How does Dashcode work?
                  </AccordionTrigger>
                  <AccordionContent className="dark:bg-secondary bg-white">
                    Journalist call this critical, introductory section the and
                    when bridge properly executed, it is the that carries your
                    reader from anheadine try at attention-grabbing to the body
                    of your blog post.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="dark:bg-secondary bg-white" value="item-2">
                  <AccordionTrigger className="dark:bg-secondary bg-white data-[state=open]:bg-default-200 data-[state=active]:text-default">
                    Where I can learn more about using Dashcode?
                  </AccordionTrigger>
                  <AccordionContent className="dark:bg-secondary bg-white">
                    Journalist call this critical, introductory section the and
                    when bridge properly executed, it is the that carries your
                    reader from anheadine try at attention-grabbing to the body
                    of your blog post.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="legal" className="mt-0">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem className="dark:bg-secondary bg-white" value="item-1">
                  <AccordionTrigger className="dark:bg-secondary bg-white data-[state=open]:bg-default-200 data-[state=active]:text-default">
                    How does Dashcode work?
                  </AccordionTrigger>
                  <AccordionContent className="dark:bg-secondary bg-white">
                    Journalist call this critical, introductory section the and
                    when bridge properly executed, it is the that carries your
                    reader from anheadine try at attention-grabbing to the body
                    of your blog post.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="dark:bg-secondary bg-white" value="item-2">
                  <AccordionTrigger className="dark:bg-secondary bg-white data-[state=open]:bg-default-200 data-[state=active]:text-default">
                    Where I can learn more about using Dashcode?
                  </AccordionTrigger>
                  <AccordionContent className="dark:bg-secondary bg-white">
                    Journalist call this critical, introductory section the and
                    when bridge properly executed, it is the that carries your
                    reader from anheadine try at attention-grabbing to the body
                    of your blog post.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="dark:bg-secondary bg-white" value="item-3">
                  <AccordionTrigger className="dark:bg-secondary bg-white data-[state=open]:bg-default-200 data-[state=active]:text-default">
                    Why Dashcode is so important?
                  </AccordionTrigger>
                  <AccordionContent className="dark:bg-secondary bg-white">
                    Journalist call this critical, introductory section the and
                    when bridge properly executed, it is the that carries your
                    reader from anheadine try at attention-grabbing to the body
                    of your blog post.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Faq;
