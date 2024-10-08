import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

const AddProduct = () => {
  return (
    <div className=" grid grid-cols-12  gap-4  rounded-lg">
      <div className="col-span-12 md:col-span-7 space-y-4 lg:col-span-7 ">
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Product Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center flex-wrap">
              <Label className="w-[150px] flex-none" htmlFor="h_Fullname">
                Product Name
              </Label>
              <Input id="h_Fullname" type="text" placeholder="Full name" />
            </div>

            <div className="flex items-center flex-wrap">
              <Label className="w-[150px] flex-none">Category</Label>
              <Select>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
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
              <Label className="w-[150px] flex-none">Brand</Label>
              <Select>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Select Brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Brand</SelectLabel>
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
              <Label className="w-[150px] flex-none" htmlFor="unit">
                Unit
              </Label>
              <Input
                id="unit"
                type="text"
                placeholder="Unit (e.g. KG, Pc etc)"
              />
            </div>

            <div className="flex items-center flex-wrap">
              <Label className="w-[150px] flex-none" htmlFor="weight">
                Label Wight (in kg)
              </Label>
              <Input id="weight" type="text" placeholder="0.00" />
            </div>

            <div className="flex items-center flex-wrap">
              <Label className="w-[150px] flex-none" htmlFor="qty">
                Minimum Purchase Qty
              </Label>
              <Input id="qty" type="text" placeholder="1" />
            </div>

            <div className="flex items-center flex-wrap">
              <Label className="w-[150px] flex-none" htmlFor="tags">
                Tags
              </Label>
              <Input
                id="tags"
                type="text"
                placeholder="Type & hit enter to add a tag"
              />
            </div>

            <div className="flex items-center flex-wrap">
              <Label className="w-[150px] flex-none" htmlFor="brcode">
                Barcode
              </Label>
              <Input id="brcode" type="text" placeholder="Code" />
            </div>
            <div className="flex items-center flex-wrap gap-10">
              <Label className="flex-none w-[132px] ">Refundable</Label>
              <div className="flex-1">
                <Switch color="success" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Product Images</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <Label className="inline-flex text-sm font-normal ">
                Gallery Images (600 X 600)
              </Label>
              <div className="flex-1">
                <Input
                  className="read-only:leading-0 py-1.5 h-full ps-0"
                  type="file"
                />
              </div>
            </div>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <Label className="inline-flex text-sm font-normal ">
                Thumb Images (600 X 600)
              </Label>
              <div className="flex-1">
                <Input
                  className="read-only:leading-0 py-1.5 h-full ps-0"
                  type="file"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Product Variation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center flex-wrap">
              <Label className="w-[132px]">Color</Label>
              <Select>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Select Color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Color</SelectLabel>
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
              <Label className="w-[132px]">Attributes</Label>
              <Select>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Select Attributes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Attributes</SelectLabel>
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
              <Label className="w-[132px]">Size</Label>
              <Select>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Select Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Size</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Product Description</CardTitle>
          </CardHeader>
          <CardContent className="flex">
            <Label className="w-[130px] flex-none">Description</Label>
            <Textarea id="pn4" placeholder="Some product description..." />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>PDF Specification</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-10 rtl:space-x-reverse">
              <Label className="inline-flex text-sm font-normal">
                Add PDF File
              </Label>
              <div className="flex-1">
                <Input
                  className="read-only:leading-0 py-1.5 h-full ps-0"
                  type="file"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>SEO Meta Tags</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex">
              <Label className="w-[130px]">Meta Title</Label>
              <Input id="meta_title" type="text" placeholder="Title" />
            </div>

            <div className="flex">
              <Label className="w-[130px]">Description</Label>
              <Textarea
                id="pn4"
                placeholder="Write something for your product seo"
              />
            </div>
            <div className="flex items-center ">
              <Label className="flex-none w-[130px] ">Meta Image</Label>
              <Input
                className="read-only:leading-0 py-1.5 h-full ps-0"
                type="file"
              />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-12 md:col-span-5 space-y-4 lg:col-span-5">
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Shipping Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <Label>Free Shipping</Label>
              <div>
                <Switch color="success" />
              </div>
            </div>
            <div className="flex justify-between">
              <Label>Flat Rate</Label>
              <div>
                <Switch color="success" />
              </div>
            </div>
            <div className="flex justify-between">
              <Label>Is Product Quantity Multiply</Label>
              <div>
                <Switch color="success" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Low Stock Quantity Warning</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center">
            <Label className="w-[130px] flex-none">Quantity</Label>
            <Input id="qty_warning" type="text" placeholder="1" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Stock Visibility State</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <Label className="text-sm font-normal">Show Stock Quantity</Label>
              <div>
                <Switch color="success" />
              </div>
            </div>
            <div className="flex justify-between">
              <Label className="text-sm font-normal">
                Show Stock With Text Only
              </Label>
              <div>
                <Switch color="success" />
              </div>
            </div>
            <div className="flex justify-between">
              <Label className="text-sm font-normal">Hide Stock</Label>
              <div>
                <Switch color="success" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Cash On Delivery</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <Label className="text-sm font-normal">Status</Label>
              <div>
                <Switch color="success" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Featured</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <Label className="text-sm font-normal">Status</Label>
              <div>
                <Switch color="success" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Todays Deal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <Label className="text-sm font-normal">Status</Label>
              <div>
                <Switch color="success" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Flash Deal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <Label className="w-[150px] flex-none">Category</Label>
              <Select>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center">
              <Label className="w-[150px] flex-none">Discount</Label>
              <Input id="discount" type="text" placeholder="0" />
            </div>

            <div className="flex items-center">
              <Label className="w-[150px] flex-none">Type</Label>
              <Select>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Type</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Estimate Shipping Time</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center">
            <Label className="w-[150px] flex-none">LabelShipping Days</Label>
            <Input id="shipping_days" type="text" placeholder="07" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Estimate Shipping Tax</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="flex items-center">
                <Label className="flex-none w-10">VAT</Label>
                <Input
                  className="inline-flex"
                  id="vat"
                  type="text"
                  placeholder="00"
                />
              </div>
              <div className="flex-1">
                <Select>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Flat" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Flat</SelectLabel>
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
            <div className="flex gap-4">
              <div className="flex items-center">
                <Label className="flex-none w-10">TAX</Label>
                <Input type="text" placeholder="00" />
              </div>
              <div className="flex-1">
                <Select>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Percent" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Percent</SelectLabel>
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
        </Card>
      </div>
      <div className="col-span-12 flex justify-end">
        <Button>Save Product</Button>
      </div>
    </div>
  );
};

export default AddProduct;
