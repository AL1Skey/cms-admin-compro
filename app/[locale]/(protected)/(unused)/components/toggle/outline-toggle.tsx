import { Italic } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

const OutlineToggle = () => {
  return (
    <div className="flex justify-center">
      <Toggle variant="outline" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default OutlineToggle;