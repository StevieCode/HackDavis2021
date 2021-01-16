import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        marginTop: 30,
        fontSize: 18,
        fontWeight: "300",
        textAlign: 'center',
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
        color: "#8A8F9E",
        fontSize: 12,
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: .5,
        height: 40,
        fontSize: 14,
        color: "black",
    },
    button: {
        marginBottom: 15,
        backgroundColor: '#f7287b',
        marginHorizontal: 30,
        borderRadius: 4,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    signup: {
        backgroundColor: 'white',
        marginBottom: 15,
        marginHorizontal: 30,
        borderRadius: 4,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },

});