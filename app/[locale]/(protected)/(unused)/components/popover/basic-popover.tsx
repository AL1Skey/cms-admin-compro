import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const BasicPopover = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="hover:ring-0 hover:ring-transparent">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent
          className="p-0 overflow-hidden bg-transparent shadow-none border-none"
        >
          <Card>
            <CardHeader className="bg-default p-2 rounded-t-lg">
              <CardTitle className="text-default-foreground text-base py-0">Create Project</CardTitle>
            </CardHeader>
            <CardContent className="p-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
              cumque?
            </CardContent>
          </Card>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="hover:ring-0 hover:ring-transparent">Open With Arrow</Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 border-none rounded-md">
          <PopoverArrow className='fill-default w-3' />
          <div
            className='p-2.5  bg-default text-default-foreground text-sm  font-medium rounded-t-md'>
            Create Project
          </div>
          <div
            className='p-2 text-sm text-default-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            cumque?
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default BasicPopover;