import { Input } from "@/components/ui/input";

const InputColors = () => {
  return (
    <div className="space-y-3">
      <Input placeholder="Default" />
      <Input placeholder="Primary" color="primary" />
      <Input placeholder="Secondary" color="secondary" />
      <Input placeholder="Info" color="info" />
      <Input placeholder="Warning" color="warning" />
      <Input placeholder="Success" color="success" />
      <Input placeholder="Destructive" color="destructive" />
    </div>
  );
};

export default InputColors;