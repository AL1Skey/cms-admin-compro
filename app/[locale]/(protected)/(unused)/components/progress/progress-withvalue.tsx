"use client"
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

export default ProgressWithValue;