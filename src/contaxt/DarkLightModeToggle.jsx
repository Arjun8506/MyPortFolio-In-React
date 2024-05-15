// ToggleModeContext.js

import React, { createContext, useContext, useState } from 'react';

const ToggleModeContext = createContext();

export const useToggleMode = () => {
  return useContext(ToggleModeContext);
};

export const ToggleModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ToggleModeContext.Provider value={{ isDarkMode, toggleMode }}>
      {children}
    </ToggleModeContext.Provider>
  );
};
