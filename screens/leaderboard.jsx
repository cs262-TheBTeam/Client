import React from 'react';
import { useEffect } from 'react';
import { Button, Text, TouchableHighlight, View, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

// const data = [
//     {
//         name: 'Maxwell Traincar',
//         score: 30,
//     },
//     {
//         name: 'Literally Dracula',
//         score: 100,
//     },
//     {
//         name: 'Amelia Earhart',
//         score: 70,
//     },
//     {
//         name: 'Steve From Minecraft',
//         score: 88,
//     },
//     {
//         name: 'Jefferson Steelflex',
//         score: 43,
//     },
//     {
//         name: 'That one guy in the mejier parking lot',
//         score: 0,
//     },
// ];

const Item = ({ name, score }) => (
    <View style={globalStyles.leaderboardCell} >
        <Text style = {globalStyles.leaderboardCellText}>{name}: {score}</Text>
    </View>
);

export default function LeaderboardScreen({ route, navigation }) {
    const [data, setData] = useState([]);
    const getPlayers = async () => {
        try {
            const response = await fetch ('https://calvin-location-guesser.herokuapp.com/players');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);

        }
    }
    const { playerScore } = route.params

    const renderItem = ({ item }) => (
        <Item name={item.name} score={item.score} 
        
        />

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
            <View style = {globalStyles.leaderboardCell}>
                 <Text style={globalStyles.leaderboardCellText}>Your Score: {playerScore}</Text>
            </View>
            <TouchableHighlight style={globalStyles.button} underlayColor={'#97354E'} onPress={() => navigation.navigate('home', { playerScore: 0 })}>
                <Text style={globalStyles.buttonText}>Return home</Text>
            </TouchableHighlight>
        </View>
    );
}
