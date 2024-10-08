import { Metadata } from "next";

export const metadata:Metadata={
  title: 'CRM',
  description: 'CRM Dashboard Description'
}
const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;