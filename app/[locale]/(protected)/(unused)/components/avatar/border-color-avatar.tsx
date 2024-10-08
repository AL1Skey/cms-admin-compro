import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
export default BorderColorAvatar;