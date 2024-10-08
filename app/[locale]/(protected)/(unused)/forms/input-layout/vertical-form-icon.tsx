
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button'
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { Icon } from "@/components/ui/icon";

const VerticalFormWithIcon = () => {
  return (
    <form>
      <div className="space-y-4">

        <div className="space-y-2">
          <Label htmlFor="viFullName3">Full Name</Label>
          <InputGroup merged>
            <InputGroupText>
              <Icon icon="mdi:user" />
            </InputGroupText>
            <Input type="text" placeholder="Your name" id="viFullName3" />
          </InputGroup>
        </div>
        <div className="space-y-2">
          <Label htmlFor="viEmail3">Email</Label>
          <InputGroup merged>
            <InputGroupText>
              <Icon icon="ic:outline-email" />
            </InputGroupText>
            <Input type="email" placeholder="Your email" id="viEmail3" />
          </InputGroup>
        </div>
        <div className="space-y-2">
          <Label htmlFor="viPhone3">Phone</Label>
          <InputGroup merged className="flex">
            <InputGroupText>
              <Icon icon="tdesign:call" />
            </InputGroupText>
            <Input type="number" placeholder="Type number" id="viPhone3" />
          </InputGroup>
        </div>
        <div className="space-y-2">
          <Label htmlFor="viPassword3">Password</Label>
          <InputGroup merged>
            <InputGroupText>
              <Icon icon="material-symbols:lock-outline" />
            </InputGroupText>
            <Input type="password" placeholder="Type password" id="viPassword3" />
            <InputGroupText>
              <Icon icon="basil:eye-closed-solid" />
            </InputGroupText>
          </InputGroup>
        </div>
        <div className="col-span-2">
          <div className="flex items-center gap-1.5">
            <Checkbox id="term4" color="default" />
            <Label
              htmlFor="term4"
              className="text-base text-muted-foreground font-normal"
            >
              Remember Me
            </Label>
          </div>
        </div>
        <div className="col-span-2">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default VerticalFormWithIcon;