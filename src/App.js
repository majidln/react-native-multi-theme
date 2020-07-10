
import React from 'react';
import {View, Text} from 'react-native';
import MainNavigation from './navigation'
import { ThemeContextProvider } from './providers/themeProvider';

function App() {
  return (
    <ThemeContextProvider>
        <MainNavigation />
    </ThemeContextProvider>
  );
}

export default App;
