import { Italic } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"
const ToggleWithText = () => {
  return (
    <div className="flex justify-center">
      <Toggle aria-label="Toggle italic">
        <Italic className="mr-2 h-4 w-4" />
        Italic
      </Toggle>
    </div>
  );
};

export default ToggleWithText;