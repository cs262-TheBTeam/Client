/* eslint-disable react/prop-types */
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/global';


export default function ResultsScreen({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Results:</Text>
            <Text style={globalStyles.result}>Buidling:</Text>
            <Text style={globalStyles.result}>Floor:</Text>
            <Text style={globalStyles.result}>Room:</Text>
            <Text style={globalStyles.result}>Total:</Text>

            <StatusBar style="auto" />
            <TouchableOpacity
                style={globalStyles.button}
                onPress={() => navigation.navigate('final')}
            >
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    );
}