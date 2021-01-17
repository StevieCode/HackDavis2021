import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `#34457E`,
        alignItems: 'center',
        paddingVertical: "30%",
    },
    header: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 50,
        color: "white",
        fontSize: 32,
        fontFamily: "Chalkboard SE",
    },
    header2: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 50,
        color: "blue",
        fontSize: 32,
        fontFamily: "Chalkboard SE"
    },
    regText: {
        margin: 8,
        flexDirection: "row",
        fontSize: 15, 
        color: 'white',
        fontFamily: "Chalkboard SE",
    },
    fullName: {
        alignSelf: "center",
        fontWeight: "500",
        fontSize: 30,
        marginTop: 0,
        margin: 8,
        color: 'white',
        fontFamily: "Chalkboard SE",
    },
    changeContainer: {
        fontSize: 20,
        alignSelf: "center",
        marginLeft: 0,
        marginTop: 20,  
    },
    altChangeContainer: {
        fontSize: 20,
        alignSelf: "center",
        marginLeft: 0,
        marginTop: 20,  
    },
    thumbnail: {
        width: "120%",
        height: "35%",
        resizeMode: "contain",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        overlayColor: "#34457E"
    },
    profileImg: {
        height: 120,
        width: 120,
        borderRadius: 60,
    },

    profileImgContainer: {
        marginLeft: 0,
        height: 120,
        width: 120,
        borderRadius: 60,
        overflow: 'hidden',
    },
});