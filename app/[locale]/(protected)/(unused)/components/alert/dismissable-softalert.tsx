import { Alert, AlertDescription } from '@/components/ui/alert';
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

export default DissmissableSoftAlert;