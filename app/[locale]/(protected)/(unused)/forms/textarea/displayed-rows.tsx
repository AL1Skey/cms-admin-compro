import { Label } from "@/components/ui/label";
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

export default DisplayedRows;