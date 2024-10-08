import { Metadata } from "next";

export const metadata:Metadata={
  title: 'Banking Page',
  description: 'Banking Page Description'
}
const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;