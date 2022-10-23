import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function HomeScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <StatusBar style="auto" />

      {/* div */}

      <View style={{ flex: 0.2 }}></View>

      {/* logo */}

      <View style={globalStyles.centerItem}><Image style={globalStyles.logo} source={require('../img/logo.png')} /></View>

      {/* div */}

      <View style={{ flex: 0.05 }} ></View>

      {/* title */}

      <Text style={globalStyles.title}>Calvin Location Guesser</Text>

      {/* div */}

      <View style={{ flex: 0.55 }} ></View>

      {/* button1 */}

      <TouchableHighlight style={globalStyles.button} underlayColor={'#97354E'} onPress={() => navigation.navigate('question1', { playerScore: 0 })}>
        <Text style={globalStyles.buttonText}>Start Quiz</Text>
      </TouchableHighlight>

      {/* div */}

      <View style={{ flex: 0.05 }} ></View>

      {/* button2 */}

      <TouchableHighlight style={globalStyles.button} underlayColor={'#97354E'} onPress={() => navigation.navigate('leaderboard', { playerScore: undefined })}>
        <Text style={globalStyles.buttonText}>Leaderboard</Text>
      </TouchableHighlight>
    </View >
  );
}
