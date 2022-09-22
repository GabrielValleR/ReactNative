import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:{
        flex:1,             
        backgroundColor: "#ffffff",
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop:18,
    },
    form:{
        width:"100%",
    },
    formLabel:{
        color:"#000000",
        fontSize:18,
        paddingLeft:20,
    },
    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
    },
    buttonCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#FF0043",
        paddingTop:13,
        paddingBottom:13,
        MarginLeft:12,
        margin:30,
        marginTop:5,
    },
    textButtonCalculator:{
        fontSize:20,
        color:"#ffffff",
    },
    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20,
    },
    exibitionResultImc:{
        width:"100%",
        height:"50%",
        
    }

    
})

export default styles