import { Button } from '@/components/ui/button';

const RoundedOutline = () => {
  return (
    <div className='flex flex-wrap gap-3'>
      <Button variant="outline" rounded="full">Default</Button>
      <Button color="primary" variant="outline" rounded="full">Primary</Button>
      <Button color="secondary" variant="outline" rounded="full">Secondary</Button>
      <Button color="success" variant="outline" rounded="full">Success</Button>
      <Button color="info" variant="outline" rounded="full">Info</Button>
      <Button color="warning" variant="outline" rounded="full">Warning</Button>
      <Button color="destructive" variant="outline" rounded="full">Destructive</Button>
    </div>
  );
};

export default RoundedOutline;  