import { Metadata } from "next";
import TodoWrapper from "./todo-wrapper";

export const metadata: Metadata = {
  title: "Todo",
  description: "Todo Application"
}
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <TodoWrapper>
      {children}
    </TodoWrapper>
  );
};

export default Layout;