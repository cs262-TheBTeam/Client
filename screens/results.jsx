/* eslint-disable spellcheck/spell-checker */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableHighlight, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ResultsScreen1({ route, navigation }) {

  const { score, dropDownGuess, textInputGuess, questions, images, questionNum } = route.params;

  const dropDownAnswer = questions[questionNum].buildingcode;
  const textInputAnswer = questions[questionNum].roomnumber;

  const pointsToAdd = calculatePoints(dropDownGuess, dropDownAnswer, textInputGuess, textInputAnswer);
  const newScore = score + pointsToAdd;


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


  return (
    <View style={globalStyles.container}>
      <StatusBar style="auto" />

      <View style={{ flex: 0.55 }} ></View>

      {/* title */}
      <Text style={globalStyles.title}>Results</Text>

      {/* div */}

      <View style={{ flex: 0.55 }} ></View>

      {/* button1 */}
      <View style={globalStyles.ResultsHighlight}>
        <Text style={globalStyles.ResultsButtonText}> Answer: {dropDownAnswer}-{textInputAnswer}</Text>
      </View>

      {/* div */}

      <View style={{ flex: 0.05 }} ></View>

      {/* button2 */}
      <View style={globalStyles.ResultsHighlight}>
        <Text style={globalStyles.ResultsButtonText}>You Guessed: {dropDownGuess}-{textInputGuess}</Text>
      </View>

      <View style={{ flex: 0.05 }} ></View>

      {/* button3 */}
      <View style={globalStyles.ResultsHighlight}>
        <Text style={globalStyles.ResultsButtonText}>Your score: {newScore}</Text>
      </View>

      <View style={{ flex: 0.55 }} ></View>


      <TouchableHighlight style={globalStyles.button} underlayColor={'#97354E'} onPress={() =>
        questionNum < 4 ? navigation.navigate('question', { score: newScore, questions, images, questionNum: questionNum + 1 })
          : navigation.navigate('leaderboard', { score: newScore })


      }>
        <Text style={globalStyles.buttonText}>Next Question</Text>
      </TouchableHighlight>

      <View style={{ flex: 0.55 }} ></View>

    </View >

  );
}

