import { StyleSheet } from "react-native";

export default StyleSheet.create({
    image : {
        marginLeft:5,
        width:75,
        height: 100,
        borderRadius:10,
        resizeMode:"contain",
    },
    Content : {
        marginLeft:5,
        justifyContent:"space-between",
    },
    MovieTitle : {
        fontSize:20,
        color:"#000",
        fontWeight:"bold",
    },
    description : {
        fontSize:14,
        color:"#333",
        
    },
    rated : {
        fontSize:16,
        color:"#A25B5B",
    },
})