import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { PrimaryNavBar } from "./PrimaryNavBar";
import { MainContent } from "./RootLayout.styles";
import { Boundary } from "@/components";

export const RootLayout: React.FC = () => {
  return (
    <Box>
      <PrimaryNavBar />
      <MainContent>
        <Boundary>
          <Outlet />
        </Boundary>
      </MainContent>
    </Box>
  );
};
