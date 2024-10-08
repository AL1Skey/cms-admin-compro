import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const VerticalTab = () => {
  return (
    <Tabs defaultValue="home" >
      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-3 md:col-span-5 col-span-12">
          <TabsList className="md:flex-col gap-2 flex-wrap   justify-start">
            <TabsTrigger
              value="home"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md px-6"
            >Home</TabsTrigger>
            <TabsTrigger
              value="profile"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md px-6"
            >Profile</TabsTrigger>
            <TabsTrigger
              value="messages"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md px-6"
            >Messages</TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md px-6"
            >Settings</TabsTrigger>
          </TabsList>
        </div>
        <div className="lg:col-span-9 md:col-span-7 col-span-12 mt-4 lg:mt-0">
          <TabsContent value="home" className="mt-0">
            <strong>Home Content</strong> {" "}
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
            Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
          </TabsContent>
          <TabsContent value="profile" className="mt-0" >
            <strong>Profile Content</strong> {" "}
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
             Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
          </TabsContent>
          <TabsContent value="messages" className="mt-0" >
            <strong>Messages Content</strong> {" "}
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          </TabsContent>
          <TabsContent value="settings" className="mt-0">
            <strong>Settings Content</strong> {" "}
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
             Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
             Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
          </TabsContent>
        </div>
      </div>
    </Tabs>

  );
};

export default VerticalTab;