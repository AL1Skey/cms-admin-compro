
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button'
const HorizontalForm = () => {
  return (
    <form>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[160px]">Full Name</Label>
          <Input type="text" placeholder="Your Name" id="hrFullName2" />
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
          <Label htmlFor="hrEmail2" className="lg:min-w-[160px]">Email </Label>
          <Input type="email" placeholder="Your Email" id="hrEmail2" />
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
          <Label htmlFor="hrPhone2" className="lg:min-w-[160px]">Phone</Label>
          <Input type="number" placeholder="Your Number" id="hrPhone2" />
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
          <Label htmlFor="hrPassword2" className="lg:min-w-[160px]">Password</Label>
          <Input type="password" placeholder="Your Password" id="hrPassword2" />
        </div>
        <div className="col-span-2 lg:pl-[160px]">
          <div className="flex lg:items-center gap-1.5">
            <Checkbox id="term5" />
            <Label
              htmlFor="term5"
            >
              Remember me
            </Label>
          </div>
        </div>
        <div className="col-span-2 lg:pl-[160px] mt-2">
          <Button type="submit">Submit</Button>
        </div>
      </div>

    </form>
  );
};

export default HorizontalForm;