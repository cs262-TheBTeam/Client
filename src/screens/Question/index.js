import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

//  For when we convert to TS
// export interface Props {
//   navigation: ;
// }

function QuestionScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Question:</Text>
            <StatusBar style="auto" />
            <Button
                title="See Results"
                onPress={() => navigation.navigate('R1')}
            />
        </View>
    );
}

//  We should use external css files
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { QuestionScreen }


