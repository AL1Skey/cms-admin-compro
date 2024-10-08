import { calendarEvents, categories } from "./data";

// get events
export const getEvents = async () => {
    return calendarEvents;
};

// get categories
export const getCategories = async () => {
    return categories;
}