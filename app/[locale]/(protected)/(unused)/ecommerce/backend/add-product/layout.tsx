import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Ecommerce',
  description: 'Ecommerce Page'
}
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;