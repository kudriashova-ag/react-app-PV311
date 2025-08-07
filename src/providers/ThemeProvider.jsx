import React, { useEffect, useState } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
   }, [theme]);

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
}

export default ThemeProvider;


