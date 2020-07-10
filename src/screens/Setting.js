import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { theme } from './../providers/themeProvider';

function SettingsScreen() {
  return (
    <View style={{...styles.container, backgroundColor: theme.backgroundColor}}>
      <Text  style={{...styles.text, color: theme.primaryText}}>Settings!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold'
  }
})

export default SettingsScreen;
