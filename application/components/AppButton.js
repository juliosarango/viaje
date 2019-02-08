import React from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native';

const AppButton = (props) => {
  const { action, iconName, iconSize, iconColor, title, bgColor } =  props;
  const { width } = Dimensions.get('window');  
  return (
    <Button       
      onPress = {action}
      buttonStyle = {{
        backgroundColor: bgColor,
        height: 45,       
        borderColor: "transparent", 
        borderWidth: 0,
        borderRadius: 5,
        marginBottom: 5,        
      }}    
      containerStyle = {{
        opacity: 0.8,
        backgroundColor: bgColor
      }}
      titleStyle = {{
        color: iconColor        
      }}  
      title= {title}            
      icon={
        <Icon 
          type='font-awesome'
          name={iconName}
          size={iconSize}
          color={iconColor}
          style={{marginLeft: 15}}
        />
      }
      text={title}
      iconRight={true}
    />
  )
}

export default AppButton;
