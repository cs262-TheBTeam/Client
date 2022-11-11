/* eslint-disable react/prop-types */
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function FinalScreen({ navigation }) {
    return (
        <View style={globalStyles.template}>
            <Text>Here is your final score:</Text>
            <StatusBar style="auto" />
            <Button
                title="Go Home"
                onPress={() => navigation.navigate('home')}
            />
        </View>
    );
}