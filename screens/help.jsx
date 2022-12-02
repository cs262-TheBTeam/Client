/* eslint-disable react/prop-types */
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/global';


export default function HelpScreen({ navigation }) {
    return (
        <View style={globalStyles.container}>

            <View style={{ flex: 0.1 }} ></View>

            <Text style={globalStyles.title}>How to play the Game:</Text>
            <Text style={globalStyles.result}>1. You will be presented with five questions, each with a set of four images from a random classroom around campus.</Text>
            <Text style={globalStyles.result}>2. Using the dropdown box and text box, you can identify the building and room number of the classroom show. </Text>
            <Text style={globalStyles.result}>3. You receive points based on how accurate you are: </Text>
            <Text style={globalStyles.result}>- 2 points for guessing the building </Text>
            <Text style={globalStyles.result}>- 3 points for guessing the floor (the first number of the classroom) </Text>
            <Text style={globalStyles.result}>- 10 points for guessing the full room number </Text>
            <Text style={globalStyles.result}>4. If you'd like, you can submit your name to put yourself up on the leaderboard. </Text>

            <View style={{ flex: 0.3 }} ></View>

            <StatusBar style="auto" />
            <TouchableOpacity
                style={globalStyles.button}
                onPress={() => navigation.navigate('home')}
            >
                <Text style={globalStyles.buttonText}>Home</Text>
            </TouchableOpacity>
        </View>
    );
}