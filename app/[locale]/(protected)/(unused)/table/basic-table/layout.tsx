import { Metadata } from "next";

export const metadata:Metadata ={
  title: 'Basic Table',
  description: 'Basic Table'
}
const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;