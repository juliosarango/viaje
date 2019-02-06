import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './application/components/AppButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hola mundo!!!</Text>
        <AppButton           
          action={()=> console.log('click')}
          iconName="home"
          iconColor="#fff"
          title="Home"
          bgColor="rgba(220,100,20,0.7)"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
