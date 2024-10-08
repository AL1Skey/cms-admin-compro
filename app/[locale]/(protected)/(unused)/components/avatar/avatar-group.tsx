import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

export default AvatarGroup;