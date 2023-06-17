import { StyleSheet, View,Image, SafeAreaView} from 'react-native';

import { Avatar, Button, Card, Text} from 'react-native-paper';
import {React} from 'react';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from "@react-navigation/native"




export default function WebView({route}) {
  const { link } = route?.params || {};
    return (
/* <SafeAreaView style={styles.main}>
<View style={styles.container}>
    <Text>TEST</Text>
</View>
</SafeAreaView> */
 <WebView source={link} style={{ flex: 1 }} />  

    
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