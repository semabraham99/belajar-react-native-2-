import React from "react";
import { Text, View, StyleSheet} from "react-native";

const CardKelasDinamis = (props) =>{
    return <View style = {styles.card}>
    <Text style = {styles.kelas}>{props.namaMatakuliah}</Text>
    <Text>{props.ruang}</Text>
    <Text>{props.waktu} - </Text>
    <Text>"block to go"</Text>
  </View>
}

const styles = StyleSheet.create({
    kelas:{
      // backgroundColor:'red',
      fontWeight:"bold",
      fontSize:18,
      textAlign:"right"
    },
  
    card: {   
      height: 150,
      width: 310,
      
      marginTop: 40,
      margin: 20,
      padding:(10),
       
      backgroundColor:"#FFC82F", 
      borderRadius: 10  
        
    }, 
})

// export default TestCardDinamis;
export default CardKelasDinamis;