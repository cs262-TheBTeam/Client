import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function HomeScreen({ navigation }) {

  const questions = [
    {
      'buildingCode': 'HL',
      'roomNumber': '204',
      'images': [
        'HC204/HL204-1.jpg',
        'HC204/HL204-2.jpg',
        'HC204/HL204-3.jpg',
        'HC204/HL204-4.jpg',
      ]
    },
    {
      'buildingCode': 'NH',
      'roomNumber': '064',
      'images': [
        'NH064/NH064-1.jpg',
        'NH064/NH064-2.jpg',
        'NH064/NH064-3.jpg',
        'NH064/NH064-4.jpg',
      ]
    },
    {
      'buildingCode': 'SB',
      'roomNumber': '010',
      'images': [
        'SB010/SB010-1.jpg',
        'SB010/SB010-2.jpg',
        'SB010/SB010-3.jpg',
        'SB010/SB010-4.jpg',
      ]
    },
  ]

  return (
    <View style={globalStyles.container}>
      <StatusBar style="auto" />

      {/* div */}

      <View style={{ flex: 0.2 }}></View>

      {/* logo */}

      <View style={globalStyles.centerItem}><Image source={require('../img/logo.png')} /></View>

      {/* div */}

      <View style={{ flex: 0.05 }} ></View>

      {/* title */}

      <Text style={globalStyles.title}>Calvin Location Guesser</Text>

      {/* div */}

      <View style={{ flex: 0.55 }} ></View>

      {/* button1 */}

      <TouchableHighlight style={globalStyles.button} underlayColor={'#97354E'} onPress={() => navigation.navigate('question1', { playerScore: 0, questions, questionNum: 0 })}>
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
