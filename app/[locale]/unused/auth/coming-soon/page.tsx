
import Logo from "@/components/partials/auth/logo";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Link } from '@/i18n/routing';

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen">
      <div className="xl:absolute left-0 top-0 w-full">
        <div className="flex flex-wrap justify-between items-center py-6 container">
          <Link href="/" className="inline-block">
            <Logo />
          </Link>
          <Button size="sm" variant="outline">
            Contact us
          </Button>
        </div>
      </div>
      <div className="container">
        <div className="flex justify-between flex-wrap items-center min-h-screen">
          <div className="max-w-[500px] space-y-4 flex-1">
            <div className="relative flex space-x-3 items-center text-2xl text-default-900 ">
              <span className="inline-block w-[25px] bg-default-500 h-[1px]"></span>
              <span>Coming soon</span>
            </div>
            <div className="xl:text-[70px] xl:leading-[70px] text-4xl font-semibold text-default-900 ">
              Get notified when we launch
            </div>
            <p className="font-normal text-default-600  max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className=" flex items-center px-3 rounded bg-default-200 dark:bg-default-800">
              <Input
                type="text"
                placeholder="Enter your email"
                className="flex-1 bg-transparent h-full block w-full py-6 placeholder:text-secondary-500 focus:border-0 text-base focus:outline-none focus:ring-0 border-none"
              />
              <div className="flex-none">
                <Button type="button" className=" px-6">
                  Notify me
                </Button>
              </div>
            </div>
            <div className="text-sm text-default-500 ">
              *Don’t worry we will not spam you :
            </div>
          </div>
          <div>
            <Image
              width={300}
              height={300}
              src="/images/svg/img-1.svg"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="xl:fixed bottom-0 w-full">
        <div className="container">
          <div className="md:flex justify-between items-center flex-wrap space-y-4 py-6">
            <div>
              <ul className="flex md:justify-start justify-center gap-3">
                <li>
                  <Link
                    href="#"
                    className="border-default inline-block border border-solid  rounded-full hover:bg-default hover:text-default-50 duration-300 transition-all p-2"
                  >
                    <Icon className="h-4 w-4" icon="icomoon-free:facebook" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="border-default inline-block border border-solid  rounded-full hover:bg-default hover:text-default-50 duration-300 transition-all p-2"
                  >
                    <Icon className="h-4 w-4" icon="icomoon-free:twitter" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="border-default inline-block border border-solid  rounded-full hover:bg-default hover:text-default-50 duration-300 transition-all p-2"
                  >
                    <Icon className="h-4 w-4" icon="icomoon-free:linkedin2" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="border-default inline-block border border-solid  rounded-full hover:bg-default hover:text-default-50 duration-300 transition-all p-2"
                  >
                    <Icon className="h-4 w-4" icon="icomoon-free:google" />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex md:justify-start justify-center gap-3">
                <li>
                  <a
                    href="#"
                    className="text-default-500  text-sm transition duration-150 hover:text-default-900"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-default-500  text-sm transition duration-150 hover:text-default-900"
                  >
                    Faq
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-default-500  text-sm transition duration-150 hover:text-default-900"
                  >
                    Email us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
