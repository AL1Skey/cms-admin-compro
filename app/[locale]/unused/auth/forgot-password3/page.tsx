import { Link } from '@/i18n/routing';
import ForgotPass from "@/components/partials/auth/forgot-pass";
import Logo from "@/components/logo";

const ForgotPass3 = () => {
  return (
    <div
      className="flex w-full items-center overflow-hidden min-h-dvh h-dvh basis-full bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(/images/all-img/login-bg.png)`,
      }}
    >
      <div className="overflow-y-auto flex flex-wrap w-full h-dvh">
        <div
          className="lg:block hidden flex-1 overflow-hidden text-[40px] leading-[48px] text-default-600 
s lg:w-1/2"
        >
          <div className="flex justify-center items-center min-h-screen">
            <Link href="/" className="">
              <Logo />
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
              <h4 className="font-medium mb-4">Forgot Your Password?</h4>
              <div className="text-default-500  text-base">
                Reset Password with Dashcode.
              </div>
            </div>
            <div className="font-normal text-base text-default-500  text-center px-2 bg-default-100 rounded py-3 mb-4 mt-10">
              Enter your Email and instructions will be sent to you!
            </div>

            <ForgotPass />
            <div className="md:max-w-[345px] mx-auto font-normal text-default-500  2xl:mt-12 mt-8 uppercase text-sm">
              Forget It,
              <Link
                href="/"
                className="text-default-900  font-medium hover:underline"
              >
                Send me Back
              </Link>
              to The Sign In
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

export default ForgotPass3;
