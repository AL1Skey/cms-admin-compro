import { Alert, AlertDescription } from '@/components/ui/alert';
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

export default DissmissableAlert;