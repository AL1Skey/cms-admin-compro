import { Alert, AlertDescription } from '@/components/ui/alert';

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

export default SoftColorsAlert;