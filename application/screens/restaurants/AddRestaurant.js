import React,{Component} from 'react';
import BackgroundImage from '../../components/BackgroundImage';
import AppButton from '../../components/AppButton';
import { View, StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import { options, Restaurant } from '../../forms/restaurant';
import t from 'tcomb-form-native';
import { Card } from 'react-native-elements';
import Toast from 'react-native-simple-toast';

const Form = t.form.Form;

export default class AddRestaurant extends Component {

  constructor(){
    super();
  }

  state = {
    restaurant: {
      name: '',
      address: '',
      capacity: 0,
      description: ''
    }
  }

  save = () => {
    const validate = this.refs.form.getValue();
    if (validate) {
      let data = {};
      const key = firebase.database().ref().child('restaurants').push().key;

      //data[`restaurants/${key}`] = validate; esto es igual a sacar del state
      data[`restaurants/${key}`] = this.state.restaurant;
      firebase.database().ref().update(data).then(() => {
        Toast.showWithGravity('Restaurant dado de alta correctamente',Toast.LONG, Toast.BOTTOM);
        this.props.navigation.navigate('ListRestaurants');
      });


    }

  }

  onChange(restaurant) {
    this.setState({restaurant})
  }



  render() {
    const { restaurant } = this.state;
      return (
          <BackgroundImage>
            <View style={styles.container}>
              <Card title="Formulario de Restaurantes">
                <View>
                  <Form
                    ref="form"
                    type={Restaurant}
                    options={options}
                    value={restaurant}
                    onChange={(rest)=>this.onChange(rest)}
                  />
                </View>
                <AppButton 
                  bgColor="rgba(255,38,74,0.6)"
                  title="Agregar"
                  action={this.save}
                  iconName="plus"
                  iconSize={30}
                  iconColor="#fff"
                />
              </Card>

            </View>
          </BackgroundImage>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(231,228,224,0.8)',
    padding: 10
  }
});