import React, { Component } from 'react';
import { View } from 'react-native';
import AppButton from '../components/AppButton';
import BackgroundImage from '../components/BackgroundImage';
import { NavigationActions } from 'react-navigation';
import Toast from 'react-native-simple-toast';
import firebaseConfig from '../utils/firebase';
import * as firebase from 'firebase';

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

  register() {

  }

  async facebook() {

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