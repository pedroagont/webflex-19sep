import { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();

function useTheme() {
  return useContext(ThemeContext);
}

function ThemeProvider({ children }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  const value = {
    toggle,
    handleToggle,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { useTheme, ThemeProvider };
