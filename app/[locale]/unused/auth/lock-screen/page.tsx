import { Link } from '@/i18n/routing';
import Lock from "@/components/partials/auth/lock";
import Copyright from "@/components/partials/auth/copyright";
import Image from "next/image";
import Logo from "@/components/partials/auth/logo";
const LockScreen = () => {
  return (
    <div className="flex w-full items-center overflow-hidden min-h-dvh h-dvh basis-full">
      <div className="overflow-y-auto flex flex-wrap w-full h-dvh">
        <div
          className="lg:block hidden flex-1 overflow-hidden text-[40px] leading-[48px] text-default-600 
 relative z-[1] bg-default-50 "
        >
          <div className="max-w-[520px] pt-20 ps-20">
            <Link href="/" className="mb-6 inline-block">
              <Logo />
            </Link>
            <h4>
              Unlock your Project{" "}
              <span className="text-default-800 font-bold ms-2">
                performance
              </span>
            </h4>
          </div>
          <div className="absolute left-0 2xl:bottom-[-160px] bottom-[-130px] h-full w-full z-[-1]">
            <Image
              width={300}
              height={300}
              src="/images/auth/ils1.svg"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        <div className="flex-1 relative dark:bg-default-100 bg-white">
          <div className=" h-full flex flex-col ">
            <div className="max-w-[524px] mx-auto  w-full  md:px-[42px] md:py-[44px] p-7 text-2xl text-default-900  mb-3 flex flex-col justify-center h-full">
              <div className="flex justify-center items-center text-center mb-6 lg:hidden ">
                <Link href="/">
                  <Logo />
                </Link>
              </div>
              <div className="text-center mb-10">
                <h4 className="font-medium mb-4">Lock Screen</h4>
                <div className="text-default-500 text-base">
                  Enter your password to unlock the screen!
                </div>
              </div>
              <div className="author-bio text-center mb-8">
                <div className="h-14 w-14 mx-auto rounded-full">
                  <Image
                    width={300}
                    height={300}
                    src="/images/all-img/user-big.png"
                    alt=""
                    className="w-full h-full object-cover block"
                  />
                </div>
                <div className="text-default-900  text-base font-medium mt-4">
                  Kathryn Murphy
                </div>
              </div>
              <Lock />

              <div className="md:max-w-[345px] mx-auto font-normal text-default-500  mt-12 uppercase text-sm">
                Not you ? return
                <Link
                  href="/"
                  className="text-default-900  font-medium hover:underline"
                >
                  Sign In
                </Link>
              </div>
            </div>
            <div className="text-xs font-normal text-default-500 z-[999] pb-10 text-center">
              <Copyright />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockScreen;
