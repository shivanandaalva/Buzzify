import { StyleSheet, View,Image, SafeAreaView,TouchableOpacity,BackHandler} from 'react-native';
import { WebView } from 'react-native-webview';
import { Avatar, Button, Card, Text,Appbar} from 'react-native-paper';
import {React} from 'react';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from "@react-navigation/native"




export default function WebViewNews({route,navigation: { goBack}}) {
  const { link } = route?.params || {};
  // function onBack() {
  //   this.refs[WEBVIEW_REF].goBack();
  // }
    return (

<SafeAreaView style={styles.main}>
 <StatusBar style='auto' hidden={true} />    
 {/* <TouchableOpacity
    // disabled={!this.state.canGoBack}
    // onPress={this.onBack.bind(this)}
    >
    <Text>Go Back</Text>
  </TouchableOpacity> */}
  {/* <TouchableOpacity
    // disabled={!this.state.canGoBack}
    // onPress={this.onBack.bind(this)}
    >
    <Text >Go Back</Text>
  </TouchableOpacity> */}
  <Appbar.Header>
      <Appbar.BackAction  onPress={() => goBack()} />
      <Appbar.Content title="" />
      
    </Appbar.Header>
 <WebView source={{uri:link}}  allowsBackForwardNavigationGestures />  
 </SafeAreaView> 

    
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      justifyContent:'space-evenly',
    },
    main: {
      flex:1,
      flexDirection:'column',
      backgroundColor: '#fff',
      justifyContent:'space-evenly',
    },
  });