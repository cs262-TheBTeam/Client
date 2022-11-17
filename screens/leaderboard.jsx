/* eslint-disable react/prop-types */
import React from 'react';
import { Text, TouchableHighlight, View, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

const data = [
    {
        name: 'Maxwell TrainCar',
        score: 30,
    },
    {
        name: 'Literally Dracula',
        score: 100,
    },
    {
        name: 'Amelia Earhart',
        score: 70,
    },
    {
        name: 'Steve From MineCraft',
        score: 88,
    },
    {
        name: 'Jefferson SteelFlex',
        score: 43,
    },
    {
        name: 'That one guy in the meijer parking lot',
        score: 0,
    },
];


const Item = ({ name, score }) => (
    <View style={globalStyles.leaderboardCell} >
        <Text style = {globalStyles.leaderboardCellText}>{name}: {score}</Text>
    </View>
);


export default function LeaderboardScreen({ route, navigation }) {

    const { score } = route.params;


    const renderItem = ({ item }) => (
        <Item name={item.name} score={item.score} />
    );

    return (
        <View style={globalStyles.leaderboard}>
            <View style={{ flex: 0.10 }}></View>
            <Text style={globalStyles.title}>Leaderboard</Text>
            <View style={{ flex: 0.10 }}></View>
            <FlatList 
                data={data.sort((a, b) => a.score < b.score)}
                renderItem={renderItem} />
            <View style = {globalStyles.leaderboardCell}>
                 <Text style={globalStyles.leaderboardCellText}>Your Score: {score}</Text>
            </View>
            <TouchableHighlight style={globalStyles.button} underlayColor={'#97354E'} onPress={() => navigation.navigate('home', { score: 0 })}>
                <Text style={globalStyles.buttonText}>Return home</Text>
            </TouchableHighlight>
        </View>
    );
}
