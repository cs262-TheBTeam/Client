import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function QuestionScreen({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Where is this location?</Text>
            <Button
                style={globalStyles.button}
                title="Check answers"
                onPress={() => navigation.navigate('R1')}
            />
        </View>
    );
}
