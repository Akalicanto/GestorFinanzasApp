import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#4CAF50",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#81C784",
        contrastText: "#212121",
      },
      background: {
        default: mode === "light" ? "#FFFFFF" : "#1E1E1E",
        paper: mode === "light" ? "#FFFFFF" : "#2C2C2C", 
      },
      text: {
        primary: mode === "light" ? "#212121" : "#E0E0E0",
        secondary: mode === "light" ? "#757575" : "#B0B0B0",
      },
    },
  });
