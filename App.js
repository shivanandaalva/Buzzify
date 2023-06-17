import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomNavigation } from 'react-native-paper';
import Home from './views/Home';
import Settings from './views/Settings'
import LiveTV from './views/LiveTV'
import WebView from './views/WebView'
import { StatusBar } from 'expo-status-bar';
import { TabBarIndicator } from 'react-native-tab-view';





// import Navigation from './views/Navigation';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNav(){
  return(
    <Tab.Navigator
    initialRouteName="Home"
    sceneAnimationEnabled={false}
    screenOptions={{
      tabBarActiveTintColor: '#FE5000',
      tabBarInactiveTintColor:'gray',
      tabBarStyle:{backgroundColor:'white'},
      tabBarLabelStyle:{ fontSize: 12, paddingBottom:5},
      tabBarItemStyle: { width: 100 },
      tabBarAndroidRipple: { borderless: false },
     
  }}
    


  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'News',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="newspaper"  color={color} size={25} />
        ),
      }}
    />
       <Tab.Screen
      name="Live TV"
      component={LiveTV}
      options={{
        tabBarLabel: 'Live TV',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="laptop"  color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
    
      name="Settings"
      component={Settings}
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cog" color={color} size={25} />
        ),
      }}
    />

 

  </Tab.Navigator>
  )
}

export default function App() {

  return (
    <>
     <StatusBar style='auto' />
   

    <NavigationContainer >

 

    <Stack.Navigator independent={true} screenOptions={{headerShown:false, headerTitleAlign:'center',headerTitleStyle:{color:'#C5B4E3'},headerShadowVisible:true, headerStyle: {
            backgroundColor: '#000000',
          },
          }}>
    <Stack.Screen name="Buzzify" component={HomeNav}  />
    <Stack.Screen name="WebView" component={WebView}  />
       </Stack.Navigator>
   
    </NavigationContainer>

    </>
  

  );
}


