import { Underline } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

const DisabledToggle = () => {
  return (
    <div className="flex justify-center">
      <Toggle aria-label="Toggle underline" disabled>
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default DisabledToggle;