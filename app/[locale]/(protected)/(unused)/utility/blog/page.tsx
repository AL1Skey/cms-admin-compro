import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import Sidebar from "./sidebar";
import Image from "next/image";
import { Link } from '@/i18n/routing';
import SiteBreadcrumb from "@/components/site-breadcrumb";

const BlogPage = () => {
  return (
    <>
      <SiteBreadcrumb />
      <div className="flex flex-wrap gap-5 ">
        <div className="flex-none">
          <div className="lg:max-w-[360px]">
            <Sidebar />
          </div>
        </div>
        <div className="flex-1">
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
            <div className="xl:col-span-2 col-span-1">
              <Card className="overflow-hidden">
                <div className=" h-[248px] w-full mb-6 ">
                  <Image
                    src="/images/all-img/post-1.png"
                    alt=""
                    width={300}
                    height={300}
                    className=" w-full h-full  object-cover"
                  />
                </div>
                <CardContent>
                  <div className="flex justify-between mb-4">
                    <Link href="/blog-details">
                      <span className="inline-flex leading-5 text-default-500 text-sm font-normal">
                        <Icon
                          icon="heroicons-outline:calendar"
                          className="text-default-400 me-2 text-lg"
                        />
                        10/02/2021
                      </span>
                    </Link>
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <Link href="#">
                        <span className="inline-flex leading-5 text-default-500 text-sm font-normal">
                          <Icon
                            icon="heroicons-outline:chat"
                            className="text-default-400 me-2 text-lg"
                          />
                          3
                        </span>
                      </Link>
                      <Link href="#">
                        <span className="inline-flex leading-5 text-default-500 text-sm font-normal">
                          <Icon
                            icon="heroicons-outline:share"
                            className="text-default-400 me-2 text-lg"
                          />
                          4
                        </span>
                      </Link>
                    </div>
                  </div>
                  <h5 className=" text-default-900">
                    <Link href="blog-details">
                      At Healthcare you will be treated by caring
                    </Link>
                  </h5>
                  <div className="text-default-700 mt-4 space-y-4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.Lorem ipsum dolor sit amet,
                      consectetur adipiscing eli.
                    </p>
                    <Button variant="outline">Read more</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="overflow-hidden">
              <div className=" h-[248px] w-full mb-6 ">
                <Image
                  src="/images/all-img/post-1.png"
                  alt=""
                  className=" w-full h-full  object-cover"
                  width={300}
                  height={300}
                />
              </div>
              <CardContent>
                <div className="flex justify-between mb-4">
                  <div>
                    <h5 className=" text-default-900">
                      <Link href="#">Lorem ipsum</Link>
                    </h5>
                  </div>
                  <Link href="#">
                    <span className="inline-flex leading-5 text-default-500 text-sm font-normal">
                      <Icon
                        icon="heroicons-outline:calendar"
                        className="text-default-400 me-2 text-lg"
                      />
                      10/02/2021
                    </span>
                  </Link>
                </div>

                <div className="text-default-700 mt-4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="mt-4 space-x-4 rtl:space-x-reverse">
                    <Link href="#" className="text-sm font-medium underline">
                      Learn more
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className=" h-[248px] w-full mb-6 ">
                <Image
                  src="/images/all-img/post-1.png"
                  alt=""
                  className=" w-full h-full  object-cover"
                  width={300}
                  height={300}
                />
              </div>
              <CardContent>
                <div className="flex justify-between mb-4">
                  <div>
                    <h5 className=" text-default-900">
                      <Link href="#">Lorem ipsum</Link>
                    </h5>
                  </div>
                  <Link href="#">
                    <span className="inline-flex leading-5 text-default-500 text-sm font-normal">
                      <Icon
                        icon="heroicons-outline:calendar"
                        className="text-default-400 me-2 text-lg"
                      />
                      10/02/2021
                    </span>
                  </Link>
                </div>

                <div className="text-default-700 mt-4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="mt-4 space-x-4 rtl:space-x-reverse">
                    <Link href="#" className="text-sm font-medium underline">
                      Learn more
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className=" h-[248px] w-full mb-6 ">
                <Image
                  src="/images/all-img/post-1.png"
                  alt=""
                  className=" w-full h-full  object-cover"
                  width={300}
                  height={300}
                />
              </div>
              <CardContent>
                <div className="flex justify-between mb-4">
                  <div>
                    <h5 className=" text-default-900">
                      <Link href="#">Lorem ipsum</Link>
                    </h5>
                  </div>
                  <Link href="#">
                    <span className="inline-flex leading-5 text-default-500 text-sm font-normal">
                      <Icon
                        icon="heroicons-outline:calendar"
                        className="text-default-400 me-2 text-lg"
                      />
                      10/02/2021
                    </span>
                  </Link>
                </div>

                <div className="text-default-700 mt-4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="mt-4 space-x-4 rtl:space-x-reverse">
                    <Link href="#" className="text-sm font-medium underline">
                      Learn more
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className=" h-[248px] w-full mb-6 ">
                <Image
                  src="/images/all-img/post-1.png"
                  alt=""
                  className=" w-full h-full  object-cover"
                  width={300}
                  height={300}
                />
              </div>
              <CardContent>
                <div className="flex justify-between mb-4">
                  <div>
                    <h5 className=" text-default-900">
                      <Link href="#">Lorem ipsum</Link>
                    </h5>
                  </div>
                  <Link href="#">
                    <span className="inline-flex leading-5 text-default-500 text-sm font-normal">
                      <Icon
                        icon="heroicons-outline:calendar"
                        className="text-default-400 me-2 text-lg"
                      />
                      10/02/2021
                    </span>
                  </Link>
                </div>

                <div className="text-default-700 mt-4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="mt-4 space-x-4 rtl:space-x-reverse">
                    <Link href="#" className="text-sm font-medium underline">
                      Learn more
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
