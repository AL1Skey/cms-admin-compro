import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const BasicFileUploader = () => {
  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="file">Upload File</Label>
      <Input type="file" id="file"/>
    </div>
  );
};

export default BasicFileUploader;