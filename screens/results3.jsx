import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ResultsScreen3({ navigation }) {
    return (
        <View style={globalStyles.template}>
            <Text>Answer: Science Building SB010-</Text>
            <StatusBar style="auto" />
            <Button
                title="Next"
                onPress={() => navigation.navigate('final')}
            />
        </View>
    );
}