import { MobileBottomNav } from "./MobileBottomNav";
import { NavHeader } from "./NavHeader";
import { NavMenu } from "./NavMenu";
import { TopBanner } from "./TopBanner";

export const NavWithCenteredLogo = () => (
  <>
    <TopBanner />
    <NavHeader.Desktop />
    <NavMenu.Desktop />
    <NavHeader.Mobile />
    <NavMenu.Mobile />
    <MobileBottomNav />
  </>
);
