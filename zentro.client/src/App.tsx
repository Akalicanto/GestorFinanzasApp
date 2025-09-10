import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { SnackbarProvider } from "./context/SnackbarContext";
import AppRouter from "./router/AppRouter";

function App() {
    return (
        <SnackbarProvider>
            <AuthProvider>
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </AuthProvider>
        </SnackbarProvider>
    );
}

export default App;