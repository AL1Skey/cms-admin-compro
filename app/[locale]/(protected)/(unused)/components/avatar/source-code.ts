export const basicAvatar = `import { Avatar, AvatarFallback } from "@/components/ui/avatar";
const BasicAvatar = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Avatar>
        <AvatarFallback> PR </AvatarFallback>
      </Avatar>
      <Avatar color="primary">
        <AvatarFallback> LI </AvatarFallback>
      </Avatar>
      <Avatar color="secondary">
        <AvatarFallback> SH </AvatarFallback>
      </Avatar>
      <Avatar color="success">
        <AvatarFallback> SU </AvatarFallback>
      </Avatar>
      <Avatar color="info">
        <AvatarFallback> PR </AvatarFallback>
      </Avatar>
      <Avatar color="warning">
        <AvatarFallback> SR </AvatarFallback>
      </Avatar>
      <Avatar color="destructive">
        <AvatarFallback> AR </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default BasicAvatar;`

export const imageAvatar = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ImageAvatar = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Avatar>
        <AvatarImage src="/images/avatar/avatar-1.png" alt="dashcode" />
        <AvatarFallback> PR </AvatarFallback>
      </Avatar>
      <Avatar color="primary">
        <AvatarImage src="/images/avatar/avatar-2.png" alt="dashcode" />
        <AvatarFallback> LI </AvatarFallback>
      </Avatar>
      <Avatar color="secondary">
        <AvatarImage src="/images/avatar/avatar-3.png" alt="dashcode" />
        <AvatarFallback> SH </AvatarFallback>
      </Avatar>
      <Avatar color="success">
        <AvatarImage src="/images/avatar/avatar-4.png" alt="dashcode" />
        <AvatarFallback> SU </AvatarFallback>
      </Avatar>
      <Avatar color="info">
        <AvatarImage src="/images/avatar/avatar-5.png" alt="dashcode" />
        <AvatarFallback> PR </AvatarFallback>
      </Avatar>
      <Avatar color="warning">
        <AvatarImage src="/images/avatar/avatar-6.png" alt="dashcode" />
        <AvatarFallback> SR </AvatarFallback>
      </Avatar>
      <Avatar color="destructive">
        <AvatarImage src="/images/avatar/avatar-7.png" alt="dashcode" />
        <AvatarFallback> AR </AvatarFallback>
      </Avatar>
    </div>
  )
}

export default ImageAvatar;`

export const tonalAvatar=`import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TonalAvatar = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
    <Avatar variant="ghost" >
      <AvatarFallback > PR </AvatarFallback>
    </Avatar>
    <Avatar variant="ghost" color="primary">
      <AvatarFallback> LI </AvatarFallback>
    </Avatar>
    <Avatar variant="ghost" color="secondary">
      <AvatarFallback> SH </AvatarFallback>
    </Avatar>
    <Avatar variant="ghost" color="success">
      <AvatarFallback> SU </AvatarFallback>
    </Avatar>
    <Avatar variant="ghost" color="info">
      <AvatarFallback> PR </AvatarFallback>
    </Avatar>
    <Avatar variant="ghost" color="warning">
      <AvatarFallback> SR </AvatarFallback>
    </Avatar>
    <Avatar variant="ghost" color="destructive">
      <AvatarFallback> AR </AvatarFallback>
    </Avatar>
  </div>
  );
};

export default TonalAvatar;`

export const iconAvatar=`import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CircleCheck, MessageSquare, Trash2, User } from "lucide-react";
const IconAvatar = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Avatar>
        <AvatarFallback><User className="w-5 h-5" /></AvatarFallback>
      </Avatar>
      <Avatar color="primary">
        <AvatarFallback> <MessageSquare className="w-5 h-5" /></AvatarFallback>
      </Avatar>
      <Avatar color="secondary">
        <AvatarFallback> <Trash2 className="w-5 h-5" /> </AvatarFallback>
      </Avatar>
      <Avatar color="success">
        <AvatarFallback> <CircleCheck className="w-5 h-5" /> </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default IconAvatar;`

export const borderAvatar=`import { Avatar, AvatarFallback } from "@/components/ui/avatar";
const BorderAvatar = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Avatar className="ring-1 ring-border hover:ring-border ring-offset-[3px]  ring-offset-background" >
        <AvatarFallback> PR </AvatarFallback>
      </Avatar>
      <Avatar className="ring-1 ring-border hover:ring-border ring-offset-[3px]  ring-offset-background" color="primary">
        <AvatarFallback> LI </AvatarFallback>
      </Avatar>
      <Avatar className="ring-1 ring-border hover:ring-border ring-offset-[3px]  ring-offset-background" color="secondary">
        <AvatarFallback> SH </AvatarFallback>
      </Avatar>
      <Avatar className="ring-1 ring-border hover:ring-border ring-offset-[3px]  ring-offset-background" color="success">
        <AvatarFallback> SU </AvatarFallback>
      </Avatar>
      <Avatar className="ring-1 ring-border hover:ring-border ring-offset-[3px]  ring-offset-background" color="info">
        <AvatarFallback> PR </AvatarFallback>
      </Avatar>
      <Avatar className="ring-1 ring-border hover:ring-border ring-offset-[3px]  ring-offset-background" color="warning">
        <AvatarFallback> SR </AvatarFallback>
      </Avatar>
      <Avatar className="ring-1 ring-border hover:ring-border ring-offset-[3px]  ring-offset-background" color="destructive">
        <AvatarFallback> AR </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default BorderAvatar;`

export const borderColorAvatar=`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const BorderColorAvatar = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Avatar
        className="ring-1 ring-default ring-offset-[3px] ring-offset-background"
      >
        <AvatarFallback> PR </AvatarFallback>
      </Avatar>
      <Avatar
        className="ring-1 ring-primary ring-offset-[3px] ring-offset-background"
        color="primary"
      >
        <AvatarFallback> LI </AvatarFallback>
      </Avatar>
      <Avatar
        className="ring-1 ring-secondary ring-offset-[3px] ring-offset-background"
        color="secondary"
      >
        <AvatarFallback> SH </AvatarFallback>
      </Avatar>
      <Avatar
        className="ring-1 ring-success ring-offset-[3px] ring-offset-background"
        color="success"
      >
        <AvatarFallback> SU </AvatarFallback>
      </Avatar>
      <Avatar
        className="ring-1 ring-info ring-offset-[3px] ring-offset-background"
        color="info"
      >
        <AvatarFallback> PR </AvatarFallback>
      </Avatar>
      <Avatar
        className="ring-1 ring-warning ring-offset-[3px] ring-offset-background"
        color="warning"
      >
        <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
        <AvatarFallback> SR </AvatarFallback>
      </Avatar>
      <Avatar
        className="ring-1 ring-destructive ring-offset-[3px] ring-offset-background"
        color="destructive"
      >
        <AvatarFallback> AR </AvatarFallback>
      </Avatar>

    </div>
  )
}
export default BorderColorAvatar;`

export const sizeAvatar=`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const SizeAvatar = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Avatar size="sm">
        <AvatarImage  src="/images/avatar/avatar-1.png" alt="dashcode" />
        <AvatarFallback> PR </AvatarFallback>
      </Avatar>
      <Avatar size="base" color="primary">
        <AvatarImage  src="/images/avatar/avatar-2.png" alt="dashcode" />
        <AvatarFallback> LI </AvatarFallback>
      </Avatar>
      <Avatar size="md" color="success">
        <AvatarImage  src="/images/avatar/avatar-3.png" alt="dashcode" />
        <AvatarFallback> SU </AvatarFallback>
      </Avatar>
      <Avatar size="lg" color="info">
        <AvatarImage  src="/images/avatar/avatar-4.png" alt="dashcode" />
        <AvatarFallback> PR </AvatarFallback>
      </Avatar>
      <Avatar size="xl" color="warning">
        <AvatarImage  src="/images/avatar/avatar-5.png" alt="dashcode" />
        <AvatarFallback> SR </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default SizeAvatar;`

export const roundedAvatar=`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const RoundedAvatar = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Avatar rounded="sm"  color="primary">
        <AvatarImage src="/images/avatar/av-1.jpg" alt="dashcode" />
        <AvatarFallback> LI </AvatarFallback>
      </Avatar>
      <Avatar rounded="md"  >
        <AvatarImage src="/images/avatar/av-2.jpg" alt="dashcode" />
        <AvatarFallback> PR </AvatarFallback>
      </Avatar>
      <Avatar rounded="lg"  color="secondary">
        <AvatarImage src="/images/avatar/av-3.jpg" alt="dashcode" />
        <AvatarFallback> SH </AvatarFallback>
      </Avatar>
      <Avatar rounded="full"  color="success">
        <AvatarImage src="/images/avatar/av-4.jpg" alt="avatar image" />
        <AvatarFallback> SU </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default RoundedAvatar;`

export const avatarShape=`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const AvatarShape = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Avatar shape="circle"  color="primary">
        <AvatarImage src="/images/avatar/av-4.jpg" alt="dashcode" />
        <AvatarFallback> LI </AvatarFallback>
      </Avatar>
      <Avatar shape="square" >
        <AvatarImage src="/images/avatar/av-1.jpg" alt="dashcode" />
        <AvatarFallback> PR </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default AvatarShape;`

export const tooltipAvatar=`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const TooltipAvatar = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Avatar>
              <AvatarImage
                src="/images/avatar/avatar-1.png" alt="dashcode"
              />
              <AvatarFallback> PR </AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent>
            <p>Hasan Ali</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Avatar color="primary">
              <AvatarImage
                src="/images/avatar/avatar-2.png" alt="dashcode"
              />
              <AvatarFallback> LI </AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent color="info">
            <p>Blue Cherry</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Avatar color="secondary">
              <AvatarImage
                src="/images/avatar/avatar-3.png" alt="dashcode"
              />
              <AvatarFallback> SH </AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent color="warning">
            <p>John Doe</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Avatar color="success">
              <AvatarImage
                src="/images/avatar/avatar-4.png" alt="dashcode"
              />
              <AvatarFallback> SU </AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent>
            <p>Emily Davis</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Avatar color="info">
              <AvatarImage
                src="/images/avatar/avatar-5.png" alt="dashcode"
              />
              <AvatarFallback> PR </AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent color="destructive">
            <p>Rachel Brown</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Avatar color="warning">
              <AvatarImage
                src="/images/avatar/avatar-6.png" alt="dashcode"
              />
              <AvatarFallback> SR </AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent color="warning">
            <p>Hannah Lewis</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Avatar color="destructive">
              <AvatarImage
                src="/images/avatar/avatar-7.png" alt="dashcode"
              />
              <AvatarFallback> AR </AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent color="destructive">
            <p>Emma Walker</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default TooltipAvatar;`

export const avatarGroup=`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarGroup = () => {
  return (
    <div className="-gap-2">
      <Avatar className="ring-1 ring-default-300 ring-offset-[2px]  ring-offset-background transition-all duration-300 hover:-translate-y-0.5">
        <AvatarImage src="/images/avatar/avatar-1.png" alt="dashcode" />
        <AvatarFallback> PR </AvatarFallback>
      </Avatar>
      <Avatar className="ring-1 ring-default-300 ring-offset-[2px]  ring-offset-background transition-all duration-300 hover:-translate-y-0.5">
        <AvatarImage src="/images/avatar/avatar-2.png" alt="dashcode" />
        <AvatarFallback> PR </AvatarFallback>
      </Avatar>
      <Avatar className="ring-1 ring-default-300 ring-offset-[2px]  ring-offset-background transition-all duration-300 hover:-translate-y-0.5">
        <AvatarImage src="/images/avatar/avatar-3.png" alt="dashcode" />
        <AvatarFallback> PR </AvatarFallback>
      </Avatar>
      <Avatar className="ring-1 ring-default-300 ring-offset-[2px]  ring-offset-background transition-all duration-300 hover:-translate-y-0.5">
        <AvatarImage src="/images/avatar/avatar-4.png" alt="dashcode" />
        <AvatarFallback> PR </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default AvatarGroup;`