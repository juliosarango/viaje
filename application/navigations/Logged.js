import React from 'react';
import RestaurantsScreen from '../screens/restaurants/Restaurants';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: 'rgba(200,38,74,1)'
  },
  headerTitleStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
  }
};

const leftIcon = (navigation, icon) => (
  <Icon 
    name={icon}
    style={{marginLeft: 20}}
    size={20}
    color="white"
    onPress={() => navigation.navigate('DrawerOpen')}

  />
)

const rightIcon = (navigation, icon) => (
  <Icon 
    name={icon}
    style={{marginLeft: 20}}
    size={30}
    color="white"
    onPress={() => navigation.navigate('ListRestaurants')}

  />
)

const restaurantScreensStack = createStackNavigator(
  {
    ListRestaurants: {
      screen: RestaurantsScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Restaurantes',
        drawerIcon: ({tintColor}) => (<Icon name="home" size={24} style={{color:tintColor}} />),
        headerLeft: leftIcon(navigation, 'bars')
      })
    }

  },  
  defaultNavigationOptions    
);

const drawerScreens = createDrawerNavigator(
  {
    RestaurantsScreen: {
      screen: restaurantScreensStack
    },
  },
  {
    drawerBackgroundColor: 'rgba(128,35,60,0.7)',
    contentOptions: {
      actibeTintColor: 'white',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: 'white',
      itemsContainerStyle: {
        marginVertical: 0,
      }
    }
  }
)

export default createAppContainer(drawerScreens)