// CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress,style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText,style]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    width:"80%",
    textAlign:"center",
  },
  buttonText: {
    color: '#2B58BC',
    fontSize:16,
    // fontWeight: 'bold',
    paddingVertical:4
  },
});

export default CustomButton;
