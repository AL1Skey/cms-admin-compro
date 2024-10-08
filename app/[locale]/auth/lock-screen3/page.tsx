import Lock from "@/components/partials/auth/lock";
import { Link } from '@/i18n/routing';
import Image from "next/image";
import Logo from "@/components/logo";

const LockScreen3 = () => {
  return (
    <div
      className="flex w-full items-center overflow-hidden min-h-dvh h-dvh basis-full bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(/images/all-img/login-bg.png)`,
      }}
    >
      <div className="overflow-y-auto flex flex-wrap w-full h-dvh">
        <div
          className="flex-1 overflow-hidden text-[40px] leading-[48px] text-default-600 
s lg:w-1/2 lg:block hidden"
        >
          <div className="flex justify-center items-center min-h-screen">
            <Link href="/" className="">
              <Image
                height={300}
                width={300}
                src="/images/logo/logo-white.svg"
                alt=""
                className="mb-10"
              />
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
          <div className="bg-default-50  relative h-auto  lg:mr-[150px] mr-auto p-10 md:rounded-md max-w-[520px] w-full ml-auto text-2xl text-default-900  mb-3">
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
            <div className="author-bio text-center mt-10 mb-8">
              <div className="h-14 w-14 mx-auto rounded-full">
                <Image
                  height={300}
                  width={300}
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

            <div className="text-sm mx-auto w-full text-center font-normal text-default-500 mt-12 uppercase">
              Not you ? return
              <Link
                href="/"
                className="text-default-900  font-medium hover:underline"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 lg:block hidden text-white py-5 px-5 text-xl w-full">
          Unlock your Project{" "}
          <span className="text-white font-bold ms-1">performance</span>
        </div>
      </div>
    </div>
  );
};

export default LockScreen3;
