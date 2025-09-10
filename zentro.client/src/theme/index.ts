import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#2E7D32",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#66BB6A",
        contrastText: "#FFFFFF",
      },
      background: {
        default: mode === "light" ? "#F5F5F5" : "#1B3120",
        paper: mode === "light" ? "#FFFFFF" : "#25422A",
      },
      text: {
        primary: mode === "light" ? "#1B1B1B" : "#E0E0E0",
        secondary: mode === "light" ? "#4F4F4F" : "#B5C5B5",
      }
    },
  });
