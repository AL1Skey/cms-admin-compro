import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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

export default BasicAvatar;