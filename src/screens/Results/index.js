import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

//  For when we convert to TS
// export interface Props {
//   navigation: ;
// }

function ResultsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Result:</Text>
            <StatusBar style="auto" />
            <Button
                title="Go Home"
                onPress={() => navigation.navigate('Home')}
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

export { ResultsScreen }


