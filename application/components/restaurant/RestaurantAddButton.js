import React, { Component } from 'react';
import AppButton from '../AppButton';
import { View, StyleSheet } from 'react-native';

class RestaurantAddButton extends Component {  

  render() {
    const { addRestaurant } = this.props;
    return (
      <View style={styles.buttonContainer}>
        <AppButton 
          bgColor="rgba(255,38,74,0.6)"
          title="Añadir un restaurante"
          action={this.addRestaurant}
          iconName="plus"
          iconSize={30}
          iconColor="#fff"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 0,
  }
})


export default RestaurantAddButton;