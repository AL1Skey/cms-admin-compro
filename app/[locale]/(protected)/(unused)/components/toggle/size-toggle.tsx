import { Italic } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"
const SizeToggle = () => {
  return (
    <div className="flex gap-5 justify-center">
      <Toggle size="sm" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle italic default">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle size="lg" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default SizeToggle;