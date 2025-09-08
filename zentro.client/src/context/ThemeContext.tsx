import { createContext, useState, useMemo } from "react";
import type { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getTheme } from "../theme";

interface ThemeContextType {
    toggleTheme: () => void;
}

export const CustomThemeContext = createContext<ThemeContextType | null>(null);

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const [mode, setMode] = useState<"light" | "dark">(prefersDarkMode ? "dark" : "light");

    const toggleTheme = () => {
        setMode(prev => (prev === "light" ? "dark" : "light"));
    };

    const theme = useMemo(() => getTheme(mode), [mode]);

    return (
        <CustomThemeContext.Provider value={{ toggleTheme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CustomThemeContext.Provider>
    );
};