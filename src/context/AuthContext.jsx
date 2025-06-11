import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  // Simulación: decodificar token y obtener datos del usuario (mejor si backend tiene endpoint /me)
  useEffect(() => {
    if (token) {
      const userFromToken = JSON.parse(atob(token.split(".")[1])); // decodifica JWT
      setUser({ id: userFromToken.id, email: userFromToken.email, username: userFromToken.username });
    } else {
      setUser(null);
    }
  }, [token]);

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};