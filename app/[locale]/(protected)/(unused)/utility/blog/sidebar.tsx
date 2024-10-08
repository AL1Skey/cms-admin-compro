import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Link } from '@/i18n/routing';
import Image from "next/image";
import { InputGroup, InputGroupButton } from "@/components/ui/input-group";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const category = [
  {
    cta: "Graphic Designer (214) ",
  },
  {
    cta: "Engineering Jobs (514) ",
  },
  {
    cta: "Mainframe Jobs (554)",
  },
  {
    cta: "Legal Jobs (457)",
  },
  {
    cta: "IT Jobs (1254) ",
  },
  {
    cta: "R&D Jobs (554) ",
  },
  {
    cta: "Government Jobs (350) ",
  },
  {
    cta: "PSL Jobs (221)",
  },
];
const tags = [
  {
    title: "Business",
    link: "#",
  },
  {
    title: "Consulting",
    link: "#",
  },
  {
    title: "Photographic",
    link: "#",
  },
  {
    title: "Investment",
    link: "#",
  },
  {
    title: "Camera",
    link: "#",
  },
  {
    title: "Assurance",
    link: "#",
  },
  {
    title: "Secutity",
    link: "#",
  },
];
const Sidebar = () => {
  return (
    <Card>
      <CardHeader className="border-b border-solid border-default-100">
        <InputGroup>
          <Input
            className="focus-visible:border-0 active:border-0 focus:border-0"
            type="text"
            placeholder="Search.."
          />
          <InputGroupButton>
            <Button
              size="md"
              color="secondary"
              className=" hover:ring-0 hover:ring-offset-0 border-0"
            >
              <Icon icon="heroicons:magnifying-glass" className="w-5 h-5" />
            </Button>
          </InputGroupButton>
        </InputGroup>
      </CardHeader>
      <CardContent className="pt-4 border-b border-solid border-default-100">
        <h4 className="text-default-700 text-xl font-medium mb-4">
          Latest Blogs Post
        </h4>
        <ul className="list-item space-y-4">
          <li>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <div className="flex-none">
                <div className="h-20 w-20">
                  <Image
                    width={300}
                    height={300}
                    src="/images/post/t-1.png"
                    alt=""
                    className="block w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <h4 className="text-sm text-default-600 font-regular leading-5 mb-4">
                  <Link href="#">
                    Lorem ipsum dolor sit amet consectetur adipiscing
                  </Link>
                  .
                </h4>
                <span className="text-xs text-default-400">
                  <Link href="#">Oct 09, 2021</Link>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <div className="flex-none">
                <div className="h-20 w-20">
                  <Image
                    width={300}
                    height={300}
                    src="/images/post/t-2.png"
                    alt=""
                    className="block w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <h4 className="text-sm text-default-600 font-regular leading-5 mb-4">
                  <Link href="#">
                    Lorem ipsum dolor sit amet consectetur adipiscing
                  </Link>
                  .
                </h4>
                <span className="text-xs text-default-400">
                  <Link href="#">Oct 09, 2021</Link>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <div className="flex-none">
                <div className="h-20 w-20">
                  <Image
                    width={300}
                    height={300}
                    src="/images/post/t-3.png"
                    alt=""
                    className="block w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <h4 className="text-sm text-default-600 font-regular leading-5 mb-4">
                  <Link href="#">
                    Lorem ipsum dolor sit amet consectetur adipiscing
                  </Link>
                  .
                </h4>
                <span className="text-xs text-default-400">
                  <Link href="#">Oct 09, 2021</Link>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </CardContent>
      <CardContent className="pt-4 border-b border-solid border-default-100">
        <h4 className="text-default-700 text-xl font-medium mb-4">Category</h4>
        <ul className="list-item space-y-6">
          {category.map((item, i) => (
            <li key={i}>
              <Link
                href="#"
                className="flex space-x-1 items-start leading-[1] text-sm text-default-700 hover:text-default-900 transition duration-150 rtl:space-x-reverse"
              >
                <span className="text-sm">
                  <Icon icon="heroicons:chevron-right-solid" />
                </span>
                <span>{item.cta}</span>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardContent className="pt-4 px-6">
        <h4 className="text-default-700 text-xl font-medium mb-4">
          Popular tags
        </h4>
        <ul className="flex flex-wrap">
          {tags.map((item, i) => (
            <li key={i} className="mr-2 mb-2">
              <Link
                href={item.link}
                className="text-xs font-normal text-default-600 bg-default-100 dark:bg-default-600 dark:text-default-300 py-1 px-3 rounded-full hover:bg-default-900 hover:text-primary-foreground transition duration-150"
              >
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
      <div className="mx-6 bg-default-900 dark:bg-default-50 text-primary-foreground dark:text-default rounded-xl p-6 space-y-4 mb-6">
        <h4 className="text-xl font-medium ">Subscribe to our blog</h4>
        <div className="text-sm">
          Lorem ipsum dolor sit amet, consectet ur adipiscing elit.
        </div>
        <form action="#" className="space-y-4">
          <Input
            type="text"
            placeholder="Enter your email"
            className=" py-2 bg-transparent border-secondary focus:border-secondary placeholder:text-default-400 dark:placeholder:text-default-700"
          />
          <Button
            fullWidth
            color="secondary"
            size="md"
            className="hover:outline-none hover:ring-0 hover:ring-offset-0 dark:bg-white dark:text-primary-foreground"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default Sidebar;
