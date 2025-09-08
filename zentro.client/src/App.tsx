import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

const App: React.FC = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "background.default",
                p: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
            }}
        >
            <Typography variant="h4" sx={{ mb: 2 }}>
                Demo de Colores MUI
            </Typography>

            {/* Cajas de colores */}
            <Stack direction="row" spacing={2}>
                {/* Color primario */}
                <Box
                    sx={{
                        width: 150,
                        height: 100,
                        bgcolor: "primary.main",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 2,
                    }}
                >
                    <Typography color="primary.contrastText">Primary</Typography>
                </Box>

                {/* Color secundario */}
                <Box
                    sx={{
                        width: 150,
                        height: 100,
                        bgcolor: "secondary.main",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 2,
                    }}
                >
                    <Typography color="secondary.contrastText">Secondary</Typography>
                </Box>
            </Stack>

            {/* Botones de prueba */}
            <Stack direction="row" spacing={2}>
                <Button color="primary" variant="contained">
                    Botón Verde
                </Button>
                <Button color="secondary" variant="contained">
                    Botón Clarito
                </Button>
            </Stack>

            {/* Texto de prueba */}
            <Box>
                <Typography color="text.primary">
                    Texto principal sobre fondo blanco
                </Typography>
                <Typography color="text.secondary">
                    Texto secundario sobre fondo blanco
                </Typography>
            </Box>
        </Box>
    );
};

export default App;