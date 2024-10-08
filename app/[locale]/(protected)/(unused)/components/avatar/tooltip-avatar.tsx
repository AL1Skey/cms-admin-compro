import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

export default TooltipAvatar;