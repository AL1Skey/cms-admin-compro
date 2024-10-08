import { Metadata } from "next";

export const metadata:Metadata={
  title: 'Project Dashboard',
  description: 'Project Dashboard Description'
}
const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;