import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Copy, Scan } from "lucide-react";

const VariousTrigger = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Button</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Trigger Button</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button   variant="outline" size="icon">
              <Scan className=" h-6 w-6" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Scan Now! </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button   variant="outline" size="icon">
              <Copy  className=" h-6 w-6"/>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copy The Text! ... </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default VariousTrigger;