import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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

export default IconAvatar;