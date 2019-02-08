import React, { Component } from 'react';

import { View } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import AppButton from '../components/AppButton';
import FormValidation from '../utils/validation';
import { Card } from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import * as firebase from 'firebase';

import t from 'tcomb-form-native';

const Form = t.form.Form;


class Register extends Component {

  state = {
    user: {
      email: '',
      password: ''
    }
  }

  constructor(){
    super();
    this.samePassword = t.refinement(t.String, (s) => {
      return s === this.state.user.password
    });

    this.user = t.struct({
      email: FormValidation.email,
      password: FormValidation.password,
      passwordConfirmation: this.samePassword
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
        },
        password_confirmation: {
          help: 'Repite tu password',
          error: 'Los passwords no coinciden',
          password: true,
          secureTextEntry: true
        }
      }
    };

    this.validate = null;
  }

  register = () => {
    //con esta linea validamos al momento de hacer submit
    this.validate = this.refs.form.getValue();
    // procedemos a registrar
    if(this.validate){
      firebase.auth().createUserWithEmailAndPassword(this.validate.email, this.validate.password)
      .then( () => {
        Toast.showWithGravity("Usuario registrado correctamente",Toast.LONG, Toast.BOTTOM)  
      })
      .catch( (error) => {
        Toast.showWithGravity(error.message,Toast.LONG, Toast.BOTTOM)
      })

    }

  }

  onChange = (user) => {
    this.setState({
      user
    });    
    // con esta linea validamos en cada cambio que se haga en el formulario
    //this.validate = this.refs.form.getValue();
  }
  
  render() {
    return (
      <BackgroundImage>
        <View>
          <Card wrapperStyle={{ paddingLeft: 10}} title="Registrate">
            <Form
              ref="form"
              type={this.user}
              options={this.options}
              onChange={ (v) => this.onChange(v)}
              value={this.state.user}
            />
            <AppButton 
              bgColor="rgba(200,200,50,0.9)"
              title="Registrarme"
              action={this.register}
              iconName="user-plus"
              iconSize={30}
              iconColor="#fff"
            />

          </Card>
        </View>
      </BackgroundImage>
    );
  }
}

export default Register;