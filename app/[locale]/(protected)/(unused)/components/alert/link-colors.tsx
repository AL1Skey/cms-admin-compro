import { Alert, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';

const LinkColorsAlert = () => {
  return (
    <div className="space-y-4">
      <Alert variant="soft">
        <AlertDescription>
          This is an alert with <Link href="#" className='font-bold underline'>an example link</Link>. Check it out!
        </AlertDescription>
      </Alert>
      <Alert color="primary" variant="soft">
        <AlertDescription>
          This is an alert with <Link href="#" className='font-bold underline'>an example link</Link>. Check it out!
        </AlertDescription>
      </Alert>
      <Alert color="secondary" variant="soft">
        <AlertDescription>
          This is an alert with  <Link href="#" className='font-bold underline'>an example link</Link>. Check it out!
        </AlertDescription>
      </Alert>
      <Alert color="success" variant="soft">
        <AlertDescription>
          This is an alert with  <Link href="#" className='font-bold underline'>an example link</Link>. Check it out!
        </AlertDescription>
      </Alert>
      <Alert color="destructive" variant="soft">
        <AlertDescription>
          This is an alert with <Link href="#" className='font-bold underline'>an example link</Link>. Check it out!
        </AlertDescription>
      </Alert>
      <Alert color="warning" variant="soft">
        <AlertDescription>
          This is an alert with  <Link href="#" className='font-bold underline'>an example link</Link>. Check it out!
        </AlertDescription>
      </Alert>
      <Alert color="info" variant="soft">
        <AlertDescription>
          This is an alert with  <Link href="#" className='font-bold underline'>an example link</Link>. Check it out!
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default LinkColorsAlert;