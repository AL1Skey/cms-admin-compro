import React from "react";
import { Icon } from "@/components/ui/icon";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from '@/i18n/routing';
const page = () => {
  return (
    <div>
      <div className="">
        <RadioGroup className=" rounded p-5 space-y-5">
          <Label className=" border border-default-300 border-solid rounded p-5 cursor-pointer">
            <div className="flex  gap-2 ">
              <RadioGroupItem defaultChecked id="no1" value="no1" />
              <div className="flex -mt-1 gap-5">
                <div className="  min-w-[110px] md:text-base text-sm text-default-500 space-y-1.5 ">
                  <p>Address:</p>
                  <p>Postal Code:</p>
                  <p>City:</p>
                  <p>State:</p>
                  <p>Country:</p>
                  <p>Phone No:</p>
                </div>
                <div className="  md:text-base text-sm text-default-900 space-y-1.5 ">
                  <p>395/B Dashcode Tower, Road 29, Mohakhali DOHS</p>
                  <p>1206</p>
                  <p>Mohakhali</p>
                  <p>Dhaka</p>
                  <p>Bangladesh:</p>
                  <p>9876543201</p>
                </div>
              </div>
            </div>
          </Label>
          <Label className=" border border-default-300 border-solid rounded p-5 cursor-pointer">
            <div className="flex gap-2 ">
              <RadioGroupItem id="no2" value="no2" />
              <div className="flex -mt-1 gap-5">
                <div className="min-w-[110px] md:text-base text-sm text-default-500 space-y-1.5">
                  <p>Address:</p>
                  <p>Postal Code:</p>
                  <p>City:</p>
                  <p>State:</p>
                  <p>Country:</p>
                  <p>Phone No:</p>
                </div>
                <div className="  md:text-base text-sm text-default-900 space-y-1.5 ">
                  <p>395/B Dashcode Tower, Road 29, Mohakhali DOHS</p>
                  <p>1206</p>
                  <p>Mohakhali</p>
                  <p>Dhaka</p>
                  <p>Bangladesh:</p>
                  <p>9876543201</p>
                </div>
              </div>
            </div>
          </Label>
        </RadioGroup>

        <Dialog>
          <DialogTrigger asChild>
            <button className="w-full flex flex-col justify-center items-center font-normal text-default-800 p-5 space-y-3 border rounded bg-default-100 ">
              <Icon icon="ic:round-plus" className="h-6 w-6" />
              <span>Add New Address</span>
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Default</DialogTitle>
            </DialogHeader>
            <DialogDescription className="pb-8">
              <ScrollArea className="h-[350px]">
                <form className="space-y-4 px-3">
                  <div className="space-y-2">
                    <Label htmlFor="Address"> Address</Label>
                    <Textarea id="Address" placeholder="Your Address" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="Country"> Country</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Country</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="State"> State</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a State" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>State</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="City">City</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a City" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>City</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="h_Fullname">Full Name</Label>
                    <Input
                      id="h_Fullname"
                      type="text"
                      placeholder="Your Postal Code"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone No</Label>
                    <Input id="phone" type="text" placeholder="+880" />
                  </div>
                </form>
              </ScrollArea>
            </DialogDescription>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" color="warning">
                  Close
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button>Save</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
            <Link href="/ecommerce/frontend/checkout/cart">Go Back</Link>
          </Button>
        </div>
        <div className="flex-none">
          <Button asChild>
            <Link href="/ecommerce/frontend/checkout/delivery-info">
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
