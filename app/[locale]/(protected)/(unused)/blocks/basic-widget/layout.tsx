import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Basic Widget',
  description: 'Basic Widget'
}
const BasicWidget = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      {children}
    </>
  );
};

export default BasicWidget;