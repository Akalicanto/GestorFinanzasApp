import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            {/* CssBaseline aplica reset de MUI y estilos base */}
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);