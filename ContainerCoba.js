import React from "react"
import { Text, View, StyleSheet, ScrollView } from "react-native"

const Container1 = () =>{
    return (
    <ScrollView horizontal >
        <View style = {styles.std}>
        <View style = {styles.st1} >
            <Text>tes container </Text>
        </View>
        
        <View style = {styles.st2} >
            <Text>tes container 2 </Text>
        </View>

        <View style = {styles.st3} >
            <Text>tes container 3 </Text>
        </View>

        <View style = {styles.st1} >
            <Text>tes container </Text>
        </View>
        
      
    </View> 
    </ScrollView>
    );
        
     
    
    
}

const styles = StyleSheet.create({
    std:{
        backgroundColor: 'red',
        height:200,
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-between"
        // flex: 1
    }, 
    st1:{
        backgroundColor: 'blue',
        width: 80,
        height:40,
    },
    st2:{
        backgroundColor: 'purple',
        width: 100,
        height:80,
    },
    st3:{
        backgroundColor: 'green',
        width: 50,
        height:120,
    },
})

export default Container1