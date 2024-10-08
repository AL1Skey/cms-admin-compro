
import { Progress } from "@/components/ui/progress";

const StripedProgress = () => {

  return (
    <div className="space-y-4">
      <Progress value={60} isStripe />
      <Progress value={30} color="primary" isStripe />
      <Progress value={40} color="secondary" isStripe />
      <Progress value={80} color="destructive" isStripe />
      <Progress value={60} color="warning" isStripe />
      <Progress value={70} color="info" isStripe />
      <Progress value={20} color="success" isStripe />
    </div>
  );
};

export default StripedProgress;