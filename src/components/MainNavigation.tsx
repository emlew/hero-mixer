import { AppBar, Box, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const MainNavigation: React.FC = () => {
  return (
    // TODO: style box to display across entire viewport width and use white text
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
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
    </Box>
  );
};
