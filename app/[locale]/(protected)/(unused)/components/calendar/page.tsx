import Card from "@/components/code-snippet";
import BasicCalendar from "./basic-calendar";
import SiteBreadcrumb from "@/components/site-breadcrumb";
import { basicCalendar } from "./soure-code";

const CalendarPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <Card title="Calendar" code={basicCalendar}>
        <div className="max-w-4xl p-2 mx-auto">
          <BasicCalendar />
        </div>
      </Card>
    </div>
  );
};

export default CalendarPage;