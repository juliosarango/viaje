import React from 'react';
import PreLoader from './application/components/PreLoader';
import GuestNavigation from  './application/navigations/Guest'

export default class App extends React.Component {  
  render() {
    return (                  
      <GuestNavigation />        
    );
  }
}