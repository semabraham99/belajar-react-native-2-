import React, { useState } from "react"
import { Text, View, StyleSheet, ScrollView, FlatList, TouchableOpacity } from "react-native"
import CardKelasDinamis from "./TesCardDinamis"
import Container1 from "./ContainerCoba"

const HalamanUtama = () =>{
  
  const [kelas, setKelas] = useState([
    {namaMk: 'Pemrograman Mobile', ruang: "S201", waktu: "10.00", key: '1'},
    {namaMk: 'pemrograman jaringan', ruang: "S202", waktu: "11.00", key: '2'},
    {namaMk: 'IOT dan Aplikasinya',ruang: "S203",  waktu: "12.00",  key: '4'},
    {namaMk: 'Machine Learning', ruang: "S204",  waktu: "13.00", key: '3'},
    
  ]);

  const ref = React.useRef(null);
  const [index,setIndex] = useState(0)

  const nextPage = (index) =>{
    if (index === kelas.length - 1) return;
    setIndex(index+1)
  };

  const prevPage = (index) =>{
    if (index === 0) return;
    setIndex(index-1)
  };

  React.useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
    })
  },[index]);
  
  return ( 
  <View>

    <Text>coba text 1</Text> 
    <ScrollView horizontal>
      {
        kelas.map(item => (
          <View key={item.key}>
            <CardKelasDinamis namaMatakuliah={item.namaMk} 
              ruang={item.ruang} 
              waktu={item.waktu}/>
          </View>
        ))
      }
    </ScrollView>
   
    
    <Text>ini contoh 2</Text> 
    <FlatList 
      ref={ref}
      initialScrollIndex={index}
      data={kelas}
      keyExtractor={(item) => item.namaMk}
      renderItem={({item})=>(
        <TouchableOpacity 
          onPress={() => presHandler(item.namaMk, item.key)}>
          <CardKelasDinamis namaMatakuliah={item.namaMk} 
              ruang={item.ruang} 
              waktu={item.waktu}/>
        </TouchableOpacity >
        
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      
    />
     <TouchableOpacity 
        style={styles.button}
        onPress={()=>nextPage(index)}
      />

    <TouchableOpacity 
        style={styles.button}
        onPress={()=>prevPage(index)}
      />  

  </View>)
}

const presHandler = (kelas,key) =>{
  console.log("nama kelas :",kelas, "& key :",key)
}




const ButtonSlider = () => {
  return <View>
    <Text>kotak border - K2</Text>
    <Text>image -K2</Text>
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

  button:{
    height: 30,
    width: 30,

    marginHorizontal: 30,
    marginBottom: 20,

    backgroundColor:"#9CC82F",
    borderRadius: 10
  }

})

export default HalamanUtama


