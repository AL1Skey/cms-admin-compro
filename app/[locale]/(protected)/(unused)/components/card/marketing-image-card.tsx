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

const MarketingImageCard = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
      <Card>
        <Image
          alt=""
          src="/images/all-img/card-4.png"
          width={700}
          height={400}
          className="w-full h-[250px] object-cover rounded-t-md"
        />
        <CardHeader>
          <CardTitle>Sales Automation</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod tempor incididun ut .
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Personalization</CardTitle>
        </CardHeader>
        <CardContent className="text-center ">
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod tempor incididun ut .
          </p>
        </CardContent>
        <CardContent className="pb-0">
          <Image
            alt=""
            src="/images/all-img/card-5.png"
            width={700}
            height={400}
            className="w-full h-[250px] object-cover rounded-b-md"
          />
        </CardContent>
      </Card>
      <Card>
        <Image
          alt=""
          src="/images/all-img/card-6.png"
          width={700}
          height={400}
          className="w-full h-[250px] object-cover rounded-t-md"
        />
        <CardHeader className="text-center">
          <CardTitle>Marketing Automation</CardTitle>
        </CardHeader>
        <CardContent className="text-center pb-0">
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod tempor incididun ut .
          </p>
        </CardContent>
      </Card>
      <Card className="bg-[#E5F9FF] dark:bg-default-foreground pb-0">
        <CardHeader className="text-center">
          <CardTitle>Marketing Automation</CardTitle>
        </CardHeader>
        <CardContent className="text-center ">
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod tempor incididun ut .
          </p>
        </CardContent>
        <Image
          alt=""
          src="/images/all-img/card-7.png"
          width={700}
          height={400}
          className="w-full h-[250px] object-cover rounded-b-md"
        />
      </Card>
    </div>


  );
};

export default MarketingImageCard;
