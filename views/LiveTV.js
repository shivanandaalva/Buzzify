  import { StyleSheet, View,Image, SafeAreaView} from 'react-native';
  import { Avatar, Button, Card, Text} from 'react-native-paper';
  import {React,useState,useRef} from 'react';
  import { StatusBar } from 'expo-status-bar';
  import { WebView } from 'react-native-webview';

  const HTML = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <script src="https://unpkg.com/videojs-flash/dist/videojs-flash.js"></script>
  <script src="https://unpkg.com/videojs-contrib-hls/dist/videojs-contrib-hls.js"></script>
  <script src="video.js"></script>
        <script src="videojs-contrib-hls.min.js"></script>
        <script>
        var player = videojs('example-video');
        player.play();
        </script>

  </head>
  <body>
  <center>
  
      <h4>Aaj Tak</h4>

      <video preload="auto" playsinline id=example-video width=350 height=250 class="video-js vjs-default-skin" controls>
          <source 
            src="https://feeds.intoday.in/aajtak/api/master.m3u8"
            type="application/x-mpegURL">
        </video>
     
       <h4>IndiaTV</h4>

        <video preload="auto" id=example-video width=350 height=250 class="video-js vjs-default-skin" controls>
          <source
            src="
            https://pl-indiatvnews.akamaized.net/out/v1/db79179b608641ceaa5a4d0dd0dca8da/index.m3u8"
            type="application/x-mpegURL">
        </video>

        <h4>NDTV India</h4>
      
        <video id=example-video width=350 height=250 class="video-js vjs-default-skin" controls>
          <source
            src="
            https://ndtvindiaelemarchana.akamaized.net/hls/live/2003679-b/ndtvindia/masterb_480p@5.m3u8"
            type="application/x-mpegURL">
        </video>
 
        <h4>Republic TV</h4>

        <video  preload="auto"   id=example-video width=350 height=250 class="video-js vjs-default-skin" controls>
          <source 
            src="
            https://weblive.republicworld.com/httppush/ottr_republic_english/chunklist_3.m3u8"
            type="application/x-mpegURL">
        </video>
    
        <h4>Zee News</h4>
 
        <video preload="auto"  id=example-video width=350 height=250 class="video-js vjs-default-skin" controls>
          <source 
            src="
            https://d233nwklwv8p4.cloudfront.net/out/v1/860cb318d23a4c64b58c9d625281170c/index_6.m3u8"
            type="application/x-mpegURL">
        </video>
     
        
        <h4>DW</h4>

        <video preload="auto" id=example-video width=350 height=250 class="video-js vjs-default-skin" controls >
          <source 
            src="
            https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/stream02/streamPlaylist.m3u8"
            type="application/x-mpegURL">
        </video>

        </center>
   
            
  </body>
  </html>
  `;




  export default function LiveTV() {
    



      return (


          <SafeAreaView style={styles.main}>

        
      
          <WebView
          originWhitelist={['*']}
          source={{ html:HTML }}
          style={styles.webview}
        />



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