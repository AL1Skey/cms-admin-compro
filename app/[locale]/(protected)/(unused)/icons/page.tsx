import { Link } from '@/i18n/routing';
import SiteBreadcrumb from "@/components/site-breadcrumb";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
const IconPage = () => {
  const icons = [
    { name: "heroicons:academic-cap" },
    { name: "heroicons:adjustments-horizontal" },
    { name: "heroicons:adjustments-vertical" },
    { name: "heroicons:archive-box" },
    { name: "heroicons:archive-box-arrow-down" },
    { name: "heroicons:archive-box-x-mark" },
    { name: "heroicons:arrow-down" },
    { name: "heroicons:arrow-down-circle" },
    { name: "heroicons:arrow-down-left" },
    { name: "heroicons:arrow-down-on-square" },
    { name: "heroicons:arrow-up-tray" },
    { name: "heroicons:arrows-pointing-in" },
    { name: "heroicons:cloud" },
    { name: "heroicons:cog" },
    { name: "heroicons:command-line" },
    { name: "heroicons:computer-desktop" },
    { name: "heroicons:cpu-chip" },
    { name: "heroicons:document-arrow-down" },
    { name: "heroicons:envelope" },
    { name: "heroicons:envelope-open" },
    { name: "heroicons:exclamation-circle" },
    { name: "heroicons:exclamation-triangle" },
    { name: "heroicons:eye" },
    { name: "heroicons:eye-dropper" },
    { name: "heroicons:film" },
    { name: "heroicons:heart" },
    { name: "heroicons:inbox" },
    { name: "heroicons:inbox" },
    { name: "heroicons:information-circle" },
    { name: "heroicons:lifebuoy" },
    { name: "heroicons:identification" },
    { name: "heroicons:key" },
    { name: "heroicons:link" },
    { name: "heroicons:pencil-square" },
    { name: "heroicons:rectangle-stack" },
    { name: "heroicons:rocket-launch" },
    { name: "heroicons:window" },
    { name: "heroicons:wifi" },
    { name: "heroicons:wallet" },
    { name: "heroicons:variable" },
    { name: "heroicons:users" },
    { name: "heroicons:user-plus" },
    { name: "heroicons:user-minus" },
    { name: "heroicons:user-group" },
    { name: "heroicons:user-circle" },
    { name: "heroicons:user" },
    { name: "heroicons:square-2-stack" },
    { name: "heroicons:shopping-bag" },
    { name: "heroicons:shield-check" },
    { name: "heroicons:share" },
    { name: "heroicons:wrench" },
  ];
  return (
    <div>
      <SiteBreadcrumb />
      <div className="flex flex-wrap gap-3">
        {
          icons.map((icon, index) => (

            <TooltipProvider
              key={`icon-${index}`}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    key={`icon-${index}`}
                    size="icon"
                    className="bg-card text-default-500 text-xl border-default-200  w-14 h-12"
                    variant="outline"
                  >
                    <Icon icon={icon.name} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{icon.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))
        }
      </div>
      <div className="mt-10 flex justify-center">
        <Button asChild>
          <Link
            href="https://icon-sets.iconify.design"
            target="_blank"
          >
            View All iconify Icons
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default IconPage;