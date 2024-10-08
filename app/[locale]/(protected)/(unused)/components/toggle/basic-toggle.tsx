import { Bold } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

const BasicToggle = () => {
  return (
    <div className="flex justify-center">
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default BasicToggle;