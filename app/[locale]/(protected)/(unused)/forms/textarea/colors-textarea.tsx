
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

export default ColorsTextarea;