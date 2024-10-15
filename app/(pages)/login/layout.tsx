import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iaajofficial Admin",
  description: "Iaajofficial Content Management System Admin.",
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
