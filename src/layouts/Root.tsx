import { Outlet } from "react-router-dom";
import { MainNavigation } from "../components";

export const RootLayout: React.FC = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};
