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
        alignItems: 'center',
        right: 40,
        left: 40,
        position: 'absolute',
        bottom: 40,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'cyan',
    },

    result:{
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
