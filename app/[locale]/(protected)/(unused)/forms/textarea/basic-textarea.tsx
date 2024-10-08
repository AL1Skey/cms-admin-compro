import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const BasicTextarea = () => {
  return (
    <div className="space-y-2.5">
      <div className="space-y-1.5">
        <Label htmlFor="basic-textarea">Basic</Label>
        <Textarea id="basic-textarea" placeholder="Basic" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="disabled-textarea">Disabled</Label>
        <Textarea id="disabled-textarea" placeholder="Disabled Textarea" disabled />
      </div>
      <div className="space-y-1.5">
        <Label>Readonly Textarea</Label>
        <Textarea
          defaultValue={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, commodi!"} readOnly={true}>
        </Textarea>
      </div>
    </div>
  );
};

export default BasicTextarea;