import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { withTheme } from './../providers/themeProvider';

function SettingsScreen({theme}) {
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

export default withTheme(SettingsScreen);
