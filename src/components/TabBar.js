import React from 'react';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import { withTheme } from './../providers/themeProvider';

const MyTabBar = props => {
    return (
      <BottomTabBar
        {...props}
        activeTintColor={props.theme.tabBarActiveColor}
        inactiveTintColor={props.theme.primaryText}
        style={{backgroundColor: props.theme.tabBarBackgroundColor, fontWeight: 'bold'}}
      />
    );
  };

export default withTheme(MyTabBar);