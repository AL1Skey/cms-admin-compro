import { Link } from '@/i18n/routing';
import Social from "@/components/partials/auth/social";
import LoginForm from "@/components/partials/auth//login-form";
import Image from "next/image";
import Logo from "@/components/logo";

const Login3 = () => {
  return (
    <>
      <div
        className="flex w-full items-center overflow-hidden min-h-dvh h-dvh basis-full bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(/images/all-img/page-bg.png)`,
        }}
      >
        <div className="overflow-y-auto flex flex-wrap w-full h-dvh">
          <div
            className="lg:block hidden flex-1 overflow-hidden text-[40px] leading-[48px] text-default-600 
s lg:w-1/2"
          >
            <div className="flex justify-center items-center min-h-screen">
              <Link href="/" className="">
                <Image
                  src="/images/logo/logo-white.svg"
                  alt=""
                  width={300}
                  height={300}
                  className="mb-10 h-40 w-36"
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
              <div className="text-center 2xl:mb-10 mb-5">
                <h4 className="font-medium">Sign In</h4>
                <div className="text-default-500  text-base">
                  Sign in to your account to start using Dashcode
                </div>
              </div>
              <LoginForm />
              <div className=" relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-6">
                <div className=" absolute inline-block  bg-default-50 dark:bg-default-100 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm  text-default-500 font-normal ">
                  Or continue with
                </div>
              </div>
              <div className="max-w-[242px] mx-auto mt-8 w-full">
                <Social locale="en" />
              </div>
              <div className="mx-auto font-normal text-default-500  2xl:mt-12 mt-6 uppercase text-sm text-center">
                Already registered?
                <Link
                  href="/"
                  className="text-default-900 font-medium hover:underline"
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
    </>
  );
};

export default Login3;
