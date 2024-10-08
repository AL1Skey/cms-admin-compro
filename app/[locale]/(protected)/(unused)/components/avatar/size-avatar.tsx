import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

export default SizeAvatar;