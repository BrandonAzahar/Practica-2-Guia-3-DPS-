import {AppRegistry} from 'react-native';
import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image } from 'react-native';
const DATA = [
 {
 id: '1',
 title: 'Toyota',
 descripcion: 'sadadawd',
 src:require('./src/img/toyota-rav4-png_tcm-1014-1672349.png'),
 
 },
 {
 id: '2',
 title: 'Mazda',
 descripcion: 'sadadawd',
 src:require('./src/img/1366_2000.jpeg'),
 },
 {
 id: '3',
 title: 'Mitsubishi',
 descripcion: 'sadadawd',
 src:require('./src/img/critica-mitsubishi-outlander-sport-2-0-4wd.jpg'),
 },
 
 ];
 const Item = ({ title ,img }) => (
 <View style={styles.item}>
 <Text style={styles.title}>{title}</Text>
 <Image style={styles.img} source={img}/>
 
 </View>
 );

  const Item2 = ({ descripcion }) => (
 <View style={styles.item}>
 <Text style={styles.descripcion}>{descripcion}</Text>
 
 </View>
 );


 const App = () => {
 const renderItem = ({ item }) => (
 <Item title={item.title} img={item.src} />
 );

 return (
 <SafeAreaView style={styles.container}>
 <FlatList
 data={DATA}
 renderItem={renderItem}
 keyExtractor={item => item.id}
 />
 </SafeAreaView>
 );
 }

 const styles = StyleSheet.create({
 container: {
 flex: 1,
 marginTop: StatusBar.currentHeight || 0,
 },
 item: {
 backgroundColor: '#f9c2ff',
 padding: 20,
 marginVertical: 8,
 marginHorizontal: 16,
 borderWidth: 2,
 borderColor:'#d35647',
 resizeMode:'contain',
 margin:8,
 },

 img:{
   width:200,
   height:100,
   borderWidth:2,
   borderColor:'#d35647',
   resizeMode:'contain',
   margin:8


 },




 title: {
 fontSize: 32,
 },
 });
export default App;
