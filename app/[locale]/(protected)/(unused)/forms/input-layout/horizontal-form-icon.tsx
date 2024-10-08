
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button'
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { Icon } from "@/components/ui/icon";

const HorizontalFormWithIcon = () => {
  return (
    <form>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2  flex flex-col lg:items-center lg:flex-row lg:gap-0 gap-2">
          <Label htmlFor="hriFullName1" className="lg:min-w-[160px]">Full Name</Label>
          <InputGroup merged>
            <InputGroupText>
              <Icon icon="mdi:user" />
            </InputGroupText>
            <Input type="text" placeholder="Your name" id="hriFullName1" />
          </InputGroup>
        </div>
        <div className="col-span-2  flex flex-col lg:items-center lg:flex-row lg:gap-0 gap-2">
          <Label htmlFor="hriEmail1" className="lg:min-w-[160px]">Email</Label>
          <InputGroup merged>
            <InputGroupText>
              <Icon icon="ic:outline-email" />
            </InputGroupText>
            <Input type="email" placeholder="Your email" id="hriEmail1" />
          </InputGroup>
        </div>
        <div className="col-span-2  flex flex-col lg:items-center lg:flex-row lg:gap-0 gap-2">
          <Label htmlFor="hriPhone1" className="lg:min-w-[160px]">Phone</Label>
          <InputGroup merged className="flex">
            <InputGroupText>
              <Icon icon="tdesign:call" />
            </InputGroupText>
            <Input type="number" placeholder="Type number" id="hriPhone1" />
          </InputGroup>
        </div>
        <div className="col-span-2  flex flex-col lg:items-center lg:flex-row lg:gap-0 gap-2">
          <Label htmlFor="hriPassword1" className="lg:min-w-[160px]">Password</Label>
          <InputGroup merged>
            <InputGroupText>
              <Icon icon="material-symbols:lock-outline" />
            </InputGroupText>
            <Input type="password" placeholder="Type password" id="hriPassword1" />
            <InputGroupText>
              <Icon icon="basil:eye-closed-solid" />
            </InputGroupText>
          </InputGroup>
        </div>


        <div className="col-span-2 lg:pl-[160px]">
          <div className="flex lg:items-center gap-1.5">
            <Checkbox id="term6" />
            <Label
              htmlFor="term6"
              className="text-base text-muted-foreground font-normal"
            >
              Remember Me
            </Label>
          </div>
        </div>
        <div className="col-span-2 lg:pl-[160px]">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default HorizontalFormWithIcon;