import React, { useContext, useState } from 'react';
import THEMES from './themes.json';

const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
    const [themeID, setThemeID] = useState('light');
  
    return (
      <ThemeContext.Provider value={{ themeID, setThemeID }}>
        {children}
      </ThemeContext.Provider>
    );
};

export function withTheme(Component) {
    return props => {
      const { themeID, setThemeID } = useContext(ThemeContext);
  
      const getTheme = themeID => THEMES[themeID];
      const switchTheme = () => setThemeID(themeID === 'light' ? 'dark' : 'light');
      const setTheme = (key) => setThemeID(key);
  
      return (
        <Component
          {...props}
          themes={THEMES}
          theme={getTheme(themeID)}
          themeID={themeID}
          setTheme={setTheme}
          switchTheme={switchTheme}
        />
      );
    };
}
