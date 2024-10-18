import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ikatan Alumni Aman Jaya",
  description: "Ikatan Alumni Aman Jaya",
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
