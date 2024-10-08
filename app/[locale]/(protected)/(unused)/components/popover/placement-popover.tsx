import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const PlacementPopover = () => {
  return (
    <div className="flex flex-wrap gap-2">

      <Popover>
        <PopoverTrigger asChild>
          <Button>Open Top</Button>
        </PopoverTrigger>
        <PopoverContent
          side="top"
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
          <Button>Open Right</Button>
        </PopoverTrigger>
        <PopoverContent
          side="right"
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
          <Button>Open Bottom</Button>
        </PopoverTrigger>
        <PopoverContent
          side="bottom"
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
          <Button>Open Left</Button>
        </PopoverTrigger>
        <PopoverContent
          side="left"
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

    </div>
  );
};

export default PlacementPopover;