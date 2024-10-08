import React from "react";
import { getProducts } from "../../data";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Link } from '@/i18n/routing';
import { Icon } from "@/components/ui/icon";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { RadioItem } from "@radix-ui/react-dropdown-menu";

const page = async () => {
  const products = await getProducts();
  const items = products.slice(0, 3);
  return (
    <div className="card   rounded-sm p-5">
      <h3 className="text-default-800  font-semibold  text-base uppercase pb-3">
        Your Orders
      </h3>
      <div className=" border border-default-300 border-solid   rounded-sm p-5 space-y-4">
        {items?.map((item, i) => (
          <div
            className="flex sm:flex-col md:flex-row gap-3 items-center "
            key={i}
          >
            <div className="md:p-4 p-2 flex-none bg-default-200 dark:bg-default-900 rounded md:h-20 md:w-20 w-16 h-16 rtl:ml-3">
              <Image
                className="w-full h-full object-contain"
                src={item.img}
                alt={item.name}
                width={100}
                height={100}
              />
            </div>
            <div className="md:text-base text-sm">
              <p className="text-default-900   font-medium md:pb-2 pb-1 line-clamp-2">
                {item.name}
              </p>
              <p className="text-default-900   font-medium">
                <span className="text-default-500   font-normal mr-1">
                  Brand:
                </span>
                {item.brand}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className=" md:mt-10 mt-5 lg:flex lg:space-x-4 lg:space-y-0 space-y-5 items-center">
        <p className="text-base font-medium text-default-800  flex  flex-none  ">
          Choose Delivery Type
        </p>
        <RadioGroup
          default-value="home-delivery"
          className="md:space-x-5 md:space-y-0 space-y-3 rtl:space-x-reverse md:flex  justify-start lg:justify-end flex-1 md:text-base text-sm "
        >
          <Label className="inline-flex gap-2 items-center border border-default-900 dark:border-default-300  rounded py-3 lg:px-10 px-5 md:w-auto w-[200px] cursor-pointer ">
            <RadioGroupItem
              defaultChecked
              id="home-delivery"
              value="home-delivery"
            />
            <span className=" text-default-900 ">Home Delivery</span>
          </Label>
          <Label className="inline-flex gap-2 items-center border-solid border border-default-900 dark:border-default-300  rounded py-3 lg:px-10 px-5 md:w-auto w-[200px] cursor-pointer">
            <RadioGroupItem id="Unselected" value="Unselected" />
            <Dialog>
              <DialogTrigger asChild>
                <span className=" text-default-900 ">Local Pickup</span>
              </DialogTrigger>
              <DialogContent>
                <div className="space-y-5 px-4">
                  <Input
                    id="phone No"
                    type="text"
                    placeholder="Enter Pickup Address"
                    className="w-full"
                  />
                  <RadioGroup className="space-y-3">
                    <div className="card border dark:border-default-700 rounded-lg p-5">
                      <Label className="flex gap-1 items-center cursor-pointer">
                        <RadioGroupItem

                          value="B"
                          defaultChecked
                        />
                        <div className="space-y-1">
                          <p className="font-medium text-base rtl:text-right">
                            Mohakhali DOHS
                          </p>
                          <p className="font-normal text-sm text-default-500 flex items-center">
                            <Icon
                              icon="mi:location"
                              className="mr-1 rtl:ml-1"
                            />{" "}
                            House 395, Road 29, New Area
                          </p>
                          <p className="font-normal text-sm text-default-500 flex items-center">
                            <Icon
                              icon="solar:phone-outline"
                              className="mr-1 rtl:ml-1"
                            />
                            +880123456789
                          </p>
                        </div>
                      </Label>
                    </div>
                    <div className="card border dark:border-default-700 rounded-lg p-5">
                      <Label className="flex gap-1 items-center cursor-pointer">
                        <RadioGroupItem

                          value="A"
                        />
                        <div className="space-y-1">
                          <p className="font-medium text-base rtl:text-right">
                            Mohakhali DOHS
                          </p>
                          <p className="font-normal text-sm text-default-500 flex items-center">
                            <Icon
                              icon="mi:location"
                              className="mr-1 rtl:ml-1"
                            />{" "}
                            House 395, Road 29, New Area
                          </p>
                          <p className="font-normal text-sm text-default-500 flex items-center">
                            <Icon
                              icon="solar:phone-outline"
                              className="mr-1 rtl:ml-1"
                            />
                            +880123456789
                          </p>
                        </div>
                      </Label>
                    </div>
                    <div className="card border dark:border-default-700 rounded-lg p-5">
                      <Label className="flex gap-1 items-center cursor-pointer">
                        <RadioGroupItem
                          value="C"
                        />
                        <div className="space-y-1">
                          <p className="font-medium text-base rtl:text-right">
                            Mohakhali DOHS
                          </p>
                          <p className="font-normal text-sm text-default-500 flex items-center">
                            <Icon
                              icon="mi:location"
                              className="mr-1 rtl:ml-1"
                            />{" "}
                            House 395, Road 29, New Area
                          </p>
                          <p className="font-normal text-sm text-default-500 flex items-center">
                            <Icon
                              icon="solar:phone-outline"
                              className="mr-1 rtl:ml-1"
                            />
                            +880123456789
                          </p>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </DialogContent>
            </Dialog>
          </Label>
        </RadioGroup>
      </div>
      <div className="flex flex-wrap gap-2 md:mt-16 md:pb-14">
        <div className="flex-1">
          <Button asChild variant="outline">
            <Link href="/ecommerce/frontend">
              <Icon icon="ion:arrow-back-outline" className="me-1" />
              Add New Product
            </Link>
          </Button>
        </div>
        <div className="flex-none">
          <Button asChild disabled>
            <Link href="/ecommerce/frontend/checkout/shipping-info">
              Go Back
            </Link>
          </Button>
        </div>
        <div className="flex-none">
          <Button asChild>
            <Link href="/ecommerce/frontend/checkout/payment">
              {" "}
              Continue to shipping
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
