import React from 'react';
import { Button, Text, TouchableHighlight, View, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

const data = [
    {
        name: 'player5',
        score: 30,
    },
    {
        name: 'player1',
        score: 100,
    },
    {
        name: 'player3',
        score: 70,
    },
    {
        name: 'player2',
        score: 88,
    },
    {
        name: 'player4',
        score: 43,
    },
];

const Item = ({ name, score }) => (
    <View >
        <Text style={globalStyles.leaderboardCell}>{name}: {score}</Text>
    </View>
);

export default function LeaderboardScreen({ route, navigation }) {

    const { playerScore } = route.params

    const renderItem = ({ item }) => (
        <Item name={item.name} score={item.score} />
    );

    return (
        <View style={globalStyles.leaderboard}>
            <Text style={globalStyles.title}>Leaderboard</Text>
            <FlatList
                data={data.sort((a, b) => a.score < b.score)}
                renderItem={renderItem} />
            <Text style={globalStyles.leaderboardCell}>Your Score: {playerScore}</Text>
            <TouchableHighlight style={globalStyles.button} underlayColor={'#97354E'} onPress={() => navigation.navigate('home', { playerScore: 0 })}>
                <Text style={globalStyles.buttonText}>Return home</Text>
            </TouchableHighlight>
        </View>
    );
}
