import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `#556789`,
        marginTop: 120,
        alignItems: 'center',
    },
    header: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 50,
        color: "white",
        fontSize: 32.
    },
    regText: {
        margin: 8,
        flexDirection: "row",
        fontSize: 15, 
        color: 'white',
    },
    fullName: {
        alignSelf: "center",
        fontWeight: "500",
        fontSize: 30,
        marginTop: 0,
        margin: 8,
        color: 'white',
    },
    changeContainer: {
        fontSize: 20,
        alignSelf: "center",
        marginLeft: 10,
        marginTop: 50,  
    },
    altChangeContainer: {
        fontSize: 20,
        alignSelf: "center",
        marginLeft: 0,
        marginTop: 50,  
    },
    thumbnail: {
        width: "100%",
        height: "50%",
        resizeMode: "contain",
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
    
});