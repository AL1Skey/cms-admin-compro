import { Alert, AlertDescription } from '@/components/ui/alert';

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

export default BasicAlert;