import { Button } from "@/components/ui/button";
const DisabledButton = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button disabled>Default</Button>
      <Button color="primary" disabled>Primary</Button>
      <Button color="secondary" disabled>Secondary</Button>
      <Button color="success" disabled>Success</Button>
      <Button color="info" disabled>Info</Button>
      <Button color="warning" disabled>Warning</Button>
      <Button color="destructive" disabled>Destructive</Button>
    </div>
  );
};

export default DisabledButton;