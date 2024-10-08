import { Card, CardContent } from '@/components/ui/card';
import ExampleTwo from './example2';
import ExampleOne from './example1';
import SiteBreadcrumb from '@/components/site-breadcrumb';

const ReactTablePage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className='space-y-6'>
        <Card>
          <CardContent className="p-0">
            <ExampleOne />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-0">
            <ExampleTwo />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReactTablePage;