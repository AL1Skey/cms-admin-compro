import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Statistic Widget',
  description: 'Statistic Widget Description'
}
const StatisticWidget = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      {children}
    </>
  );
};

export default StatisticWidget;