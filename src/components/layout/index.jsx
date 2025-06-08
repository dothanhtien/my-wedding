import { LayoutStyledWrapper } from "./style";
import NavBar, { NavBarPlaceHolder } from "./navBar";
import PageContent from "./pageContent";
import { useDeviceType } from "../../hooks";

function Layout({ children }) {
  const { isMobile } = useDeviceType();

  return (
    <LayoutStyledWrapper>
      <NavBar />
      {!isMobile && <NavBarPlaceHolder />}
      <PageContent>{children}</PageContent>
      {isMobile && <NavBarPlaceHolder />}
    </LayoutStyledWrapper>
  );
}

export default Layout;
