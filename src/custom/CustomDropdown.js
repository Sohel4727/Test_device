// CustomDropdown.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const CustomDropdown = ({ items, label, value, setValue }) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={{borderColor:"white",zIndex:1}}>
      <DropDownPicker
        items={items}
        open={open}
        setOpen={() => setOpen(!open)}
        value={value}
        setValue={val => setValue(val)}
        style={{
          borderWidth: 0,
        }}
      />
    </View>
  );
};

export default CustomDropdown;
