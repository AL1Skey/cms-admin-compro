
import { Progress } from "@/components/ui/progress";

const AnimatedStriped = () => {

  return (
    <div className="space-y-4">
      <Progress value={30}  isStripe isAnimate/>
      <Progress value={30} color="primary" isStripe isAnimate/>
      <Progress value={40} color="secondary" isStripe isAnimate />
      <Progress value={80} color="destructive" isStripe isAnimate />
      <Progress value={60} color="warning" isStripe isAnimate />
      <Progress value={70} color="info" isStripe isAnimate />
      <Progress value={20} color="success" isStripe isAnimate />
    </div>
  );
};

export default AnimatedStriped;