/* eslint-disable spellcheck/spell-checker */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Text, TouchableHighlight, View, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

const Item = ({ name, score }) => (
    <View style={globalStyles.leaderboardCell} >
        <Text style={globalStyles.leaderboardCellText}>{name}: {score}</Text>
    </View>
);

export default function LeaderboardScreen({ route, navigation }) {
    const [data, setData] = useState([]);
    const getPlayers = async () => {
        try {
            const response = await fetch('https://calvin-location-guesser.herokuapp.com/players');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        }
    }

    const { score } = route.params;

    const renderItem = ({ item }) => (
        <Item name={item.name} score={item.score} />
    );

    useEffect(() => {
        getPlayers();
    }, []);

    return (
        <View style={globalStyles.leaderboard}>
            <View style={{ flex: 0.10 }}></View>
            <Text style={globalStyles.title}>Leaderboard</Text>
            <View style={{ flex: 0.10 }}></View>
            <FlatList
                data={data.sort((a, b) => a.score < b.score)}
                renderItem={renderItem} />

            <View style={globalStyles.leaderboardCell}>
                <Text style={globalStyles.leaderboardCellText}>Your Score: {score}</Text>

            </View>
            <TouchableHighlight style={globalStyles.button} underlayColor={'#97354E'} onPress={() => navigation.navigate('home', { score: 0 })}>
                <Text style={globalStyles.buttonText}>Return home</Text>
            </TouchableHighlight>
        </View>
    );
}
