"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Create UserContext
const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Rehydrate user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      console.log("Rehydrating user from localStorage:", JSON.parse(savedUser));
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const onUserSignIn = (userData) => {
    console.log("onUserSignIn called with:", userData);
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    console.log(user);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    console.log("User logged out");
  };

  return (
    <UserContext.Provider value={{ user, onUserSignIn, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
