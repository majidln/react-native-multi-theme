import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to change React Native Theme Changer Sample APP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default HomeScreen;
