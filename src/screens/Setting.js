import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold'
  }
})

export default SettingsScreen;
