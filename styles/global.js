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
        backgroundColor: '#E6E6E6',
    },

    unpaddedContainer: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },

    title: {
        color: "#424B4C",
        textAlign: "center",
        fontSize: 32,
        fontWeight: "bold"
    },

    subtitle: {
        color: "#424B4C",
        textAlign: "center",
        fontSize: 26,
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

        // #ffffff
        // D2D6D6
    },

    textBox: {
        fontSize: 16,
        color: "#424B4C",
        backgroundColor: "#F4E367",
        borderRadius: 28,
        borderColor: "#bf4a67",
        borderWidth: 5,
        textAlign: 'center',
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginHorizontal: 60,
    },

    dropDown: {
        color: "#424B4C",
        backgroundColor: "#F4E367",
        borderRadius: 28,
        borderColor: "#bf4a67",
        borderWidth: 5,
        paddingVertical: 20,
        paddingHorizontal: 30,

    },

    dropDownText: {
        fontSize: 16,
        color: "#424B4C"
    },


    centerItem: {
        justifyContent: 'center',
        alignItems: 'center',
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
        backgroundColor: '#E6E6E6',
        paddingVertical: 40,
        
        
    },

    leaderboardCell: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#424B4C",
        borderRadius: 28,
        borderColor: "#bf4a67",
        backgroundColor: "#F4E367",
        borderWidth: 5,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginVertical: 3,
        marginHorizontal: 30,

    },


    leaderboardCellText: {
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 'bold',
    },
 


    ResultsHighlight: {
        backgroundColor: "#F4E367",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginHorizontal: 10,
        borderRadius: 28,
        borderColor: "#bf4a67",
        borderWidth: 5,

    },

    ResultsbuttonText: {
       color: "#424B4C",
        fontSize: 20,
        fontWeight: 'bold'
    }
});