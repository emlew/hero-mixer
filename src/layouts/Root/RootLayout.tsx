import { Outlet } from "react-router-dom";
import { Boundary } from "../../components";
import { Box } from "@mui/material";
import { PrimaryNavBar } from "./PrimaryNavBar";
import { MainContent } from "./RootLayout.styles";

export const RootLayout: React.FC = () => {
  return (
    <Box>
      <PrimaryNavBar />
      <MainContent style={{ marginTop: 72 }}>
        <Boundary>
          <Outlet />
        </Boundary>
      </MainContent>
    </Box>
  );
};
