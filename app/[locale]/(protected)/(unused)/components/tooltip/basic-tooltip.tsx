
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const BasicTooltip = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Default</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Default Style</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" color="primary">Primary</Button>
          </TooltipTrigger>
          <TooltipContent color="primary">
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
            <p>Secondary Style</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="success" variant="outline">Success</Button>
          </TooltipTrigger>
          <TooltipContent color="success">
            <p>Success Style</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="info" variant="outline">Info</Button>
          </TooltipTrigger>
          <TooltipContent color="info">
            <p>Info Style</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="warning" variant="outline">Warning</Button>
          </TooltipTrigger>
          <TooltipContent color="warning">
            <p>Warning Style</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="destructive" variant="outline">Destructive</Button>
          </TooltipTrigger>
          <TooltipContent color="destructive">
            <p>Destructive Style</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default BasicTooltip;