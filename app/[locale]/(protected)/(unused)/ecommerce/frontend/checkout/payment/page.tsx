import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from '@/i18n/routing';
import { Icon } from "@/components/ui/icon";
import { Card } from "@/components/ui/card";
import { InputGroup, InputGroupButton } from "@/components/ui/input-group";
import { Input } from "@/components/ui/input";
import PaymentCard from "./payment-card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
const page = () => {
  return (
    <div className="card  rounded-sm p-5">
      <div className="grid grid-cols-12 gap-5">
        <div className="lg:col-span-7 col-span-12">
          <h3 className="text-default-900  font-medium  text-base  pb-3">
            Select a Payment Option
          </h3>
          <Card className="card border border-solid border-default-400  rounded-sm p-5">
            <div className="space-x-5 rtl:space-x-reverse">
              <PaymentCard />
            </div>
          </Card>
          <div className="flex items-center mt-3 space-x-2 rtl:space-x-reverse">
            <div className="text-base text-default-500 flex items-center">
              <Checkbox />
              <Label className="ps-2">
                <span>I agree to the</span>
                <span className="text-default-900 font-medium ps-2">
                  terms and conditions, Return Policy & Privacy Policy
                </span>
              </Label>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 col-span-12">
          <h3 className="text-default-900  font-medium  text-base  pb-3">
            Summary
          </h3>
          <div className="card border border-solid border-default-400 rounded-sm p-4">
            <div>
              <ul className="divide-y divide-default-300 pb-8">
                <li className=" text-xs  pb-3 ">
                  <div className="flex justify-between">
                    <p>Product</p>
                    <p>Total</p>
                  </div>
                </li>
                <li className=" text-sm  text-default-600  py-2 ">
                  <div className="flex justify-between gap-3 pb-1">
                    <p>
                      Black Tshirt
                      <span className=" text-default-800    font-medium px-2">
                        x
                      </span>
                      <span className=" text-default-800    font-medium">
                        3
                      </span>
                    </p>
                    <p className=" text-default-800    font-medium">$300</p>
                  </div>
                </li>

                <li className=" text-xs  py-2 ">
                  <div className="flex justify-between gap-3 ">
                    <p className=" text-default-900    font-medium">Total</p>
                    <p className=" text-default-800    font-medium">$200</p>
                  </div>
                </li>
              </ul>
              <InputGroup>
                <Input
                  type="text"
                  placeholder="Have coupon code? Apply here "
                />
                <InputGroupButton>
                  <Button size="md">Apply</Button>
                </InputGroupButton>
              </InputGroup>
            </div>
          </div>
        </div>
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
            <Link href="/ecommerce/frontend/checkout/delivery-info">
              Go Back
            </Link>
          </Button>
        </div>
        <div className="flex-none">
          <Button asChild>
            <Link href="/ecommerce/frontend/checkout/confirmation">Submit</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
