import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const MultipleFiles = () => {
  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="multiple">Upload File</Label>
      <Input type="file" id="multiple" multiple/>
    </div>
  );
};

export default MultipleFiles;