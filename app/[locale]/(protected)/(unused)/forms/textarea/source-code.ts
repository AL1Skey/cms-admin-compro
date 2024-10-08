export const basicTextarea=`import { Label } from "@/components/ui/label";
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

export default BasicTextarea;`

export const colorsTextarea=`
import { Textarea } from "@/components/ui/textarea";

const ColorsTextarea = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
      <Textarea placeholder="Default Color..." />
      <Textarea placeholder="Prmary Color..." color="primary" />
      <Textarea placeholder="Secondary Color..." color="secondary" />
      <Textarea placeholder="Info Color..." color="info" />
      <Textarea placeholder="Warning Color..." color="warning" />
      <Textarea placeholder="Success Color..." color="success" />
      <Textarea placeholder="Destructive Color..." color="destructive" />
    </div>
  );
};

export default ColorsTextarea;`

export const displayedRows=`import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
const DisplayedRows = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="rows-3">3 Rows</Label>
        <Textarea placeholder="Type Here..." id="rows-3" rows={2} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="rows-5">5 Rows</Label>
        <Textarea placeholder="Type Here..." id="rows-5" rows={5} />
      </div>
    </div>
  );
};

export default DisplayedRows;`

export const horizontalLabel=`import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const HorizontalLabel = () => {
  return (
    <div className="flex flex-col md:flex-row lg:gap-10 gap-4 md:items-center">
      <Label htmlFor="message">Your Message</Label>
      <Textarea id="message" placeholder="Type Message..." />
    </div>
  );
};

export default HorizontalLabel;`