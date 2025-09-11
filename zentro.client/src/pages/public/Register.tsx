import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper, Link } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { createOrUpdate } from "../../services/userService";
import type { User } from "../../types/userTypes";

const Register = () => {
    const [formData, setFormData] = useState<Omit<User, "id">>({
        name: "",
        surname: "",
        email: "",
        password: "",
        birthDate: ""
    });

    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const navigate = useNavigate();

    const handleChange = (field: keyof typeof formData, value: string) => {
        setFormData({ ...formData, [field]: value });
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name) newErrors.name = "El nombre es obligatorio";
        if (!formData.surname) newErrors.surname = "El apellido es obligatorio";
        if (!formData.email.includes("@")) newErrors.email = "Correo inválido";
        if (formData.password.length < 6) newErrors.password = "Mínimo 6 caracteres";
        if (formData.password !== confirmPassword) newErrors.confirmPassword = "Las contraseñas no coinciden";
        if (!formData.birthDate) newErrors.birthDate = "La fecha de nacimiento es obligatoria";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            const response: boolean = await createOrUpdate(formData);

            navigate("/login");
        } catch (error) {
            console.error("Error al registrar usuario:", error);
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
            <Paper sx={{ p: 5, width: 400, borderRadius: 2, boxShadow: 3 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Zentro
                </Typography>
                <Typography variant="h6" align="center" gutterBottom>
                    Crea tu cuenta
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        error={!!errors.name}
                        helperText={errors.name}
                    />
                    <TextField
                        label="Apellido"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                        value={formData.surname}
                        onChange={(e) => handleChange("surname", e.target.value)}
                        error={!!errors.surname}
                        helperText={errors.surname}
                    />
                    <TextField
                        label="Correo electrónico"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <TextField
                        label="Fecha de nacimiento"
                        type="date"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                        InputLabelProps={{ shrink: true }}
                        value={formData.birthDate}
                        onChange={(e) => handleChange("birthDate", e.target.value)}
                        error={!!errors.birthDate}
                        helperText={errors.birthDate}
                    />
                    <TextField
                        label="Contraseña"
                        type="password"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                        value={formData.password}
                        onChange={(e) => handleChange("password", e.target.value)}
                        error={!!errors.password}
                        helperText={errors.password}
                    />
                    <TextField
                        label="Confirmar contraseña"
                        type="password"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 3 }}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
                        Registrarse
                    </Button>
                </form>

                <Typography align="center">
                    ¿Ya tienes cuenta?{" "}
                    <Link component={RouterLink} to="/login">
                        Inicia sesión
                    </Link>
                </Typography>
            </Paper>
        </Box>
    );
};

export default Register;