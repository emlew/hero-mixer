import { Outlet } from "react-router-dom";
import { PrimaryNavBar } from "./PrimaryNavBar";
import { MainContent } from "./RootLayout.styles";
import { Boundary } from "@/components";

export const RootLayout: React.FC = () => {
  return (
    <>
      <PrimaryNavBar />
      <MainContent>
        <Boundary>
          <Outlet />
        </Boundary>
      </MainContent>
    </>
  );
};
