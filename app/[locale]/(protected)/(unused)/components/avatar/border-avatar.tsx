import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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

export default BorderAvatar;