import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "black",
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
    goal: {
        alignSelf: "center",
        fontSize: 20,
        marginTop: 20,
    },
    current: {
        alignSelf: "center",
        fontSize: 20,
        marginTop: 20,
    },
    updateCurButton: {
        alignSelf: "center",
        fontSize: 20,
        marginTop: 20,
    },
    updateGoalButton: {
        alignSelf: "center",
        fontSize: 20,
        marginTop: 20,
    }
})