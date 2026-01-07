import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      primary: isDark ? '#000000' : '#ffffff',
      secondary: isDark ? '#1a1a1a' : '#f5f5f5',
      text: isDark ? '#ffffff' : '#000000',
      textSecondary: isDark ? '#d1d5db' : '#6b7280',
      accent: '#3be1ac',
      border: isDark ? '#374151' : '#d1d5db',
      card: isDark ? '#1a1a1a' : '#ffffff',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={isDark ? 'dark' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
