import { Progress } from "@/components/ui/progress";

const BasicProgress = () => {
  return (
    <div className="space-y-4">
      <Progress value={33} />
      <Progress value={80} />
      <Progress value={50} />
      <Progress value={70} />
    </div>
  );
};

export default BasicProgress;