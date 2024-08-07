import { palette } from "./theme/palette";
import { MuiButton, MuiLink } from "./MuiComponentDefaults";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette,
  components: {
    MuiButton,
    MuiLink,
  },
});

export default theme;
