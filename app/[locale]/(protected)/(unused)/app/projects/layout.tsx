import { Metadata } from "next";
import ProjectWrapper from "./project-wrapper";
export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects Page'
}
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProjectWrapper>
      {children}
    </ProjectWrapper>
  );
};

export default Layout;