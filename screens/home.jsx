/* eslint-disable spellcheck/spell-checker */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function HomeScreen({ navigation }) {

  const [questions, setQuestions] = useState([]);
  const [images, setImages] = useState([]);

  const getQuestions = async () => {
    try {
      const response = await fetch('https://calvin-location-guesser.herokuapp.com/quiz');
      const json = await response.json();
      setQuestions(json);

      const imagesList = [];
      for (i = 0; i < 4; i++) {
        const path = 'https://calvin-location-guesser.herokuapp.com/images/' + questions[i].idroom;
        const response = await fetch(path);
        const json = await response.json();
        imagesList.concat(json);
      }
      setImages(imagesList);
      console.log(images)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getQuestions();
  }, []);

  // const questions = [
  //   {
  //     'buildingCode': 'SB',
  //     'roomNumber': '010',
  //     'images': [
  //       require('../img/SB010/SB010-1.jpg'),
  //       require('../img/SB010/SB010-2.jpg'),
  //       require('../img/SB010/SB010-3.jpg'),
  //       require('../img/SB010/SB010-4.jpg'),
  //     ]
  //   },
  //   {
  //     'buildingCode': 'SF',
  //     'roomNumber': '204',
  //     'images': [
  //       require('../img/HC204/HL204-1.jpg'),
  //       require('../img/HC204/HL204-2.jpg'),
  //       require('../img/HC204/HL204-3.jpg'),
  //       require('../img/HC204/HL204-4.jpg'),
  //     ]
  //   },
  //   {
  //     'buildingCode': 'NH',
  //     'roomNumber': '064',
  //     'images': [
  //       require('../img/NH064/NH064-1.jpg'),
  //       require('../img/NH064/NH064-2.jpg'),
  //       require('../img/NH064/NH064-3.jpg'),
  //       require('../img/NH064/NH064-4.jpg'),
  //     ]
  //   },
  // ]

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

      <TouchableHighlight style={globalStyles.button} underlayColor={'#97354E'} onPress={() => navigation.navigate('question', { score: Number(0), questions, images, questionNum: 0 })}>
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
