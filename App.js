import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {GestureHandlerRootView} from "react-native-gesture-handler"
import 'react-native-gesture-handler';
import Routes from './Src/Common/Routes';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons, FontAwesome5, Entypo } from '@expo/vector-icons';

// Import the screens
import Home from "./Src/Screens/Home";
import Profile from "./Src/Screens/Profile";
import Shelter from "./Src/Screens/Shelter";
import Clinic from "./Src/Screens/Clinic";
import Shop from "./Src/Screens/Shop";
import Blog from "./Src/Screens/Blog";
import LogIn from "./Src/Screens/LogIn";
import Logo from './Src/Components/Logo';

// Create the drawer navigator and bottom tab navigator
const Drawer = createDrawerNavigator();
const BottomTab = createMaterialBottomTabNavigator();

// Define the bottom tab navigator screens
function HomeTabs() {
  return (
    <BottomTab.Navigator
      barStyle={{ backgroundColor: 'black' }}
      activeColor="#ff642e"
      inactiveColor="#ff642e"
      shifting={true}
    >
      <BottomTab.Screen
        name={Routes.Home}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={Routes.Shelter}
        component={Shelter}
        options={{
          tabBarLabel: 'Shelter',
          tabBarIcon: ({ color }) => (
            <Ionicons name="paw" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={Routes.Clinic}
        component={Clinic}
        options={{
          tabBarLabel: 'Clinic',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="hospital" size={24} color={color} />
            
          ),
        }}
      />
      <BottomTab.Screen
        name={Routes.Shop}
        component={Shop}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ color }) => (
            <Entypo name="shopping-cart" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={Routes.Blog}
        component={Blog}
        options={{
          tabBarLabel: 'Blog',
          tabBarIcon: ({ color }) => (
            <Ionicons name="book" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// Main component of the app
export default function App() {
  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Drawer.Navigator  >
        
        <Drawer.Screen name={Routes.Home} component={HomeTabs} options={{
            headerTitle: (props) => <Logo {...props} />,
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleContainerStyle: {
              alignItems: 'center',
              justifyContent: 'center',
            },
            headerTintColor:"#ff642e"
          }}
        />
        <Drawer.Screen name={Routes.Profile} component={Profile} />
        <Drawer.Screen name={Routes.LogIn} component={LogIn} />
      </Drawer.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView >
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
