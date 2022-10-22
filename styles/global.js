import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    template: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    // WIP styles
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    },


    button: {
        backgroundColor: "#bf4a67",
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginHorizontal: 80,
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
    },


    result: {
        marginTop: 16,
        paddingVertical: 16,
        color: "#20232a",
        textAlign: "left",
        fontSize: 20,
        fontWeight: "bold"
    },


    leaderboard: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20%',
    },

});
