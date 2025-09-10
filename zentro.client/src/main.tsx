import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CustomThemeProvider } from "./context/ThemeContext";
import "./locales/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <CustomThemeProvider>
            <App />
        </CustomThemeProvider>
    </React.StrictMode>
);