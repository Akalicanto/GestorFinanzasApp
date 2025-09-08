import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#A5D6A7",
      contrastText: "#212121",
    },
    background: {
      default: "#FFFFFF",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
  },
});

export default theme;
