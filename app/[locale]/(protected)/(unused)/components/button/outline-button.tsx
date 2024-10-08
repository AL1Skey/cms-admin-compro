import { Button } from '@/components/ui/button';
const OutlineButton = () => {
  return (
    <div className='flex flex-wrap gap-3'>
      <Button variant="outline">Default</Button>
      <Button color="primary" variant="outline" >Primary</Button>
      <Button color="secondary" variant="outline">Secondary</Button>
      <Button color="success" variant="outline">Success</Button>
      <Button color="info" variant="outline">Info</Button>
      <Button color="warning" variant="outline">Warning</Button>
      <Button color="destructive" variant="outline">Destructive</Button>
    </div>
  );
};

export default OutlineButton;  