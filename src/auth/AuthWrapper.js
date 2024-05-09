import { createContext, useContext, useState } from "react";
import { AdminPanel } from '../components/AdminPanel/AdminPanel';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthWrapper = ({ children }) => {

    const [user, setUser] = useState({ name: "", isAuthenticated: false });

    const login = (userName, password) => {
        return new Promise((resolve, reject) => {
            if (password === "password") {
                setUser({ name: userName, isAuthenticated: true });
                resolve("success");
            } else {
                reject("Senha Incorreta");
            }
        });
    };

    const logout = () => {
        setUser({ ...user, isAuthenticated: false });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            <>
                <AdminPanel/>
            </>
        </AuthContext.Provider>
    );
};
