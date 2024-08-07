import { palette } from "./theme/palette";
import { typography } from "./theme/typography";
import { MuiButton, MuiLink } from "./MuiComponentDefaults";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette,
  typography,
  components: {
    MuiButton,
    MuiLink,
  },
});

export default theme;
