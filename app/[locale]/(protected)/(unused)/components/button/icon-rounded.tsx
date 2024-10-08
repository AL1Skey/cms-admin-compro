import { Button } from "@/components/ui/button";
import { Newspaper } from "lucide-react";

const IconRounded = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button rounded="full">
        <Newspaper className="w-4 h-4 me-2" />
        Left Icon
      </Button>
      <Button color="primary"  rounded="full">
        Right Icon
        <Newspaper className="w-4 h-4 ms-2" />
      </Button>
      <Button color="secondary"  rounded="full">
        <Newspaper className="w-4 h-4 me-2" />
        Left Icon
      </Button>
      <Button color="success" variant="outline"  rounded="full">
        Right Icon
        <Newspaper className="w-4 h-4 ms-2" />
      </Button>
      <Button variant="outline" color="primary" size="icon"  rounded="full">
        <Newspaper className="w-5 h-5" />
      </Button>
      <Button  size="icon"  rounded="full">
        <Newspaper className="w-5 h-5" />
      </Button>
      <Button  size="icon" color="primary" variant="soft"  rounded="full">
        <Newspaper className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default IconRounded;