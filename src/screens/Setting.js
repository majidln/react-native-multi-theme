import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { withTheme } from './../providers/themeProvider';

function SettingsScreen({theme, setTheme, switchTheme, themeID}) {
  return (
    <View style={{...styles.container, backgroundColor: theme.backgroundColor}}>
      <TouchableOpacity style={styles.button} onPress={() => switchTheme()}>
        <Text  style={{...styles.text, color: theme.primaryText}}>Switch Theme</Text>
      </TouchableOpacity>
      {themeID === 'light' && <TouchableOpacity style={styles.button} onPress={() => setTheme('dark')}>
        <Text  style={{...styles.text, color: theme.primaryText}}>Change To Dark</Text>
      </TouchableOpacity> }
      {themeID === 'dark' && <TouchableOpacity style={styles.button} onPress={() => setTheme('light')}>
        <Text  style={{...styles.text, color: theme.primaryText}}>Change to light</Text>
      </TouchableOpacity>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'grey',
    padding: 10,
    margin: 20
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default withTheme(SettingsScreen);
