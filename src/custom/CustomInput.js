// CustomInput.js
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ placeholder, onChangeText, placeholderTextColor, ...restProps }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor={placeholderTextColor}
      style={styles.input}
      {...restProps}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    margin: 10,
    borderRadius: 5,
    color: 'white', 
  },
});

export default CustomInput;
