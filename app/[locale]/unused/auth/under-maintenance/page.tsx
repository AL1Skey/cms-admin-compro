import Logo from "@/components/partials/auth/logo";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import Image from "next/image";
import { Link } from '@/i18n/routing';

const UnderMaintenance = () => {
  return (
    <div className="min-h-screen">
      <div className="absolute left-0 top-0 w-full">
        <div className="flex flex-wrap justify-between items-center py-6 container">
          <div>
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div>
            <Button variant="outline" size="sm">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex justify-center flex-wrap items-center min-h-screen flex-col text-center">
          <Image height={500} width={500} src="/images/svg/img-2.svg" alt="" />
          <h4 className="text-3xl font-medium text-default-900  mb-2">
            We are under maintenance.
          </h4>
          <p className="font-normal text-base text-default-500 ">
            We’re making the system more awesome. <br />
            We’ll be back shortly.
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
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
              <ul className="flex md:justify-start justify-center space-x-3">
                <li>
                  <a
                    href="#"
                    className="text-default-500 text-sm transition duration-150 hover:text-default-900"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-default-500 text-sm transition duration-150 hover:text-default-900"
                  >
                    Faq
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-default-500 text-sm transition duration-150 hover:text-default-900"
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

export default UnderMaintenance;
