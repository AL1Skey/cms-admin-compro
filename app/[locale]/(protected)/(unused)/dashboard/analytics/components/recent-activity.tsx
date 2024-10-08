import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {activity} from "./data"
const RecentActivity = () => {
  return (
      <ul className=" space-y-3 h-full ">
        {activity.map((item) => (
          <li
            className="flex items-center gap-3 border-b border-default-100 dark:border-default-300 last:border-b-0 pb-3 last:pb-0"
            key={item.id}
          >
            <Avatar className="w-8 h-8">
              <AvatarImage src={item.img} alt="next-avater" />
              <AvatarFallback> SA </AvatarFallback>
            </Avatar>
            <div className="flex-1 text-start overflow-hidden text-ellipsis whitespace-nowrap max-w-[63%]">
              <div className="text-sm text-default-600  overflow-hidden text-ellipsis whitespace-nowrap">
                {item.description}
              </div>
            </div>
            <div className="flex-none ">
              <div className="text-sm font-light text-default-400 dark:text-default-600">
                {item.time}
              </div>
            </div>
          </li>
        ))}
      </ul>
  );
};

export default RecentActivity;