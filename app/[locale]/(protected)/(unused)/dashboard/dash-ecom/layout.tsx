import { Metadata } from "next";

export const metadata:Metadata={
  title: 'Ecommerce',
  description: 'Ecommerce Description'
}
const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;