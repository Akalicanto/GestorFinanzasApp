import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

interface SidebarProps {
    drawerWidth: number;
}

const Sidebar = ({ drawerWidth }: SidebarProps) => {
    return (
        <Box
            sx={{
                width: drawerWidth,
                bgcolor: "background.paper",
                borderRight: "1px solid #ddd",
            }}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/home">
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
};

export default Sidebar;