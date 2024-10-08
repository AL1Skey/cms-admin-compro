import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Repeater from "@/components/form/repeater";
import Picker from "./picker";

const InvoiceEditPage = () => {
  return (
    <div>
      <Card>
        <CardHeader className="border-0 border-b border-default-200 border-solid">
          <CardTitle className="text-default-900 font-medium">
            Update invoice
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <h4 className="text-default-900  text-xl mb-4">#89572935Kh</h4>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div className="lg:col-span-2 col-span-1 text-default-900 text-base font-medium">
                Recipient info
              </div>
              <div className="space-y-2">
                <label htmlFor="default-picker" className=" form-label">
                  Issued Date
                </label>
                <Picker />
              </div>

              <div className="space-y-2">
                <Label htmlFor="name1">Name</Label>
                <Input id="name1" type="text" placeholder="Add your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone1">Phone</Label>
                <Input id="phone1" type="text" placeholder="Add your phone" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email1">Email</Label>
                <Input id="email1" type="email" placeholder="Add your email" />
              </div>
              <div className="lg:col-span-2 col-span-1 space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" is="textarea" placeholder="address" />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 space-y-2">
              <div className="lg:col-span-2 col-span-1 text-default-900 text-base  font-medium">
                Owner info-500
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Add your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="text" placeholder="Add your phone" />
              </div>
              <div className="lg:col-span-2 col-span-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Add your email" />
              </div>

              <div className="lg:col-span-2 col-span-1 space-y-2">
                <Label htmlFor="address2">Address</Label>
                <Textarea id="address2" is="textarea" placeholder="address" />
              </div>
            </div>
          </div>
          <div className="my-6">
            <Repeater />
          </div>

          <div className="space-y-2">
            <Label htmlFor="additional-name">Additional note</Label>
            <Textarea
              id="additional-name"
              placeholder="Note"
              className="lg:w-1/2"
            />
          </div>
          <div className="text-right  mt-7">
            <Button>Save</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvoiceEditPage;
