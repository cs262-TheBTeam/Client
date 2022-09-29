import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

//  For when we convert to TS
// export interface Props {
//   navigation: ;
// }

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to Calvin Location Guesser!!!</Text>
      <StatusBar style="auto" />
      <Button
        title="Start Quiz"
        onPress={() => navigation.navigate('Q1')}
      />
    </View>
  );
}

//  We should use external css files
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { HomeScreen }