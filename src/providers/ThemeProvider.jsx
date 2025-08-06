import React, { useState } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        // document.body.classList.toggle('dark');
    };

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
}

export default ThemeProvider;
