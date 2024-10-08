import { Button } from "@/components/ui/button";
import { Link } from '@/i18n/routing';
const LinkButton = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild>
        <Link href="#">Default</Link>
      </Button>
      <Button color="primary" asChild>
        <Link href="#">Primary</Link>
      </Button>
      <Button color="secondary" asChild>
        <Link href="#">Secondary</Link>
      </Button>
      <Button color="success" asChild>
        <Link href="#">Success</Link>
      </Button>
      <Button color="info" asChild>
        <Link href="#">Info</Link>
      </Button>
      <Button color="warning" asChild>
        <Link href="#">Warning</Link>
      </Button>
      <Button color="destructive" asChild>
        <Link href="#">Destructive</Link>
      </Button>
    </div>
  );
};

export default LinkButton;