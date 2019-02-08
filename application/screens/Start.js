import React, { Component } from 'react';
import { View } from 'react-native';
import AppButton from '../components/AppButton';
import BackgroundImage from '../components/BackgroundImage';
import { NavigationActions } from 'react-navigation';
import Toast from 'react-native-simple-toast';
import firebaseConfig from '../utils/firebase';
import * as firebase from 'firebase';

import facebook from '../utils/facebook';

firebase.initializeApp(firebaseConfig);

export default class Start extends Component {

  static navigationOptions = {
    title: 'Expo App'
  }
  
  login = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Login'
    });
    this.props.navigation.dispatch(navigateAction);

  }

  register = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Register'
    });
    this.props.navigation.dispatch(navigateAction);

  }

  async facebook() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      facebook.config.application_id,
      { permisions: facebook.config.permissions }
    );
    if (type === 'success') {
      const credentials = firebase.auth.FacebookAuthProvider.credential(token);
      firebase.auth().signInWithCredential(credentials)
        .then( (user) => {
          console.log('entramos');
        })
        .catch( error => {
          Toast.showWithGravity("Error accediendo con facebook",Toast.LONG, Toast.BOTTOM)  
        })
    } else if(type === 'cancel') {
      Toast.showWithGravity("Inicio de sesion cancelado",Toast.LONG, Toast.BOTTOM)  
    } else {
      Toast.showWithGravity("Error desconocido",Toast.LONG, Toast.BOTTOM)  
    }

  }
  render() {
    return ( 
      <BackgroundImage>
        <View style={{justifyContent: 'center', flex: 1 }}>
          <AppButton             
            bgColor="rgba(111,38,74,0.7)"
            title="Entrar"
            action={this.login}
            iconName="sign-in"
            iconSize={15}
            iconColor="#fff"
          />          
          <AppButton 
            bgColor="rgba(200,200,50,0.7)"
            title="Registrarme"
            action={this.register}
            iconName="user-plus"
            iconSize={15}
            iconColor="#fff"
          />
          <AppButton 
            bgColor="rgba(67,67,146,0.5)"
            title="Facebook"
            action={this.facebook}
            iconName="facebook"
            iconSize={15}
            iconColor="#fff"
          />
        </View> 
      </BackgroundImage>                   
    );
  }
}