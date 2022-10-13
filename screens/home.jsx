import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function HomeScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Welcome to Calvin Location Guesser!!!</Text>
      <StatusBar style="auto" />
      <Button
        title="Start Quiz"
        onPress={() => navigation.navigate('question1')}
      />
      <Button
        title="Go to leaderboard"
        onPress={() => navigation.navigate('leaderboard')}
      />
    </View>
  );
}
