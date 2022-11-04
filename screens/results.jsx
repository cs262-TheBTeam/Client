import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, TouchableHighlight, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ResultsScreen1({ route, navigation }) {

    const { score, dropDownGuess, textInputGuess, questions, questionNum } = route.params;

    const dropDownAnswer = questions[questionNum].buildingCode;
    const textInputAnswer = questions[questionNum].roomNumber;

    const pointsToAdd = calculatePoints(dropDownGuess, dropDownAnswer, textInputGuess, textInputAnswer);
    const newScore = score + pointsToAdd;


    function calculatePoints(ddGuess, ddAnswer, tiGuess, tiAnswer) {
        let points = 0;
        if (ddGuess === ddAnswer) {
            points += 1;
        };
        if (firstDigit(tiGuess) === firstDigit(tiAnswer)) {
            points += 3;
        };
        if (Number(tiGuess) === Number(tiAnswer)) {
            points += 10;
        };
        return (points);
    };
    function firstDigit(num) {
        return (
            Number(String(num).slice(0, 1))
        );
    };


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
        <Text style={globalStyles.ResultsbuttonText}> Answer: {dropDownAnswer}-{textInputAnswer}</Text>
      </View>

      {/* div */}

      <View style={{ flex: 0.05 }} ></View>

      {/* button2 */}
      <View style={globalStyles.ResultsHighlight}>
        <Text style={globalStyles.ResultsbuttonText}>You Guessed: {dropDownGuess}-{textInputGuess}</Text>
      </View>

      <View style={{ flex: 0.05 }} ></View>

      {/* button3 */}
      <View style={globalStyles.ResultsHighlight}>
        <Text style={globalStyles.ResultsbuttonText}>Your score: {newScore}</Text>
      </View>

      <View style={{ flex: 0.55 }} ></View>


      <TouchableHighlight style={globalStyles.button} underlayColor={'#97354E'} onPress={() =>
                questionNum < 2 ? navigation.navigate('question', { playerScore: newScore, questions, questionNum: questionNum + 1 })
                    : navigation.navigate('leaderboard', { playerScore: newScore })
            }>
                <Text style={globalStyles.buttonText}>Next Question</Text>
            </TouchableHighlight>

            <View style={{ flex: 0.55 }} ></View>
    
    </View >
        
    );
}


// {<View style={globalStyles.template}>
//             <Text>Answer: {dropDownAnswer}-{textInputAnswer}</Text>
//             <Text>You guessed: {dropDownGuess}-{textInputGuess}</Text>
//             <Text>Your score: {newScore}</Text>
//             <StatusBar style="auto" />
//             <TouchableHighlight style={globalStyles.button} underlayColor={'#97354E'} onPress={() =>
//                 questionNum < 2 ? navigation.navigate('question', { playerScore: newScore, questions, questionNum: questionNum + 1 })
//                     : navigation.navigate('leaderboard', { playerScore: newScore })
//             }>
//                 <Text style={globalStyles.buttonText}>Next</Text>
//             </TouchableHighlight>
//         </View> }