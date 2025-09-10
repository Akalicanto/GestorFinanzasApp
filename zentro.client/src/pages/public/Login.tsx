import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper, Link } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useSnackbar } from "../../context/SnackbarContext";
import type { UserLoginRequest } from "../../types/userTypes";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();
    const { showMessage } = useSnackbar();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const data: UserLoginRequest = { email, password };
            await login(data);

            showMessage("Has iniciado sesión correctamente", "success");
            navigate("/");
        } catch (err: any) {
            showMessage(err?.response?.data || "Error al iniciar sesión", "error");
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                bgcolor: "background.default",
            }}
        >
            <Paper sx={{ p: 5, width: 360, borderRadius: 2, boxShadow: 3 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Zentro
                </Typography>
                <Typography variant="h6" align="center" gutterBottom>
                    Inicia sesión
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Correo electrónico"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Contraseña"
                        type="password"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 3 }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
                        Entrar
                    </Button>
                </form>

                <Typography align="center">
                    ¿No tienes cuenta?{" "}
                    <Link component={RouterLink} to="/register">
                        Regístrate
                    </Link>
                </Typography>
            </Paper>
        </Box>
    );
};

export default Login;