import { Outlet } from "react-router-dom";
import MainNavigation from "../MainNavigation";

const RootLayout: React.FC = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
