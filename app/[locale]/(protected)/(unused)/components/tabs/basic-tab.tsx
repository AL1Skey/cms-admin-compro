
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const BasicTab = () => {
  return (
    <Tabs defaultValue="home" className="w-full">
      <TabsList>
        <TabsTrigger
          value="home"
          className="relative dark:bg-transparent before:absolute before:top-full before:left-0 before:h-px before:w-full data-[state=active]:before:bg-primary"
        >Home</TabsTrigger>
        <TabsTrigger
          value="profile"
          className="relative dark:bg-transparent before:absolute before:top-full before:left-0 before:h-px before:w-full data-[state=active]:before:bg-primary"
        >Profile</TabsTrigger>
        <TabsTrigger
          value="messages"
          className="relative dark:bg-transparent before:absolute before:top-full before:left-0 before:h-px before:w-full data-[state=active]:before:bg-primary"
        >Messages</TabsTrigger>
        <TabsTrigger
          value="settings"
          className="relative dark:bg-transparent before:absolute before:top-full before:left-0 before:h-px before:w-full data-[state=active]:before:bg-primary"
        >Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
        Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
        Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
      </TabsContent>
      <TabsContent value="profile">
        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
        Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
      </TabsContent>
      <TabsContent value="messages">
        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
      </TabsContent>
      <TabsContent value="settings">
        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
        Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
        Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute
        id deserunt nisi.
      </TabsContent>
    </Tabs>
  )
}

export default BasicTab;