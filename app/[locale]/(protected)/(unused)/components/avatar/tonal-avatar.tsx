import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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

export default TonalAvatar;