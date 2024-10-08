import { Button } from '@/components/ui/button';

const RoundedButton = () => {
  return (
    <div className='flex flex-wrap gap-3'>
      <Button rounded="sm">Default</Button>
      <Button color="primary" rounded="md" >Primary</Button>
      <Button color="secondary" rounded="lg" >Scondary</Button>
      <Button color="warning" rounded="full" >Warning</Button>
    </div>
  );
};

export default RoundedButton;  