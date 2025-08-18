import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ add loading state

  useEffect(() => {
  const storedUser = localStorage.getItem("authUser");
  if (storedUser) {
    try {
      setUser(JSON.parse(storedUser));
    } catch (err) {
      console.error("Invalid auth data", err);
    }
  }
  setLoading(false); // ✅ mark initialization complete
}, []);

  const login = (data) => {
    const authData = { token: data?.token, user: data?.user };
    setUser(authData);
    localStorage.setItem("authUser", JSON.stringify(authData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
