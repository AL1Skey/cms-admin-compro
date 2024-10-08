import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from '@/i18n/routing';

const SalesAutomationCard = () => {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Sales Automation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tempor incididun ut .
            </p>
          </CardContent>
          <CardFooter className="gap-6">
            <Link href="#" className="text-sm text-default underline">
              Learn More
            </Link>
          </CardFooter>
        </Card>
        <Card className="bg-default dark:bg-default-foreground">
          <CardHeader>
            <CardTitle className="text-default-50 dark:text-default">
              Sales Automation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-default-50 dark:text-default">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tempor incididun ut .
            </p>
          </CardContent>
          <CardFooter className="gap-6">
            <Link
              href="#"
              className="text-sm text text-default-50 dark:text-default underline"
            >
              Learn More
            </Link>
          </CardFooter>
        </Card>
        <Card className="bg-[#EDFFE5] dark:bg-default-foreground">
          <CardHeader>
            <CardTitle className="text-default">Sales Automation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-default">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tempor incididun ut .
            </p>
          </CardContent>
          <CardFooter className="gap-6">
            <Link href="#" className="text-sm text-default underline">
              Learn More
            </Link>
          </CardFooter>
        </Card>
        <Card className="bg-[#E5F9FF] dark:bg-default-foreground">
          <CardHeader>
            <CardTitle className="text-default">Sales Automation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-default">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tempor incididun ut .
            </p>
          </CardContent>
          <CardFooter className="gap-6">
            <Link href="#" className="text-sm text-default underline">
              Learn More
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Sales Automation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tempor incididun ut .
            </p>
          </CardContent>
          <CardFooter className="gap-6">
            <Button asChild>
              <Link href="#"> Another Link</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Sales Automation</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tempor incididun ut .
            </p>
          </CardContent>
          <CardFooter className="gap-6 justify-center">
            <Button asChild>
              <Link href="#"> Another Link</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Sales Automation</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tempor incididun ut .
            </p>
          </CardContent>
          <CardFooter className="gap-6 justify-center w-full">
            <Button asChild fullWidth>
              <Link href="#"> Another Link</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SalesAutomationCard;
