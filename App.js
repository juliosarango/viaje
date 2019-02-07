import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppButton from './application/components/AppButton';
import PreLoader from './application/components/PreLoader';
import BackgroundImage from './application/components/BackgroundImage';
export default class App extends React.Component {

  state = {
    loader: true
  }
  componentDidMount() {
    this.setState({
      loader: false
    })

  }
  render() {
    return (    
      <View style={styles.container}>
        <BackgroundImage 
         source={require('./assets/images/image-bg.jpg')}
        />
        {
          this.state.loader &&
          <PreLoader />
        }
        
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1   
  },
});
