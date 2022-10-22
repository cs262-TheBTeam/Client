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
        backgroundColor: '#D2D6D6',
    },

    title: {
        color: "#424B4C",
        textAlign: "center",
        fontSize: 32,
        fontWeight: "bold"
    },

    text: {
        color: "#424B4C",
        fontSize: 16,
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
        color: "#D2D6D6",
        fontSize: 16,
    },

    bigSpace: {
        flex: 0.2,
    },

    smallSpace: {
        flex: 0.02,
    },

    centerItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        position: 'center',
        height: 210,
        width: 210,
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
