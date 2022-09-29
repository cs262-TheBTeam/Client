import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function QuestionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Question:</Text>
      <StatusBar style="auto" />
      <Button
        title="See Results"
        onPress={() => navigation.navigate('R1')}
      />
    </View>
  );
}

function ResultsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Result:</Text>
      <StatusBar style="auto" />
      <Button
        title="Go Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Q1" component={QuestionsScreen} />
        <Stack.Screen name="R1" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
