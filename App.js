import React from 'react';
import { StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

// Bottom tabs
import HomeScreen from './screens/HomeScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import SocialScreen from './screens/SocialScreen.js';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoadingScreen from './screens/LoadingScreen';

//import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import firebase from 'firebase';

const AppTabs = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Ionicons name="ios-home" size={24} color = {tintColor} />
    } 
  },
  Social: {
    screen: SocialScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Ionicons name="globe-outline" size = {24} color = {tintColor}/>   
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Ionicons name="person-circle-outline" size = {24} color = {tintColor}/>    
    }
  },
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: {
        screen: LoadingScreen,
        path: "load"
      }, 
      Auth: {
        screen: AuthStack,
        path: "auth",
      },
      App: {
        screen: AppTabs,
        path: "app",
      },   
    },
    {
      initialRouteName: "Loading"
    }
  )
);


const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
