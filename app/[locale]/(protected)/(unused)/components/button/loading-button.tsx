import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
const LoadingButton = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button disabled>
        <Loader2 className="me-2 h-4 w-4 animate-spin" />
        Default
      </Button>
      <Button color="primary" disabled>
        <Loader2 className="me-2 h-4 w-4 animate-spin" />
        Primary
      </Button>
      <Button color="secondary" disabled>
        <Loader2 className="me-2 h-4 w-4 animate-spin" />
        Secondary
      </Button>
      <Button color="success" disabled>
        <Loader2 className="me-2 h-4 w-4 animate-spin" />
        Success
      </Button>
      <Button color="info" disabled>
        <Loader2 className="me-2 h-4 w-4 animate-spin" />
        Info
      </Button>
      <Button color="warning" disabled>
        <Loader2 className="me-2 h-4 w-4 animate-spin" />
        Warning
      </Button>
      <Button color="destructive" disabled>
        <Loader2 className="me-2 h-4 w-4 animate-spin" />
        Destructive
      </Button>
    </div>
  );
};

export default LoadingButton;