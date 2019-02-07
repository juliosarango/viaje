import React, { Component } from 'react';

import { View } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import AppButton from '../components/AppButton';
import t from 'tcomb-form-native';
import FormValidation from '../utils/validation';
import { Card } from 'react-native-elements';
import * as firebase from 'firebase';
import Toast from 'react-native-simple-toast';

const Form = t.form.Form;

export default class Login extends Component {
  constructor() {
    super();

    this.user = t.struct({
      email: FormValidation.email,
      password: FormValidation.password
    });

    this.options = {
      fields: {
        email: {
          help: 'Ingresa tu email',
          error: 'Email incorrecto',
          autoCapitalize: 'none'
        },
        password: {
          help: 'Ingresa tu password',
          error: 'Password incorrecto',
          password: true,
          secureTextEntry: true
        }
      }
    }
  }

  login = () => {
    const validate = this.refs.form.getValue();
    if (validate) {
      firebase.auth().signInWithEmailAndPassword(validate.email,validate.password)
      .then( (user) => {
        Toast.showWithGravity("Bienvenido",Toast.LONG, Toast.BOTTOM)
      })
      .catch( (error) => {                    
        Toast.showWithGravity(error.message,Toast.LONG, Toast.BOTTOM)        
      })
    }
  }

  render() {
    return (
      <BackgroundImage>
        <View>
          <Card wrapperStyle={{paddingLeft: 10}} title="Iniciar sesión">
            <Form 
              ref="form"
              type={this.user}
              options={this.options}
            />            
            <AppButton 
              bgColor="rgba(111,38,74,0.7)"
              title="Login"
              action={this.login}
              iconName="sign-in"
              iconSize={30}
              iconColor="#fff"
            />
          </Card>
        </View>
      </BackgroundImage>
    )
  }
}