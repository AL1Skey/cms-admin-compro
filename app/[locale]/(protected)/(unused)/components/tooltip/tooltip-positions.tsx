
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const TooltipPositions = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="soft">Tooltip Top</Button>
          </TooltipTrigger>
          <TooltipContent color="primary">
            <TooltipArrow className="fill-primary w-4 h-2" />
            <p>Tooltip On Top!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="soft">Tooltip Bottom</Button>
          </TooltipTrigger>
          <TooltipContent color="primary" side="bottom">
            <TooltipArrow className="fill-primary w-4 h-2" />
            <p>Tooltip On Bottom!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="soft">Tooltip Right</Button>
          </TooltipTrigger>
          <TooltipContent color="primary" side="right">
            <TooltipArrow className="fill-primary w-4 h-2" />
            <p>Tooltip On Right!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="soft">Tooltip Left</Button>
          </TooltipTrigger>
          <TooltipContent color="primary" side="left">
            <TooltipArrow className="fill-primary w-4 h-2" />
            <p>Tooltip On Left!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

    </div>
  );
};

export default TooltipPositions;