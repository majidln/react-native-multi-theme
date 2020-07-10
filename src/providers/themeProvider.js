import React, { useContext } from 'react';
import THEMES from './themes.json';

const initialTheme = 'light'

export const themes = THEMES;
export const theme = THEMES[initialTheme];

const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ themes: THEMES, theme: THEMES[initialTheme] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function withTheme(Component) {
  return props => {
    const { themes, theme } = useContext(ThemeContext);
    return <Component {...props} themes={themes} theme={theme} />;
  };
}