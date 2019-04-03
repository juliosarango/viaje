import React, { Component } from 'react';
import BackgroundImage from '../../components/BackgroundImage';
import PreLoader from '../../components/PreLoader';
import { StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import RestaurantEmpty from '../../components/restaurant/RestaurantEmpty';
import RestaurantAddButton from '../../components/restaurant/RestaurantAddButton';
import { isObject } from 'util';

class Restaurants extends Component {  

  constructor() {
    super();
    this.refRestaurants = firebase.database().ref().child('restaurants');      
  }  

  state = {
    restaurants: [],
    loaded: false,
    restaurant_logo: require('../../../assets/images/restaurant.jpg')
  }

  componentDidMount() {    
    let restaurants = [];
    if (isObject(this.refRestaurants.value)) {      
      this.refRestaurants.on('value', snapshot => {        
        snapshot.map ( snap => {
          restaurants.push({
            id: snap.key,
            name: snap.val().name,
            address: snap.val().address,
            capacity: snap.val().capacity,
            description: snap.val().description
          })
        })        
      })
    }    
    this.setState({
      restaurants,
      loaded: true
    })
  }

  addRestaurant = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'AddRestaurant'
    });
    this.props.navigation.dispatch(navigateAction);
  }

  restaurantDetail = (restaurant) => {

  }

  renderRestaurant = (restaurant) => {
    return (
      <ListItem 
        containerStyle={styles.item}
        titleStyle={styles.title}
        roundAvatar
        title={`${restaurant.name} (Capacidad: ${restaurant.capacity})`}
        avatar={this.state.restaurant_logo}
        onPress={this.restaurantDetail(restaurant)}
        rightIcon={{ name:'arrow-right', type:'font-awesome', style:styles.listIconStyle}}
      />

    )
  }
  render() {
    const { loaded, restaurants } = this.state;
    
    if (!loaded) {
      return <PreLoader />
    }

    if (!restaurants.length) {
      return (
        <BackgroundImage>
          <RestaurantEmpty 
            text="No hay restaurantes disponibles"
          />
          <RestaurantAddButton 
            addRestaurant={this.addRestaurant}
          />
        </BackgroundImage>
      )
    }
    return (
      <BackgroundImage>
        <FlatList 
          data={restaurants}
          renderItem={ data => this.renderRestaurant(data.item)}
        />
      </BackgroundImage>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#fff'
  },
  listIconStyle: {
    marginRight: 10,
    fontSize: 15,
    color: 'rgba(255,38,74,0.6)'
  },
  item: {
    padding: 0,
    backgroundColor: 'rgba(206,206,206,0.6)'
  }
})

export default Restaurants;