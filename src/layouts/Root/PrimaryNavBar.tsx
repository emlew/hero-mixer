import { Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { StyledNavBar, StyledNavButton } from "./RootLayout.styles";

export const PrimaryNavBar: React.FC = () => {
  return (
    <StyledNavBar position="static">
      <StyledNavButton>
        <Link component={RouterLink} to="/">
          Battle
        </Link>
      </StyledNavButton>
      <Button color="inherit">
        <Link component={RouterLink} to="/heroes">
          All Heroes
        </Link>
      </Button>
    </StyledNavBar>
  );
};
