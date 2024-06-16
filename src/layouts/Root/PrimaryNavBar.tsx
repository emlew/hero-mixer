import { Box, AppBar, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { StyledPrimaryNav } from "./RootLayout.styles";

export const PrimaryNavBar: React.FC = () => {
  return (
    <StyledPrimaryNav>
      <AppBar position="static">
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button color="inherit">
            <Link component={RouterLink} to="/">
              Battle
            </Link>
          </Button>
          <Button color="inherit">
            <Link component={RouterLink} to="/heroes">
              All Heroes
            </Link>
          </Button>
        </Box>
      </AppBar>
    </StyledPrimaryNav>
  );
};
