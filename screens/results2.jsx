import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ResultsScreen2({ navigation }) {
    return (
        <View style={globalStyles.template}>
            <Text>Answer: North Hall 064-</Text>
            <StatusBar style="auto" />
            <Button
                title="Next"
                onPress={() => navigation.navigate('question3')}
            />
        </View>
    );
}