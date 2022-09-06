import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container : {flex:1,backgroundColor:"#fff"},
    Header  : {
        textAlign:"center",
        fontSize:24,
        color:"#000",
        marginBottom:10,
    },
    moviePhoto : {
        flexDirection:"column-reverse",
        marginBottom:10,
        width:Dimensions.get('window').width,
        height: Dimensions.get('window').height / 4,
        resizeMode:"stretch",
    },
    movieName : {
        marginLeft:5,
        fontSize:24,
        fontWeight:"700",
        color : "#000"
    },
    description : {
        marginTop:10,
        marginBottom:10,
        marginRight:5,
        fontStyle:"italic",
        marginLeft:5,
        fontSize:16,
        color:"#2C3333",
    },
    options :{
        marginVertical:10,
        elevation:10,
        backgroundColor:"#7F5283",
        marginLeft:5,
        marginRight:10,
        padding:10,
        borderRadius:5,
        color:"#fff",
        fontSize:16,
    },
})