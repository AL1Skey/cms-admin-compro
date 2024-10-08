import { Button } from "@/components/ui/button";
const SoftButton = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="soft">Primary</Button>
      <Button color="primary" variant="soft" >Primary</Button>
      <Button color="secondary" variant="soft">Secondary</Button>
      <Button color="success" variant="soft">Success</Button>
      <Button color="info" variant="soft">Info</Button>
      <Button color="warning" variant="soft">Warning</Button>
      <Button color="destructive" variant="soft">Destructive</Button>
    </div>
  )
};

export default SoftButton;
