import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ResultsScreen1({ route, navigation }) {

    const { score, dropDownGuess, textInputGuess, dropDownAnswer, textInputAnswer } = route.params;
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
        <View style={globalStyles.template}>
            <Text>Answer: {dropDownAnswer}-{textInputAnswer}</Text>
            <Text>You guessed: {dropDownGuess}-{textInputGuess}</Text>
            <Text>Your score: {newScore}</Text>
            <StatusBar style="auto" />
            <Button
                title="Next"
                onPress={() => navigation.navigate('question2', { score: newScore })}
            />
        </View>
    );
}
