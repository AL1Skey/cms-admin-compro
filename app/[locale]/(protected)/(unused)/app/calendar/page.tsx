import { getEvents, getCategories } from "./utils";
import { Category } from "./data"
import CalendarView from "./calender-view";



const CalenderPage = async () => {
  const events = await getEvents();
  const categories = await getCategories();
  const formattedCategories = categories.map((category: Category) => ({
    ...category,
    activeClass: "",
  }));
  return (
    <div>
      <CalendarView events={events} categories={formattedCategories} />
    </div>
  );
};

export default CalenderPage;
