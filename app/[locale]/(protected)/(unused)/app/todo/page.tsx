import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CreateTodo from "./create-todo";
import { todos } from "./data";
import { ScrollArea } from "@/components/ui/scroll-area";
import TodoHeader from "./todo-header";
import Todo from "./todo";
import TodoSidebarWrapper from "./sidebar-wrapper";
import Nav from "@/components/nav";
import { useTranslations } from "next-intl";
const TodoPage = () => {
const t = useTranslations("TodoApp");
  return (
    <div className="flex gap-5  h-full ">
      <TodoSidebarWrapper >
        <Card className="h-full">
          <CardContent className="h-full p-0">
            <ScrollArea className="h-[calc(100%-30px)]"  >
              <div className="mb-4 px-4 pt-5 m-1 sticky top-0">
                <CreateTodo />
              </div>
              <Nav links={[
                {
                  title: "My Task",
                  icon: "uil:image-v",
                  active: true,
                },
                {

                  title: "Starred",
                  icon: "heroicons:star",
                  active: false,
                },
                {

                  title: "Completed",
                  icon: "heroicons:document-check",
                  active: false,
                },
                {

                  title: "Trash",
                  icon: "heroicons:trash",
                  active: false,
                }
              ]} />
              <div className="py-4 px-5 text-default-800  font-semibold text-xs uppercase">
                {t("todos")}
              </div>
              <Nav dotStyle links={[
                {
                  title: "Team",
                  active: true,

                },
                {
                  title: "low",
                  active: false,
                },
                {
                  title: "medium",
                  active: false,
                },
                {
                  title: "high",
                  active: false,
                },
                {
                  title: "update",
                  active: false,
                }

              ]} />
            </ScrollArea>
          </CardContent>
        </Card>
      </TodoSidebarWrapper>
      <div className="flex-1 w-full">
        <Card className="h-full overflow-hidden">
          <CardHeader className="border-b border-default-200 ">
            <TodoHeader />
          </CardHeader>
          <CardContent className="p-0 h-full">
            <div className="h-[calc(100%-60px)] overflow-y-auto no-scrollbar">
              {
                todos.map((todo, index) =>
                  <Todo
                    key={`todo-${index}`}
                    todo={todo}
                  />)
              }
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TodoPage;