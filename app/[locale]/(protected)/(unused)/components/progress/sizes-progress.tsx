import { Progress } from "@/components/ui/progress";

const SizesProgress = () => {
  return (
    <div className="space-y-4">
      <Progress value={30} size="sm" color="primary" />
      <Progress value={40} color="warning" />
      <Progress value={70} size="md" color="success" />
      <Progress value={90} size="lg" color="destructive" />
    </div>
  );
};

export default SizesProgress;