import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `#34457E`,
    },
    header: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 0,
    },
    inputContainer: {
        margin: 32,
        flexDirection: "row",
    },
    title: {
        alignSelf: "center",
        fontWeight: "500",
        fontSize: 30,
        marginTop: 80,
    },
    curContainer: {
        fontSize: 20,
        alignSelf: "center",
        marginLeft: "35%",
        marginTop: "20%",
    },
    goalContainer: {
        fontSize: 20,
        alignSelf: "center",
        marginLeft: "35%",
        marginTop: "50%",
    },
    waterText: {
        fontSize: 20,
        alignSelf: "center",
        color: "black",
        fontWeight: "500",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',

    },
    arrow: {
        resizeMode: "contain",
        width: 50,
        height: 50,
        alignSelf: "center",
    }
})