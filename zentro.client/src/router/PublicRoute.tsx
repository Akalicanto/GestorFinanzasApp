import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface Props {
    children: React.ReactNode;
}

export const PublicRoute = ({ children }: Props) => {
    const { isAuthenticated } = useAuth();
    return !isAuthenticated ? children : <Navigate to="/home" />;
};