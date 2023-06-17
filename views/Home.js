import { StyleSheet, View,Image, SafeAreaView} from 'react-native';
import { Avatar, Button, Card, Text} from 'react-native-paper';
import {React,useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack'




import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Headlines from './Headlines'
import World from './World'
import Business from './Business'
import Technology from './Technology'
import Entertainment from './Entertainment'
import Sports from './Sports'
import Science from './Science'
import Health from './Health'

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
export default function Home() {
 

    return (
<>
      <StatusBar style='auto' />
<Tab.Navigator 


screenOptions={{
  tabBarAndroidRipple: { borderless: true },
  tabBarLabelStyle: { fontSize: 10 },
  tabBarItemStyle: {width: 120},
  tabBarScrollEnabled: true, tabBarStyle:{backgroundColor:'#fff'}, tabBarIndicatorStyle:{
        backgroundColor:'#FE5000',
        height:2,
       
    } }}>
      <Tab.Screen name="Headlines" component={Headlines}/>
      {/* <Tab.Screen name="World" component={World} />
      <Tab.Screen name="Business" component={Business}/>
      <Tab.Screen name="Technology" component={Technology} />
      <Tab.Screen name="Entertainment" component={Entertainment}/>
      <Tab.Screen name="Sports" component={Sports} />
      <Tab.Screen name="Science" component={Science}/>
      <Tab.Screen name="Health" component={Health} /> */}
      
   
     
   
    </Tab.Navigator>
   
    </>

      

    
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