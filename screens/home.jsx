import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function HomeScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Welcome to Calvin Location Guesser!!!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('question1', { playerScore: 0 })}>
        <Text style={globalStyles.buttonText}>Start Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('leaderboard', { playerScore: undefined })}>
        <Text style={globalStyles.buttonText}>Go to leaderboard</Text>
      </TouchableOpacity>
    </View>
  );
}
