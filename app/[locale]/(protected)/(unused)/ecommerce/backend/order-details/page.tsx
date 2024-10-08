import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TotalTable from "./totaltable";
import Logo from "@/components/logo";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const OrderDetails = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Update</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center flex-wrap">
            <Label className="w-[150px] flex-none">Assign Deliver Boy:</Label>
            <Select>
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Select Deliver Boy:" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Deliver Boy:</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center flex-wrap">
            <Label className="w-[150px] flex-none">Payment Status:</Label>
            <Select>
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Select Payment Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Payment Status</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center flex-wrap">
            <Label className="w-[150px] flex-none">Delivery Status:</Label>
            <Select>
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Select Delivery Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Delivery Status</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center flex-wrap">
            <Label className="w-[150px] flex-none">Tracking Code (optional):</Label>
            <Select>
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Select Tracking Code (optional)" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Tracking Code (optional)</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardHeader className="border-0">
        <div className="flex justify-between  flex-wrap gap-4 items-center">
          <div>
            <span className="block text-default-900 font-medium leading-5 text-xl">
              Bill to:
            </span>

            <div className="text-default-500 font-normal leading-5 mt-4 text-sm">
              Annette black-500 <br />
              4140 Parker Rd. Allentown, New <br />
              Mexico 31134
              <div className="flex space-x-2 mt-2 leading-[1] rtl:space-x-reverse">
                <Icon icon="heroicons-outline:phone" />
                <span>(252) 555-0126,(201) 555-0124</span>
              </div>
              <div className="mt-[6px] flex space-x-2 leading-[1] rtl:space-x-reverse">
                <Icon icon="heroicons-outline:mail" />
                <span>Dashcode@example.com</span>
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="text-default-600 font-medium text-xs uppercase">
              Order Id: 22332285 - 33221144
            </h4>

            <h4 className="text-default-600 font-medium text-xs uppercase">
              Order Date: July 07, 2023. 09:36 AM
            </h4>
            <h4 className="text-default-600 font-medium text-xs uppercase">
              Payment Method: Cash On Delivery
            </h4>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="border border-solid border-default-400 rounded-md overflow-hidden">
          <TotalTable />
        </div>
        <div className="col-span-12 flex justify-end mt-10">
          <Button variant="soft" color="default" size="md">
            Print
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderDetails;
