import { Button } from "@/components/ui/button";
import { Newspaper } from "lucide-react";
const BlockButton = () => {
  return (
    <div className="space-y-3">
      <Button fullWidth>Primary</Button>
      <Button color="secondary" fullWidth>
        <Newspaper className="w-4 h-4 me-2" /> Left Icon
      </Button>
      <Button color="success" fullWidth> Right Icon
        <Newspaper className="w-4 h-4 ms-2" />
      </Button>
    </div>
  );
};

export default BlockButton;