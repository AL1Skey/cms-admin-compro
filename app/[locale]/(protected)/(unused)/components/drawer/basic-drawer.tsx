import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const BasicDrawer = () => {
  return (
  <Drawer>
    <DrawerTrigger asChild >
      <Button>Open drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
        <DrawerDescription>This action cannot be undone.</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter className="flex-row justify-end">
        <Button>Submit</Button>
        <DrawerClose>
          <Button variant="outline"> Cancel </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
  );
};

export default BasicDrawer;