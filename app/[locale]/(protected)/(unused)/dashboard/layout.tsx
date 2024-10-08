import PageTitle from "@/components/page-title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashcode Next Js",
  description: "Dashcode is a popular dashboard template.",
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>
    <PageTitle className="mb-6" />
    {children}</>;
};

export default Layout;
