import React, { Component } from 'react';
import { ImageBackground } from 'react-native';

class BackgroundImage extends Component {
  render() {
    
    const { source, children } = this.props;    
    let path = '';
    if (!source) {        
      path = require('../../assets/images/image-bg.jpg');
    }    
    return (
      <ImageBackground 
        source={source ? source : path}        
        style={{flex: 1, width: null, height: null}}        
      >
        {children}
      </ImageBackground>
    );
  }
}

export default BackgroundImage;