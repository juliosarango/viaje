import React from 'react';
import PreLoader from './application/components/PreLoader';
import GuestNavigation from  './application/navigations/Guest'
import { Text } from 'react-native';
import * as firebase from 'firebase';


export default class App extends React.Component {  

  state = {
    isLogged: false,
    loaded: false
  }

  async componentDidMount() {
    await firebase.auth().onAuthStateChanged( (user) => {
      if (user !== null) {
        this.setState({
          isLogged: true,
          loaded: true
        }) 
      } else {
        this.setState({
          isLogged: false,
          loaded: true
        });
      }
    })
  }

  render() {
    const { isLogged, loaded } = this.state;

    if (!loaded){
      return (<PreLoader />)
    }
    if (isLogged) {
      return (<Text>Logueado</Text>)
    }

    return (                  
      <GuestNavigation />        
    );
  }
}