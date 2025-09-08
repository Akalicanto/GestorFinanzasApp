import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CustomThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const Navbar = () => {
  const theme = useTheme();
  const themeContext = useContext(CustomThemeContext);

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Zentro</Typography>

        <IconButton onClick={themeContext?.toggleTheme} color="inherit">
          {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;