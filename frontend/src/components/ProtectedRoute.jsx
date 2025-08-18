import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  console.log("ProtectedRoute user: ", user);

  if (loading) {
    return <div>Loading...</div>; // or a spinner
  }

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};

export default ProtectedRoute;



//     {
//     "username": "johndoe",
//     "password": "mypassword123"
// }