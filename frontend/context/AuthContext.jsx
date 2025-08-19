
import React, { createContext, useState, useEffect } from "react";
import { registerUser } from "../services/authservices";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ add loading state

  const RegisterUser = async(formData) => {
    console.log("RegisterUser called",user);
   try {
    const response = await registerUser(formData);

    if(response?.token) {
      localStorage.setItem('authUser', JSON.stringify({
        token:response?.token,
        user:response?.user
      }))
    }
   } catch(error) {
    console.error("Error while registering user", error);
    throw error;
   }
  }
 
  useEffect(() => {
    
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Invalid auth data", err);
      }
    }
    setLoading(false); 
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
    <AuthContext.Provider value={{ user, login, logout, loading, RegisterUser }}>
      {children}
    </AuthContext.Provider>
  );
};
