
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const TooltipWithArrow = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Default</Button>
          </TooltipTrigger>
          <TooltipContent>
            <TooltipArrow className="fill-default w-4 h-2" />
            <p>Default Style</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" color="primary">Primary</Button>
          </TooltipTrigger>
          <TooltipContent   color="primary">
            <TooltipArrow className="fill-primary w-4 h-2" />
            <p>Primary Style</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="secondary" variant="outline">Secondary</Button>
          </TooltipTrigger>
          <TooltipContent color="secondary">
            <TooltipArrow className="fill-secondary w-4 h-2" />
            <p>Secondary Style</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="success" variant="outline">Success</Button>
          </TooltipTrigger>
          <TooltipContent  color="success">
            <TooltipArrow className="fill-success w-4 h-2" />
            <p>Success Style</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="info" variant="outline">Info</Button>
          </TooltipTrigger>
          <TooltipContent  color="info">
            <TooltipArrow className="fill-info w-4 h-2" />
            <p>Success Style</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="warning" variant="outline">Warning</Button>
          </TooltipTrigger>
          <TooltipContent  color="warning">
            <TooltipArrow className="fill-warning w-4 h-2" />
            <p>Success Style</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="destructive" variant="outline">Destructive</Button>
          </TooltipTrigger>
          <TooltipContent  color="destructive">
            <TooltipArrow className="fill-destructive w-4 h-2" />
            <p>Success Style</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default TooltipWithArrow;