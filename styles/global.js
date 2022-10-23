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
        //alignItems: 'center',
        //justifyContent: 'center',
        paddingVertical: 40,
    },

    leaderboardCell: {
        backgroundColor: '#F4E367',
        borderColor: '#BF4A67',
        borderBottomWidth: 5,
        borderTopWidth: 5,
        color: "#424B4C",
        fontSize: 16,
        textAlign: 'left',
        paddingVertical: 20,
        paddingHorizontal: 10,
    }

});
