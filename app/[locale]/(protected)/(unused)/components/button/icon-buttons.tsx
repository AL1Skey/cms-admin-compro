import { Button } from "@/components/ui/button";
import { Newspaper } from "lucide-react";

const IconButtons = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>
        <Newspaper className="w-4 h-4 me-2" />
        Left Icon
      </Button>
      <Button color="primary">
        Right Icon
        <Newspaper className="w-4 h-4 ms-2" />
      </Button>
      <Button color="secondary">
        <Newspaper className="w-4 h-4 me-2" />
        Left Icon
      </Button>
      <Button color="success" variant="outline">
        Right Icon
        <Newspaper className="w-4 h-4 ms-2" />
      </Button>
      <Button variant="outline" color="primary" size="icon">
        <Newspaper className="w-5 h-5" />
      </Button>
      <Button  size="icon">
        <Newspaper className="w-5 h-5" />
      </Button>
      <Button  size="icon" color="primary" variant="soft">
        <Newspaper className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default IconButtons;