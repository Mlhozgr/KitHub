import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
     
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:'#009317',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor:'#009337',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor:'#009357',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor:'#009377',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>

);

export default MainTabScreen;



const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{headerStyle:{
      backgroundColor: '#009317' },
      headerTintColor:'#fff',
      headerTitleStyle :{
        fontWeight:'bold' }
      }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title:'Overview',
      headerLeft: () => (
        <Icon.Button name='md-menu' size={28}
        backgroundColor="#009317" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
    </HomeStack.Navigator>);
    
    const DetailsStackScreen = ({navigation}) => (
    <DetailStack.Navigator screenOptions={{headerStyle:{
      backgroundColor: '#009387' },
      headerTintColor:'#fff',
      headerTitleStyle :{
        fontWeight:'bold' }
      }}>
    <DetailStack.Screen name="Details" component={DetailsScreen} options={{headerLeft: () => (
        <Icon.Button name="md-menu" size={28}
        backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
      
    }} />
    </DetailStack.Navigator> );