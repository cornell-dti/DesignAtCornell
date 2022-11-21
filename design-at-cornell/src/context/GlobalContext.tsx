import React, { useState, useEffect, createContext } from 'react';
import { mobileBreakpoint } from '../constants/styling';

interface Context {
  isMobileView: boolean;
}

const defaultState = {
  isMobileView: false,
};

const mobileViewCheck = `(max-width: ${mobileBreakpoint}px)`;
export const GlobalContext = createContext<Context>(defaultState);

export const GlobalContextProvider: React.FC = ({ children }) => {
  const [mobileView, setMobileView] = useState(window.matchMedia(mobileViewCheck).matches);

  useEffect(() => {
    window.matchMedia(mobileViewCheck).addEventListener('change', (e) => setMobileView(e.matches));
  }, []);

  return (
    <GlobalContext.Provider value={{ isMobileView: mobileView }}>{children}</GlobalContext.Provider>
  );
};
