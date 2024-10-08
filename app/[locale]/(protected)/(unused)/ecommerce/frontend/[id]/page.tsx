import { Alert } from "@/components/ui/alert";
import { getProductById } from "../data";

import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import CounterButton from "../counter-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ColorFilter from "./color-filter";
import SizeFilter from "./size-filter";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import ThumbSliderCom from "./thumb-slider";
import ProductCounterButton from "@/components/ecommarce/product-counter-button";

const ProductDetails = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const product = await getProductById(id);

  if (!product)
    return <Alert color="destructive"> project id is not valid</Alert>;

  const lists = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];
  const lists1 = [
    {
      id: 1,
      text: "Brand : Easy",
    },
    {
      id: 2,
      text: "Material : Cotton",
    },
    {
      id: 3,
      text: "Material : Cotton",
    },
    {
      id: 4,
      text: "Pattern : Solid Color",
    },
    {
      id: 5,
      text: "Collar : Square Neck",
    },
    {
      id: 6,
      text: "Color : As given picture",
    },
    {
      id: 7,
      text: "Sleeve Length : Long Sleeve",
    },
  ];
  const lists2 = [
    {
      id: 1,
      text: "Plate Type : Slim",
    },
    {
      id: 2,
      text: "Sales Channel Type : E-commerce Only Sells Online",
    },
    {
      id: 3,
      text: "Material Composition : 100% Cotton",
    },
    {
      id: 4,
      text: "Size : M,L,XL",
    },
    {
      id: 5,
      text: 'M- long: 29", body: 40"',
    },
    {
      id: 6,
      text: 'L- long: 30 ", body: 42"',
    },
    {
      id: 7,
      text: 'XL- long: 31", body: 44"',
    },
  ];

  return (
    <div className="w-full bg-default-50  p-6 rounded-lg">
      <div className="pb-5">
        <div className="grid grid-cols-12  md:gap-4 md:space-y-0 space-y-4 sm:space-y-4 ">
          <div className=" col-span-12 md:col-span-5 lg:col-span-4 space-y-4 ">
            <ThumbSliderCom product={product} />
          </div>
          <div className="col-span-12 md:col-span-7 lg:col-span-8 space-y-2 ">
            <div className="space-y-2">
              <h1 className="text-default-900 text-xl lg:text-2xl font-medium ">
                {product?.name}
              </h1>
              <p className="flex items-center text-default-900  font-normal text-sm lg:text-base gap-1.5">
                <Icon icon="ph:star-fill" className="text-yellow-400" />
                <Icon icon="ph:star-fill" className="text-yellow-400" />
                <Icon icon="ph:star-fill" className="text-yellow-400" />
                <Icon icon="ph:star-fill" className="text-yellow-400" />
                <Icon icon="ph:star-fill" className="text-default-300/80" />
                <span className="ltr:pl-2 rtl:pr-2 text-default-500 ">
                  (789 reviews)
                </span>
              </p>
              <div className="flex items-center gap-2">
                <p className="font-normal text-sm lg:text-base text-default-500  ">
                  Brand:
                </p>
                <p className="font-medium text-sm lg:text-base text-default-900 ">
                  {product.brand}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-normal text-sm lg:text-base text-default-500  ">
                  Available:
                </p>
                <p className="font-medium text-sm lg:text-base text-default-900 ">
                  In Stock
                </p>
              </div>
              <p className="font-normal text-sm lg:text-base text-default-500 ">
                {product?.desc}
              </p>
            </div>
            <div className="pb-1">
              <ColorFilter />
              <SizeFilter />
            </div>
            <div className="w-full border-t border-default-300 border-solid "></div>

            <div className="overflow-x-auto ">
              <div className="inline-block max-w-full align-middle">
                <div className="overflow-hidden ">
                  <table className="min-w-full   ">
                    <tbody className="bg-default-50   ">
                      <tr className="space-x-6 rtl:space-x-reverse">
                        <td className="table-td py-2 pl-0 rtl:pr-0 font-normal text-sm lg:text-base text-default-500   ">
                          Price:
                        </td>
                        <td className="table-td py-2 space-x-2">
                          <span className="text-default-900 font-semibold	text-base lg:text-xl">
                            ${product?.price}
                          </span>
                          <del className="text-default-500  font-semibold text-base lg:text-xl ">
                            {product.oldPrice}
                          </del>
                          <Badge className=" font-normal text-[10px] bg-destructive text-white ">
                            <span>40%</span>
                          </Badge>
                        </td>
                      </tr>
                      <tr className="space-x-1 rtl:space-x-reverse">
                        <td className="table-td py-2 pl-0 rtl:pr-0 font-normal text-sm lg:text-base text-default-500   ">
                          Quantity:
                        </td>
                        <td className="table-td py-2 ">
                          <ProductCounterButton />
                        </td>
                      </tr>
                      <tr className="space-x-1 rtl:space-x-reverse">
                        <td className="table-td py-2 pl-0 rtl:pr-0 font-normal text-sm lg:text-base text-default-500   ">
                          Total Price:
                        </td>
                        <td className="table-td py-2 text-default-900 font-semibold	text-base lg:text-xl ">
                          $336
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pb-5">
              <Button size="md" variant="outline">
                <Icon
                  icon="eva:shopping-cart-fill"
                  className="w-4 h-4 me-2  text-sm leading-none"
                />
                Add to Cart
              </Button>
              <Button size="md" variant="outline">
                Buy Now
              </Button>
              <Button size="md" variant="outline">
                <Icon
                  icon="octicon:heart-16"
                  className="w-4 h-4 text-sm leading-none"
                />
              </Button>
              <Button size="md">
                <Icon
                  icon="eva:repeat-fill"
                  className="w-4 h-4 text-sm leading-none"
                />
              </Button>
            </div>
            <div className="flex gap-3 ">
              <p className="font-normal text-sm lg:text-base text-default-500 ">
                Share to:
              </p>
              <div className="flex items-center gap-3 ">
                <button
                  type="button"
                  className="border border-solid p-2 rounded h-8 w-8 flex justify-center items-center"
                >
                  <Image
                    height={500}
                    width={500}
                    className="w-full h-full"
                    src="/images/e-commerce/productDetails/gmail.svg"
                    alt=""
                  />
                </button>
                <button
                  type="button"
                  className="border border-solid p-2 rounded h-8 w-8 flex justify-center items-center"
                >
                  <Image
                    height={500}
                    width={500}
                    className="w-full h-full"
                    src="/images/e-commerce/productDetails/facebook.svg"
                    alt=""
                  />
                </button>
                <button
                  type="button"
                  className="border border-solid p-2 rounded h-8 w-8 flex justify-center items-center"
                >
                  <Image
                    height={500}
                    width={500}
                    className="w-full h-full"
                    src="/images/e-commerce/productDetails/twitter.svg"
                    alt=""
                  />
                </button>
                <button
                  type="button"
                  className="border border-solid p-2 rounded h-8 w-8 flex justify-center items-center"
                >
                  <Image
                    height={500}
                    width={500}
                    className="w-full h-full"
                    src="/images/e-commerce/productDetails/insta.svg"
                    alt=""
                  />
                </button>
                <button
                  type="button"
                  className="border border-solid p-2 rounded h-8 w-8 flex justify-center items-center"
                >
                  <Image
                    height={500}
                    width={500}
                    className="w-full h-full"
                    src="/images/e-commerce/productDetails/linkedin.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <div className="border border-solid border-1  rounded">
          <Card>
            <CardContent>
              <Tabs defaultValue="description">
                <TabsList className="lg:space-x-8 md:space-x-4 space-x-0 rtl:space-x-reverse">
                  <TabsTrigger
                    className="text-lg text-default-900 border-solid  border-b-2 border-transparent data-[state=active]:bg-transparent data-[state=active]:text-default data-[state=active]:shadow-none data-[state=active]:border-default-800 transition-all duration-200"
                    value="description"
                  >
                    Description
                  </TabsTrigger>
                  <TabsTrigger
                    className="text-lg text-default-900 border-solid  border-b-2 border-transparent data-[state=active]:bg-transparent data-[state=active]:text-default data-[state=active]:shadow-none data-[state=active]:border-default-800 transition-all duration-200"
                    value="information"
                  >
                    Additional Information
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="description">
                  <div className="text-default-600  text-sm lg:text-base font-normal">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna. Lorem ipsum dolor sit amet, consetetur sadipscing
                      elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                      dolore magna. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna.
                    </p>
                    <ul className="space-y-3 p-6 lg:ml-28 ml-14 rounded-md bg-default-white ">
                      {lists.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm lg:text-base text-default-600  flex gap-2 items-center"
                        >
                          <span className="h-[10px] w-[10px] bg-default-900 rounded-full inline-block"></span>
                          <span>Lorem ipsum dolor sit amet.</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-default-600  text-sm lg:text-base font-normal">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna. Lorem ipsum dolor sit amet, consetetur sadipscing
                      elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                      dolore magna. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="information">
                  <div className="text-default-600  text-sm font-normal">
                    <div className="flex justify-between items-start pb-4">
                      <ul className="space-y-3 rounded-md bg-trasparent  ">
                        {lists1.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm lg:text-base text-default-600  flex gap-2 items-center"
                          >
                            <span className="h-[10px] w-[10px] bg-default-900 rounded-full inline-block"></span>
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-3 rounded-md bg-trasparent ">
                        {lists2.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm lg:text-base text-default-600  flex gap-2 items-center"
                          >
                            <span className="h-[10px] w-[10px] bg-default-900 rounded-full inline-block"></span>
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-default-600  text-sm lg:text-base font-normal">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna. Lorem ipsum dolor sit amet, consetetur sadipscing
                      elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                      dolore magna. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        <div className="border border-solid border-1  rounded p-6">
          <h6 className="text-default-900 pb-6 text-lg lg:text-xl">
            Reviews & Ratings
          </h6>
          <div className="space-y-12">
            <div className="bg-default-200  p-6 rounded grid grid-cols-12 	">
              <div className="col-span-12 items-center md:col-span-6 flex gap-3 justify-center md:justify-start  order-2 md:order-1 mt-3 md:mt-0">
                <div className="font-medium items-center flex ">
                  <p className="text-default-900 text-base lg:text-lg">4.2</p>
                  <p className="text-default-500  text-sm lg:text-base">/5</p>
                </div>
                <div className="flex items-center md:justify-start text-default-900 font-normal text-sm lg:text-base">
                  <div className="flex items-center gap-1.5">
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-default-300/80" />
                  </div>
                  <div className=" text-default-500 ">(789 reviews)</div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end items-center order-1 md:order-2">
                <button
                  type="button"
                  className="bg-yellow-500 text-white rounded px-6 py-3 text-sm lg:text-base"
                >
                  Rate this product
                </button>
              </div>
            </div>
            <div className="flex gap-3 ">
              <Avatar>
                <AvatarImage src="/images/e-commerce/productDetails/1.png" />
              </Avatar>
              <div>
                {" "}
                <div>
                  <p className="text-default-900  font-medium text-sm lg:text-base pb-1">
                    Devied Beakhum
                  </p>
                  <p className="text-default-500  font-normal text-xs  pb-1">
                    08-03-2023
                  </p>
                  <p className="flex items-center text-default-900  font-normal text-sm lg:text-base gap-1.5 pb-3">
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                  </p>
                  <p className="pb-4 text-sm  lg:text-base text-default-500 ">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna. Lori ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt.
                  </p>
                  <div className="flex gap-2 pb-3">
                    <p className="font-normal text-sm lg:text-base text-default-500 ">
                      Info:
                    </p>
                    <p className="font-medium text-sm lg:text-base text-success ">
                      Verified Purchase
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 ">
                  <div className="col-span-12 flex justify-end gap-4">
                    <p className="flex items-center gap-2 ">
                      <span className="cursor-pointer ">
                        <Icon icon="heroicons:hand-thumb-up" />
                      </span>
                      <span>02</span>
                    </p>
                    <p className="flex items-center gap-2 ">
                      <span className="cursor-pointer ">
                        <Icon icon="carbon:reply" />
                      </span>
                      <span>00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 ">
              <Avatar>
                <AvatarImage src="/images/e-commerce/productDetails/1.png" />
              </Avatar>
              <div>
                {" "}
                <div>
                  <p className="text-default-900  font-medium text-sm lg:text-base pb-1">
                    Devied Beakhum
                  </p>
                  <p className="text-default-500  font-normal text-xs  pb-1">
                    08-03-2023
                  </p>
                  <p className="flex items-center text-default-900  font-normal text-sm lg:text-base gap-1.5 pb-3">
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                    <Icon icon="ph:star-fill" className="text-yellow-400" />
                  </p>
                  <p className="pb-4 text-sm lg:text-base text-default-500 ">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna. Lori ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt.
                  </p>
                  <div className="flex gap-3 pb-3">
                    <p className="font-normal text-sm lg:text-base text-default-500 ">
                      Info:
                    </p>
                    <p className="font-medium text-sm lg:text-base text-success ">
                      Verified Purchase
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className=" col-span-12 mb-3">
                    <div className="flex gap-3 mb-9">
                      <div className=" h-[90px] w-[90px] rounded bg-default-100 p-1 overflow-hidden ">
                        <Image
                          alt=""
                          height={300}
                          width={300}
                          className="h-full w-full object-contain"
                          src="/images/e-commerce/productDetails/1.png"
                        />
                      </div>
                      <div className=" h-[90px] w-[90px] rounded bg-default-100 overflow-hidden p-1">
                        <Image
                          alt=""
                          height={300}
                          width={300}
                          className="h-full w-full object-contain"
                          src="/images/e-commerce/productDetails/2.png"
                        />
                      </div>
                      <div className=" h-[90px] w-[90px] rounded bg-default-100 overflow-hidden p-1">
                        <Image
                          alt=""
                          height={300}
                          width={300}
                          className="h-full w-full object-contain"
                          src="/images/e-commerce/productDetails/3.png"
                        />
                      </div>
                    </div>
                    <div className=" max-h-[400px] max-w-[346px] rounded  bg-default-100 overflow-hidden p-1">
                      <Image
                        alt=""
                        height={300}
                        width={300}
                        className="h-full w-full object-contain"
                        src="/images/e-commerce/productDetails/3.png"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 flex justify-end gap-4">
                    <p className="flex items-center gap-2 ">
                      <span className="cursor-pointer ">
                        <Icon icon="heroicons:hand-thumb-up" />
                      </span>
                      <span>02</span>
                    </p>
                    <p className="flex items-center gap-2 ">
                      <span className="cursor-pointer ">
                        <Icon icon="carbon:reply" />
                      </span>
                      <span>00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
