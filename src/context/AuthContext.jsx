import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the Context
const AuthContext = createContext();

// Create a custom hook for easy access
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if a user is already logged in when the app loads
  useEffect(() => {
    const savedUser = localStorage.getItem('netflix_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Mock Login Function
  const login = (email, password) => {
    // In a real app, you'd check a database here. We'll mock it:
    const mockUser = {
      email: email,
      name: email.split('@')[0], // Creates a username from email
      language: 'English',
      autoplayNext: true,
      autoplayPreviews: true
    };
    setUser(mockUser);
    localStorage.setItem('netflix_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('netflix_user');
  };

  const updateProfile = (updatedData) => {
    const newUserObj = { ...user, ...updatedData };
    setUser(newUserObj);
    localStorage.setItem('netflix_user', JSON.stringify(newUserObj));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};