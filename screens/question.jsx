import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function QuestionScreen({ navigation }) {
    return (
        <View style={globalStyles.template}>
            <Text>Where is this location?</Text>
            <Button
                title="Check answers"
                onPress={() => navigation.navigate('results')}
            />
        </View>
    );
}
