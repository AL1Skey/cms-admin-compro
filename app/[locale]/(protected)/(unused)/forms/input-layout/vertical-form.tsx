"use client"
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button'
const VerticalForm = () => {
  return (
    <form>
      <div className="space-y-4">

        <div className="space-y-2">
          <Label htmlFor="fullName5">Full Name</Label>
          <Input type="text" placeholder="Your Name" id="fullName5" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email5">Email</Label>
          <Input type="email" placeholder="Your Email" id="email5" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phoneNumber5">Phone</Label>
          <Input type="number" placeholder="Your Number" id="phoneNumber5" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password5">Password</Label>
          <Input type="password" placeholder="Type Password" id="password5" />
        </div>
        <div className="flex items-center gap-1.5">
          <Checkbox id="term3" />
          <Label
            htmlFor="term3"
            className="text-base text-muted-foreground font-normal"
          >
            Remember Me
          </Label>
        </div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default VerticalForm;