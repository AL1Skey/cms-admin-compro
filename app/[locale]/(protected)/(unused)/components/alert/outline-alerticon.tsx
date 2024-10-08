import { Alert, AlertDescription } from '@/components/ui/alert';
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

export default OutlineAlertIcon;