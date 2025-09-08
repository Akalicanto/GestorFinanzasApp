import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

// Páginas públicas
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";

// Páginas privadas
import Home from "../pages/private/Home";

const AppRouter = () => {
    return (
        <Routes>
            {/* Públicas */}
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

            {/* Privadas */}
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />

            {/* Redirección por defecto */}
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
};

export default AppRouter;