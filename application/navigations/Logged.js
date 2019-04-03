import React from 'react';
import RestaurantsScreen from '../screens/restaurants/Restaurants';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import defaultNavigationOptions from './Helper';
import leftIcon from './Helper';
import rightIcon from './Helper';

const restaurantScreensStack = createStackNavigator(
  
  {
    ListRestaurants: {
      screen: RestaurantsScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Restaurantes',        
        headerLeft : leftIcon(navigation, 'bars')
      })
    }

  },  
  defaultNavigationOptions    
);

const RootStack = createDrawerNavigator(
  {
    RestaurantsScreen: {
      screen: restaurantScreensStack,
      navigationOptions: ({navigation}) => ({
        drawerLabel: 'Restaurantes',
        drawerIcon: ({tintColor}) => (<Icon name="home" size={24} style={{color:tintColor}} />),        
      })
    },
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