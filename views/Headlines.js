import { StyleSheet,ScrollView, View,Image, SafeAreaView,Text,Linking,TouchableOpacity,RefreshControl} from 'react-native';
import { Avatar, Button, Card,List,Divider,ActivityIndicator} from 'react-native-paper';

import {React,useState,useEffect,useCallback} from 'react';
import { StatusBar } from 'expo-status-bar';




import * as rssParser from 'react-native-rss-parser';


export default function Headlines({navigation}) {
  const [headlines, setheadlines] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    async function fetchData() {
      await fetch('https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFZxYUdjU0FtVnVHZ0pWVXlnQVAB')
      .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
      setheadlines(rss.items)
      // console.log(rss);
      // console.log(rss.image.url);
      // console.log(rss.items);
    });
  }
  fetchData();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    async function fetchData() {
    await fetch('https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFZxYUdjU0FtVnVHZ0pWVXlnQVAB')
    .then((response) => response.text())
  .then((responseData) => rssParser.parse(responseData))
  .then((rss) => {
    setheadlines(rss.items)
    // console.log(rss);
    // console.log(rss.image.url);
    // console.log(rss.items);
  });
}

  
  fetchData();
  },[]);

  

  const data=  headlines.map((data)=>(data.links.map((e)=>
  // <TouchableOpacity onPress={()=>{
  //   navigation.navigate('WebView', {link: 'https://www.google.com'})
   
  //   // <WebView source={{ uri: e.url }} style={{ flex: 1 }} />
  //   // Linking.openURL(e.url)
  //   // Linking.openURL(data.links.map((e)=>e.url))
  // }}>
  // <Text >{data.title}</Text>
  //  </TouchableOpacity>
  // ))



//  <List.Item  key={data.id}
// description= {data.title}
// onPress={()=>{
//   // console.log(e.url)
//   navigation.navigate('WebViewNews',{link:e.url})
// }}

   <View key={data.id} style={{padding:5,margin:2}} >
<Card style={{backgroundColor:'#fff'}} onPress={()=>{
   // console.log(e.url)
   navigation.navigate('WebViewNews',{link:e.url})
 }}>
   
    <Card.Content>
      <Text variant="titleLarge">{data.title}</Text>
    </Card.Content>
    {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
  </Card>
</View>



 



/* <Card style={{backgroundColor:'#fff'}} onPress={()=>{navigation.navigate('WebView',{link:e.url})}}>
<Card.Content>
  <Text variant="titleLarge">{data.title}</Text>
</Card.Content>
</Card> */

  ))
 
)

    return (


         <SafeAreaView style={styles.main} >

         <ScrollView refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>

{!headlines?
<ActivityIndicator animating={true} color={'#FE5000'}/>
  :data}
     
         </ScrollView>

         <StatusBar style='auto' />
        
       </SafeAreaView>

    
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      justifyContent:'space-evenly',
    },
    main: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#fff',
      justifyContent:'space-evenly',
      
    },
  });