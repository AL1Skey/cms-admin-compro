export const basicProgress=`import { Progress } from "@/components/ui/progress";

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

export default BasicProgress;`

export const colorProgress=`
import { Progress } from "@/components/ui/progress";

const ColorProgress = () => {

  return (
    <div className="space-y-4">
      <Progress value={30}  />
      <Progress value={40} color="primary"/>
      <Progress value={40} color="secondary"/>
      <Progress value={80} color="destructive" />
      <Progress value={60} color="warning" />
      <Progress value={70} color="info" />
      <Progress value={20} color="success" />
    </div>
  );
};

export default ColorProgress;`

export const sizesProgress=`import { Progress } from "@/components/ui/progress";

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

export default SizesProgress;`

export const stripedProgress=`
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

export default StripedProgress;`

export const animateStriped=`
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

export default AnimatedStriped;`

export const progressWithValue=`"use client"
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const ProgressWithValue = () => {
  const [value1, setValue1] = useState<number>(80);
  const [value2, setValue2] = useState<number>(70);
  return (
    <div className="space-y-4">
      <div className="pb-3">
        <span className="text-base text-default-700 font-medium">{value1}%</span>
        <Progress value={value1} />
      </div>
      <Progress value={80} size="lg" color="warning" showValue />
      <div>
        <span className="text-base text-default-700 font-medium block text-end">{value2}%</span>
        <Progress value={value2} color="primary" />
      </div>
    </div>
  );
};

export default ProgressWithValue;`