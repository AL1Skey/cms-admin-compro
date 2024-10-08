

import { Icon } from "@/components/ui/icon";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const TabsWithIcon = () => {
  return (
    <Tabs defaultValue="home" className="w-full">
      <TabsList>
        <TabsTrigger
          value="home"
          className="relative dark:bg-transparent before:absolute before:top-full before:left-0 before:h-px before:w-full data-[state=active]:before:bg-primary"
        >
          <Icon icon="heroicons:home" className="h-4 w-4 me-1" />
          Home
        </TabsTrigger>
        <TabsTrigger
          value="profile"
          className="relative dark:bg-transparent before:absolute before:top-full before:left-0 before:h-px before:w-full data-[state=active]:before:bg-primary"
        >
          <Icon icon="heroicons:user" className="h-4 w-4 me-1" />
          Profile
        </TabsTrigger>
        <TabsTrigger
          value="messages"
          className="relative dark:bg-transparent before:absolute before:top-full before:left-0 before:h-px before:w-full data-[state=active]:before:bg-primary"
        >
          <Icon icon="heroicons:chat-bubble-left-right" className="h-4 w-4 me-1" />
          Messages
        </TabsTrigger>
        <TabsTrigger
          value="settings"
          className="relative dark:bg-transparent before:absolute before:top-full before:left-0 before:h-px before:w-full data-[state=active]:before:bg-primary"
        >
          <Icon icon="bitcoin-icons:gear-filled" className="h-4 w-4 me-1" />
          Settings
        </TabsTrigger>
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

export default TabsWithIcon;