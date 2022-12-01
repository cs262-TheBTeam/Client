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

    } catch (error) {
      console.error(error);
    }
  }

  const getImages = async () => {
    try {
      const imagesList = [];
      for (i = 0; i < 5; i++) {
        const path = 'https://calvin-location-guesser.herokuapp.com/images/' + questions[i].idroom;
        const response = await fetch(path);
        const json = await response.json();
        imagesList.push(json);
      }
      setImages(imagesList);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getQuestions();
  }, []);

  useEffect(() => {
    questions.length && getImages();
  }, [questions])

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

      <TouchableHighlight style={globalStyles.button} underlayColor={'#97354E'} onPress={() =>
        navigation.navigate('question', { score: Number(0), questions, images, questionNum: 0 })
      }>
        <Text style={globalStyles.buttonText}>Start Quiz</Text>
      </TouchableHighlight>

      {/* div */}

      <View style={{ flex: 0.05 }} ></View>

      {/* button2 */}

      <TouchableHighlight style={globalStyles.button} underlayColor={'#97354E'} onPress={() =>
        navigation.navigate('leaderboard', { playerScore: undefined })
      }>
        <Text style={globalStyles.buttonText}>Leaderboard</Text>
      </TouchableHighlight>
    </View >
  );
}
