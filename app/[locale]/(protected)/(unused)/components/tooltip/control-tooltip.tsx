"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ControlTooltip = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="space-y-3">
      <TooltipProvider>
        <Tooltip open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
          <TooltipTrigger asChild>
            <Button color="primary" variant="outline">Hover Me</Button>
          </TooltipTrigger>
          <TooltipContent color="primary">
            <p>Tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <p className="text-sm text-muted-foreground">
        Open: {isOpen ? "true" : "false"}
      </p>
    </div>
  );
};

export default ControlTooltip;