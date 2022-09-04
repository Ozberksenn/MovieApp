import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container :{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#F9F2ED"
    },
    logoContainer : {
        alignItems:"center",
        marginBottom:30,
    },
    logo : {
        width:Dimensions.get('window').width / 1.2, 
        height: Dimensions.get('window').height / 3,
        resizeMode:"contain",
    },
    titleSignIn : {
        fontSize:36,
        color:"#395B64",
        textAlign:"center",
        fontWeight:"400",
        marginBottom:20,
    },
    accountText : {
        textAlign:"center",
        fontSize:16,
    }
})