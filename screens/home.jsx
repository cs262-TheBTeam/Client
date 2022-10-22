import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function HomeScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <StatusBar style="auto" />

      {/* div */}

      <View style={{ flex: 0.2 }}></View>

      {/* image */}

      <View style={globalStyles.centerItem}><Image style={globalStyles.logo} source={require('../img/picture.jpg')} /></View>

      {/* div */}

      <View style={{ flex: 0.05 }} ></View>

      {/* title */}

      <Text style={globalStyles.title}>Calvin Location Guesser</Text>

      {/* div */}

      <View style={{ flex: 0.55 }} ></View>

      {/* button1 */}

      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('question1', { playerScore: 0 })}>
        <Text style={globalStyles.buttonText}>Start Quiz</Text>
      </TouchableOpacity>

      {/* div */}

      <View style={{ flex: 0.05 }} ></View>

      {/* button2 */}

      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('leaderboard', { playerScore: undefined })}>
        <Text style={globalStyles.buttonText}>Leaderboard</Text>
      </TouchableOpacity>
    </View >
  );
}
