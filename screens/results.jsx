/* eslint-disable spellcheck/spell-checker */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableHighlight, View, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ResultsScreen1({ route, navigation }) {

  const { score, dropDownGuess, textInputGuess, questions, images, questionNum } = route.params;

  const isFinalPage = questionNum === 5;

  const dropDownAnswer = !isFinalPage ? questions[questionNum].buildingcode : 0;
  const textInputAnswer = !isFinalPage ? questions[questionNum].roomnumber : 0;
  const pointsToAdd = !isFinalPage ? calculatePoints(dropDownGuess, dropDownAnswer, textInputGuess, textInputAnswer) : 0;
  const newScore = score + pointsToAdd;

  const [name, setName] = useState('');

  function calculatePoints(ddGuess, ddAnswer, tiGuess, tiAnswer) {
    let points = 0;
    if (ddGuess == ddAnswer) {
      points += 2;
    }
    if (firstDigit(tiGuess) == firstDigit(tiAnswer)) {
      points += 3;
    }
    if (Number(tiGuess) == Number(tiAnswer)) {
      points += 10;
    }
    return (Number(points));
  }

  function firstDigit(num) {
    return (
      Number(String(num).slice(0, 1))
    );
  }

  async function saveUsername() {
    const newPlayerData = {
      'name': name,
      'score': score,
    };

    if (newPlayerData.name !== '' && newPlayerData.score !== undefined) {
      try {
        const response = await fetch('https://calvin-location-guesser.herokuapp.com/players', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newPlayerData)
        });
      }
      catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <View style={globalStyles.container}>
      <StatusBar style="auto" />

      <View style={{ flex: 0.15 }} ></View>

      {!isFinalPage ?
        <>
          <Text style={globalStyles.title}>Results</Text>

          <View style={{ flex: 0.35 }} ></View>

          <View style={globalStyles.ResultsHighlight}>
            <Text style={globalStyles.ResultsButtonText}> Answer: {dropDownAnswer}-{textInputAnswer}</Text>
          </View>

          <View style={{ flex: 0.05 }} ></View>

          <View style={globalStyles.ResultsHighlight}>
            <Text style={globalStyles.ResultsButtonText}>You Guessed: {dropDownGuess}-{textInputGuess}</Text>
          </View>

          <View style={{ flex: 0.05 }} ></View>

          <View style={globalStyles.ResultsHighlight}>
            <Text style={globalStyles.ResultsButtonText}>Your score: {newScore}</Text>
          </View>

          <View style={{ flex: 0.10 }} ></View>

          <View style={{ flex: 0.55 }} ></View>

          {questionNum < 4 ?
            <TouchableHighlight style={globalStyles.button} underlayColor={'#97354E'} onPress={() =>
              navigation.navigate('question', { score: newScore, questions, images, questionNum: questionNum + 1 })
            }>
              <Text style={globalStyles.buttonText}>Next Question</Text>
            </TouchableHighlight>
            :
            <TouchableHighlight style={globalStyles.button} underlayColor={'#97354E'} onPress={() =>
              navigation.navigate('results', { score: newScore, dropDownGuess, textInputGuess, questions, images, questionNum: questionNum + 1 })
            }>
              <Text style={globalStyles.buttonText}>Final Results</Text>
            </TouchableHighlight>
          }
        </>
        :
        <>
          <Text style={globalStyles.title}>Final Results</Text>

          <View style={{ flex: 0.35 }} ></View>

          <View style={globalStyles.ResultsHighlight}>
            <Text style={globalStyles.ResultsButtonText}>Final score: {score}</Text>
          </View>

          <View style={{ flex: 0.05 }} ></View>

          <TextInput
            id="players"
            style={globalStyles.textBox}
            value={name}
            onChangeText={setName}
            placeholder="Enter Name"
            keyboardType="numbers-and-punctuation"
            maxLength={255}
            placeholderTextColor="#424B4C"
            clearButtonMode="unless-editing"
          />

          <View style={{ flex: 0.05 }} ></View>

          <TouchableHighlight style={globalStyles.button} underlayColor={'#97354E'} onPress={() => {
            saveUsername();
            navigation.navigate('leaderboard', { score });
          }}>
            <Text style={globalStyles.buttonText}>Leaderboard</Text>
          </TouchableHighlight>
        </>
      }
    </View>
  );
}
