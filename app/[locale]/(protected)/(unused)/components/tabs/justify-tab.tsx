
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const JustifyTab = () => {
  return (
    <Tabs defaultValue="home" className="w-full">
      <TabsList className="flex-wrap">
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
      <TabsContent value="home">
        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
        Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
        Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
        Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
        Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
      </TabsContent>
      <TabsContent value="profile">
        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
        Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
        Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
      </TabsContent>
      <TabsContent value="messages">
        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
      </TabsContent>
      <TabsContent value="settings">
        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
        Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
        Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute
        id deserunt nisi.
        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
        Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
        Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute
        id deserunt nisi.
      </TabsContent>
    </Tabs>
  )
}

export default JustifyTab;