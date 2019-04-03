import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export const defaultNavigationOptions = {
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
}

export const leftIcon = (navigation, icon) => (
  <Icon 
    name={icon}
    style={{marginLeft: 20}}
    size={20}
    color="white"
    onPress={() => navigation.openDrawer()}

  />
);

export default rightIcon = (navigation, icon) => (
  <Icon 
    name={icon}
    style={{marginLeft: 20}}
    size={30}
    color="white"
    onPress={() => navigation.navigate('ListRestaurants')}

  />
)
