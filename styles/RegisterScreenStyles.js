import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `#34457E`,
    },
    title: {
        marginTop: 30,
        fontSize: 18,
        fontWeight: "300",
        textAlign: 'center',
        color: "white",
    },
    error: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    errorText: {
        color: '#f7287b',
        fontWeight: '600',
        textAlign: 'center',
    },
    form: {
        marginBottom: 50,
        marginHorizontal: 30,
        
    },
    inputTitle: {
        color: "white",
        fontSize: 18,
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: .5,
        height: 40,
        fontSize: 14,
        color: "white",
    },
    button: {
        marginBottom: 15,
        backgroundColor: '#7D8AB6',
        marginHorizontal: 30,
        borderRadius: 4,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    signup: {
        backgroundColor: `#34457E`,
        marginBottom: 15,
        marginHorizontal: 30,
        borderRadius: 4,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },

});