import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Link } from '@/i18n/routing';

const BasicCard = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Subtitle</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            alt=""
            src="/images/all-img/card-1.png"
            width={700}
            height={700}
            className="w-full h-[140px] object-cover mb-6 rounded-md"
          />
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod tempor incididun ut .
          </p>
        </CardContent>
        <CardFooter className="gap-6">
          <Link href="#" className="text-sm text-default underline">
            Learn More
          </Link>
          <Link href="#" className="text-sm text-default underline">
            Another Link
          </Link>
        </CardFooter>
      </Card>
      <Card>
        <Image
          alt=""
          src="/images/all-img/card-2.png"
          width={700}
          height={700}
          className="w-full h-[140px] object-cover mb-6 rounded-t-md"
        />
        <CardHeader className="p-6 pt-0">
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Subtitle</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod tempor incididun ut .
          </p>
        </CardContent>
        <CardFooter className="gap-6 mt-6">
          <Link href="#" className="text-sm text-default underline">
            Learn More
          </Link>
          <Link href="#" className="text-sm text-default underline">
            Another Link
          </Link>
        </CardFooter>
      </Card>
      <Card className="relative z-[1] rounded-lg overflow-hidden">
        <Image
          alt=""
          src="/images/all-img/card-3.png"
          width={700}
          height={700}
          className="w-full h-full object-cover absolute top-0 left-0 z-[-1]"
        />
        <div className="pt-6 h-max">
          <CardHeader className="p-6 pt-0">
            <CardTitle className="text-default-foreground dark:text-default">
              Card Title
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-16">
            <CardDescription className="text-base text-default-foreground dark:text-default mb-3">
              Card Title
            </CardDescription>
            <p className="text-sm text-default-foreground dark:text-default">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tempor incididun ut .
            </p>
          </CardContent>
          <CardFooter className="mt-14">
            <Button asChild size="lg">
              <Link href="#">Another Link</Link>
            </Button>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default BasicCard;
