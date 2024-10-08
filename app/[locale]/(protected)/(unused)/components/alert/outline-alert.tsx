import { Alert, AlertDescription } from '@/components/ui/alert';

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

export default OutlineAlert;