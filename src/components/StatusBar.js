import React from 'react';
import {StatusBar} from 'react-native';
import { withTheme } from './../providers/themeProvider';

function MyStatusBar({themeID}) {
    const oppositeTheme = themeID === 'light' ? 'dark' : 'light'
    return (
        <StatusBar barStyle ={oppositeTheme + '-content'} hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
    );
  };

export default withTheme(MyStatusBar);