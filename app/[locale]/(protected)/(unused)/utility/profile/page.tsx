import { Icon } from "@/components/ui/icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Link } from '@/i18n/routing';
import AreaChart from "./area-chart";
import SiteBreadcrumb from "@/components/site-breadcrumb";
const profile = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="space-y-5 ">
        <Card className=" p-6 pb-10 md:pt-[84px] pt-10 rounded-lg  lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]">
          <div className="bg-default-900 dark:bg-default-400 absolute left-0 top-0 md:h-1/2 h-[150px] w-full z-[-1] rounded-t-lg"></div>
          <div className="profile-box flex-none md:text-start text-center">
            <div className="md:flex items-end md:space-x-6 rtl:space-x-reverse">
              <div className="flex-none">
                <div className="md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 dark:ring-default-700 ring-default-50 relative">
                  <Image
                    width={300}
                    height={300}
                    src="/images/users/user-1.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                  <Link
                    href="#"
                    className="absolute right-2 h-8 w-8 bg-default-50 text-default-600 rounded-full shadow-sm flex flex-col items-center justify-center md:top-[140px] top-[100px]"
                  >
                    <Icon icon="heroicons:pencil-square" />
                  </Link>
                </div>
              </div>
              <div className="flex-1">
                <div className="text-2xl font-medium text-default-900  mb-[3px]">
                  Albert Flores
                </div>
                <div className="text-sm font-light text-default-600 ">
                  Front End Developer
                </div>
              </div>
            </div>
          </div>

          <div className="profile-info-500 md:flex md:text-start text-center flex-1 max-w-[516px] md:space-y-0 space-y-4">
            <div className="flex-1">
              <div className="text-base text-default-900  font-medium mb-1">
                $32,400
              </div>
              <div className="text-sm text-default-600 font-light ">
                Total Balance
              </div>
            </div>

            <div className="flex-1">
              <div className="text-base text-default-900  font-medium mb-1">
                200
              </div>
              <div className="text-sm text-default-600 font-light ">
                Board Card
              </div>
            </div>

            <div className="flex-1">
              <div className="text-base text-default-900 font-medium mb-1">
                3200
              </div>
              <div className="text-sm text-default-600 font-light">
                Calender Events
              </div>
            </div>
          </div>
        </Card>
        <div className="grid grid-cols-12 gap-6">
          <div className="lg:col-span-4 col-span-12">
            <Card title="Info">
              <CardHeader className="border-b">
                <CardTitle className="text-xl font-normal">Info</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="list space-y-8">
                  <li className="flex space-x-3 rtl:space-x-reverse">
                    <div className="flex-none text-2xl text-default-600 ">
                      <Icon icon="heroicons:envelope" />
                    </div>
                    <div className="flex-1">
                      <div className="uppercase text-xs text-default-500  mb-1 leading-[12px]">
                        EMAIL
                      </div>
                      <a
                        href="mailto:someone@example.com"
                        className="text-base text-default-600 "
                      >
                        info@dashcode.com
                      </a>
                    </div>
                  </li>

                  <li className="flex space-x-3 rtl:space-x-reverse">
                    <div className="flex-none text-2xl text-default-600 ">
                      <Icon icon="heroicons:phone-arrow-up-right" />
                    </div>
                    <div className="flex-1">
                      <div className="uppercase text-xs text-default-500  mb-1 leading-[12px]">
                        PHONE
                      </div>
                      <a
                        href="tel:0189749676767"
                        className="text-base text-default-600 "
                      >
                        +1-202-555-0151
                      </a>
                    </div>
                  </li>

                  <li className="flex space-x-3 rtl:space-x-reverse">
                    <div className="flex-none text-2xl text-default-600">
                      <Icon icon="heroicons:map" />
                    </div>
                    <div className="flex-1">
                      <div className="uppercase text-xs text-default-500 mb-1 leading-[12px]">
                        LOCATION
                      </div>
                      <div className="text-base text-default-600 ">
                        Home# 320/N, Road# 71/B, Mohakhali, Dhaka-1207,
                        Bangladesh
                      </div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-8 col-span-12">
            <Card title="Info">
              <CardHeader className="border-b">
                <CardTitle className="text-xl font-normal">
                  User Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <AreaChart height={190} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
