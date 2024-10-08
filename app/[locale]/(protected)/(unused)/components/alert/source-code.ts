export const basicAlert=`import { Alert, AlertDescription } from '@/components/ui/alert';

const BasicAlert = () => {
  return (
    <div className="space-y-4">
      <Alert>
        <AlertDescription>
          This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="primary">
        <AlertDescription>
          This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="secondary">
        <AlertDescription>
          This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="success">
        <AlertDescription>
          This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="destructive">
        <AlertDescription>
          This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="warning">
        <AlertDescription>
          This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="info">
        <AlertDescription>
          This is an alert—check it out!
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default BasicAlert;`

export const softColorAlert=`import { Alert, AlertDescription } from '@/components/ui/alert';

const SoftColorsAlert = () => {
  return (
    <div className="space-y-4">
       <Alert variant="soft">
        <AlertDescription>
          This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="primary" variant="soft">
        <AlertDescription>
          This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="secondary" variant="soft">
        <AlertDescription>
          This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="success" variant="soft">
        <AlertDescription>
          This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="destructive" variant="soft">
        <AlertDescription>
          This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="warning" variant="soft">
        <AlertDescription>
          This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="info" variant="soft">
        <AlertDescription>
          This is an alert—check it out!
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default SoftColorsAlert;`

export const linkColorsAlert=`import { Alert, AlertDescription } from '@/components/ui/alert';
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

export default LinkColorsAlert;`

export const dismissableAlert=`import { Alert, AlertDescription } from '@/components/ui/alert';
import { Icon } from '@/components/ui/icon';

const DissmissableAlert = () => {
  return (
    <div className="space-y-4">
      <Alert dismissible>
        <AlertDescription>
          <Icon icon="heroicons:bell-solid" className="w-5 h-5" />  This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="primary" dismissible>
        <AlertDescription>
          <Icon icon="heroicons:bell-solid" className="w-5 h-5" />  This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="secondary" dismissible>
        <AlertDescription>
          <Icon icon="heroicons-outline:support" className="w-5 h-5" />  This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="success" dismissible>
        <AlertDescription>
          <Icon icon="akar-icons:double-check" className="w-5 h-5" />  This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="warning" dismissible>
        <AlertDescription>
          <Icon icon="heroicons-outline:exclamation" className="w-5 h-5" />   This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="destructive" dismissible>
        <AlertDescription>
          <Icon icon="heroicons-outline:ban" className="w-5 h-5" />   This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="info" dismissible>
        <AlertDescription>
          <Icon icon="heroicons-outline:information-circle" className="w-5 h-5" />  This is an alert—check it out!
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default DissmissableAlert;`

export const dismissableSoftAlert=`import { Alert, AlertDescription } from '@/components/ui/alert';
import { Icon } from '@/components/ui/icon';

const DissmissableSoftAlert = () => {
  return (
    <div className="space-y-4">
      <Alert variant="soft" dismissible>
        <AlertDescription>
          <Icon icon="heroicons:bell-solid" className="w-5 h-5" />  This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert variant="soft" color="primary" dismissible>
        <AlertDescription>
          <Icon icon="heroicons-outline:support" className="w-5 h-5" />  This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert variant="soft" color="secondary" dismissible>
        <AlertDescription>
          <Icon icon="heroicons-outline:support" className="w-5 h-5" />  This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert variant="soft" color="success" dismissible>
        <AlertDescription>
          <Icon icon="akar-icons:double-check" className="w-5 h-5" />  This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert variant="soft" color="warning" dismissible>
        <AlertDescription>
          <Icon icon="heroicons-outline:exclamation" className="w-5 h-5" />   This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert variant="soft" color="destructive" dismissible>
        <AlertDescription>
          <Icon icon="heroicons-outline:ban" className="w-5 h-5" />   This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert variant="soft" color="info" dismissible>
        <AlertDescription>
          <Icon icon="heroicons-outline:information-circle" className="w-5 h-5" />  This is an alert—check it out!
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default DissmissableSoftAlert;`

export const outlineAlert=`import { Alert, AlertDescription } from '@/components/ui/alert';

const OutlineAlert = () => {
  return (
    <div className="space-y-4">
      <Alert variant="outline">
        <AlertDescription>
          This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="primary" variant="outline">
        <AlertDescription>
          This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="secondary" variant="outline">
        <AlertDescription>
          This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="success" variant="outline">
        <AlertDescription>
          This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="destructive" variant="outline">
        <AlertDescription>
          This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="warning" variant="outline">
        <AlertDescription>
          This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert color="info" variant="outline">
        <AlertDescription>
          This is an alert—check it out!
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default OutlineAlert;`

export const outlineAlertIcon=`import { Alert, AlertDescription } from '@/components/ui/alert';
import { Icon } from '@/components/ui/icon';

const OutlineAlertIcon = () => {
  return (
    <div className="space-y-4">
     <Alert variant="outline" dismissible>
        <AlertDescription>
          <Icon icon="heroicons:bell-solid" className="w-5 h-5" />  This is an alert—check it out!
        </AlertDescription>
      </Alert>
     <Alert variant="outline" color="primary" dismissible>
        <AlertDescription>
          <Icon icon="heroicons:bell-solid" className="w-5 h-5" />  This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert variant="outline" color="secondary" dismissible>
        <AlertDescription>
          <Icon icon="heroicons-outline:support" className="w-5 h-5" />  This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert variant="outline" color="success" dismissible>
        <AlertDescription>
          <Icon icon="akar-icons:double-check" className="w-5 h-5" />  This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert variant="outline" color="warning" dismissible>
        <AlertDescription>
          <Icon icon="heroicons-outline:exclamation" className="w-5 h-5" />   This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert variant="outline" color="destructive" dismissible>
        <AlertDescription>
          <Icon icon="heroicons-outline:ban" className="w-5 h-5" />   This is an alert—check it out!
        </AlertDescription>
      </Alert>
      <Alert variant="outline" color="info" dismissible>
        <AlertDescription>
          <Icon icon="heroicons-outline:information-circle" className="w-5 h-5" />  This is an alert—check it out!
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default OutlineAlertIcon;`