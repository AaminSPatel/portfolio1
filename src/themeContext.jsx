import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // State to manage the current theme
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') || false);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Persist the theme to localStorage
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode);
  }, [isDarkMode]);

  // Effect to apply the theme to the document body
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
