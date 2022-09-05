import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    Homecontainer : {
        flex:1,
    },
    HomeTitle : {
        fontSize:24,
        textAlign:"center",
        color:"#000",
    },
    seperator: {
        width: Dimensions.get('window').width,
        height: 1,
        backgroundColor: '#1d1d1d',
      },
})