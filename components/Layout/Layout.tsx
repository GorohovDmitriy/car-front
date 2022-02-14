import { FC, ReactNode } from "react";
import { Wrapper } from "./style";
import Navbar from "../Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Layout;
