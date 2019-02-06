import React, { Componente } from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions, StyleSheet } from 'react-native';
let colorFondo;
let ancho;

const AppButton = (props) => {
  const { action, iconName, iconColor, title, bgColor } =  props;
  const { width } = Dimensions.get('window');
  colorFondo = bgColor;
  ancho = width;
  return (
    <Button 
      onPress = {action}
      style={styles.buttonStyles}
      title={title}
      icon={
        <Icon 
          type='font-awesome'
          name={iconName}
          size={15}
          color={iconColor}
        />
      }
      text={title}
      iconRight={true}
    />
  )
}

export default AppButton;

const styles = StyleSheet.create({
  buttonStyles: {
    backgroundColor: colorFondo,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    marginBottom: 5,
    width: ancho
  }
})

