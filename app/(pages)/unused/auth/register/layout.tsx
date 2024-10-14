import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashcode Next Js",
  description: "Dashcode is a popular dashboard template.",
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
