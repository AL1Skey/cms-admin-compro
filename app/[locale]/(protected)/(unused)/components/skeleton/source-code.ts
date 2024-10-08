export const basicSkeleton=`import { Skeleton } from "@/components/ui/skeleton";

const BasiSkeleton = () => {
  return (
    <div className="flex items-center gap-4 max-w-sm mx-auto">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export default BasiSkeleton;`

export const skeletonCard=`import { Skeleton } from "@/components/ui/skeleton"

const SkeletonCard = () => {
  return (
    <div className="flex flex-col space-y-3 max-w-sm mx-auto">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
export default SkeletonCard;`