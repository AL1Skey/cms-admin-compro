export const basicTooltip=`
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

export default BasicTooltip;`

export const tooltupWithArrow=`
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

export default TooltipWithArrow;`

export const tooltipPosition=`
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

export default TooltipPositions;`

export const variousTrigger=`import {
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

export default VariousTrigger;`

export const tooltipWithDelay=`"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const WithDelay = () => {
  return (
    <div className="flex flex-wrap  gap-3">
      <TooltipProvider delayDuration={2000}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button  variant="outline" color="info" >Delay Open (2000ms)</Button>
          </TooltipTrigger>
          <TooltipContent color="info">
            <p>Tooltip Delay</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={1000}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button  variant="outline" color="warning">Hover Me (delay 1000ms)</Button>
          </TooltipTrigger>
          <TooltipContent color="warning">
            <p>Tooltip Delay</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider >
        <Tooltip>
          <TooltipTrigger asChild>
            <Button  variant="outline" color="destructive">Then Hover me</Button>
          </TooltipTrigger>
          <TooltipContent color="destructive">
            <p>Tooltip Delay</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default WithDelay;`

export const controlTooltip=`"use client";

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

export default ControlTooltip;`