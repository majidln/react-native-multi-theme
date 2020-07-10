import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { theme } from './../providers/themeProvider';

function HomeScreen() {
  console.log('theme is', theme)
  return (
    <View style={{...styles.container, backgroundColor: theme.backgroundColor}}>
      <Text style={{...styles.text, color: theme.primaryText}}>Welcome to change React Native Theme Changer Sample APP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default HomeScreen;
