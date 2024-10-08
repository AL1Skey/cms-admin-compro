import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const HorizontalLabel = () => {
  return (
    <div className="flex flex-col md:flex-row lg:gap-10 gap-4 md:items-center">
      <Label htmlFor="message">Your Message</Label>
      <Textarea id="message" placeholder="Type Message..." />
    </div>
  );
};

export default HorizontalLabel;