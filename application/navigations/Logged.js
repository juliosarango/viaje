import React from 'react';
import RestaurantsScreen from '../screens/restaurants/Restaurants';
import AddRestaurantsScreen from '../screens/restaurants/AddRestaurant';
import LogoutScreen from '../screens/Logout';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import navigationOptions from './Helper';
import leftIcon from './Helper';
import rightIcon from './Helper';

const restaurantScreensStack = createStackNavigator(
  {
    ListRestaurants: {
      screen: RestaurantsScreen,
      navigationOptions: ({navigation}) => ({
        ...navigationOptions,
        title: 'Restaurantes',        
        headerLeft : leftIcon(navigation, 'bars')
      })
    },
    AddRestaurant: {
      screen: AddRestaurantsScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Agregar Restaurant',        
      })
    }

  },  
  navigationOptions    
);

const logoutScreenStack = createStackNavigator(
  {
    LogoutScreen: {
      screen: LogoutScreen,
      
    }
  }
)

const RootStack = createDrawerNavigator(
  {
    RestaurantsScreen: {
      screen: restaurantScreensStack,
      navigationOptions: ({navigation}) => ({
        drawerLabel: 'Restaurantes',
        drawerIcon: ({tintColor}) => (<Icon name="home" size={24} style={{color:tintColor}} />),        
      })
    },

    LogoutScreen: {
      screen: logoutScreenStack,
      navigationOptions: ({navigation}) => ({
        drawerLabel: 'Cerrar Sesion',
        drawerIcon: ({tintColor}) => (<Icon name="sign-out" size={24} style={{color:tintColor}} />),        
      })
    }
  },
  {
    drawerBackgroundColor: 'rgba(128,35,60,0.7)',
    contentOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: 'white',
      itemsContainerStyle: {
        marginVertical: 0,
      }
    }
  }
)

export default createAppContainer(RootStack)