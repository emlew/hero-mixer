import { Box, AppBar, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { StyledNavButton, StyledPrimaryNav } from "./RootLayout.styles";

export const PrimaryNavBar: React.FC = () => {
  return (
    <StyledPrimaryNav>
      <AppBar position="static">
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <StyledNavButton >
            <Link component={RouterLink} to="/">
              Battle
            </Link>
          </StyledNavButton>
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
