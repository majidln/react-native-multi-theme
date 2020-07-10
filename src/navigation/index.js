import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './../screens/Home';
import SettingScreen from './../screens/Setting';

import {theme} from './../providers/themeProvider'

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  activeTintColor: theme.tabBarActiveColor,
  inactiveTintColor: theme.primaryText,
  style: {backgroundColor: theme.tabBarBackgroundColor, fontWeight: 'bold'},
}

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
