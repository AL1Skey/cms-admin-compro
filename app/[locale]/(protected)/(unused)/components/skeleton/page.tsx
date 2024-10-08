import Card from "@/components/code-snippet";
import BasiSkeleton from "./basic-skeleton";
import SkeletonCard from "./skeleton-card";
import { basicSkeleton, skeletonCard } from "./source-code";
import SiteBreadcrumb from "@/components/site-breadcrumb";
const SkeletonPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="space-y-6">
        <Card title="Skeleton" code={basicSkeleton}>
          <BasiSkeleton />
        </Card>
        <Card title="Skeleton Card" code={skeletonCard}>
          <SkeletonCard />
        </Card>
      </div>
    </div>
  );
};

export default SkeletonPage;