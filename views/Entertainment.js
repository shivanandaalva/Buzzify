import { StyleSheet,ScrollView, View,Image, SafeAreaView,Text,Linking,TouchableOpacity} from 'react-native';
import { Avatar, Button, Card,List,Divider} from 'react-native-paper';
import {React,useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';



import * as rssParser from 'react-native-rss-parser';


export default function Headlines({navigation}) {
  const [entertainment, setentertainment] = useState([]);
  useEffect(() => {
    setTimeout(()=>{
    async function fetchData() {
    await fetch('https://news.google.com/rss/topics/CAAqKggKIiRDQkFTRlFvSUwyMHZNREpxYW5RU0JXVnVMVWRDR2dKSlRpZ0FQAQ?hl')
    .then((response) => response.text())
  .then((responseData) => rssParser.parse(responseData))
  .then((rss) => {
    setentertainment(rss.items)
    // console.log(rss);
    // console.log(rss.image.url);
    // console.log(rss.items);
  });
}
  fetchData();
},6000);
  },[]);

  

  const data=  entertainment.map((data)=>(data.links.map((e)=>
  // <TouchableOpacity onPress={()=>{
  //   navigation.navigate('WebView', {link: 'https://www.google.com'})
   
  //   // <WebView source={{ uri: e.url }} style={{ flex: 1 }} />
  //   // Linking.openURL(e.url)
  //   // Linking.openURL(data.links.map((e)=>e.url))
  // }}>
  // <Text >{data.title}</Text>
  //  </TouchableOpacity>
  // ))

//     <List.Item key={data.id}
// description= {data.title}
// onPress={()=>{
//   navigation.navigate('WebViewNews',{link:e.url})
// }}
// />

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
   

  ))
)

    return (


         <SafeAreaView style={styles.main} >

         <ScrollView>
        
         {data}

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