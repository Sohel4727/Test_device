import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
// import CustomDropdown from "../../custom/CustomDropdown"
// import DropDownPicker from 'react-native-dropdown-picker';
import styles from './style';
import CustomDropdown from '../../custom/CustomDropdown';
import CustomInput from '../../custom/CustomInput';
import CustomButton from '../../custom/CustomButton';
const Test = () => {
  const [open, setOpen] = useState(false);
  const [currentValue1, setCurrentValue1] = useState();
  const [currentValue2, setCurrentValue2] = useState();
  const [currentValue3, setCurrentValue3] = useState();
  const items1 = [
    {label: 'Jesse’s Juice Bar', value: 'Jesse’s Juice Bar'},
    {label: 'Jesse Brown', value: 'Jesse Brown'},
    {label: 'John Smith', value: 'John Smith'},
  ];

  const items2 = [
    {label: 'All Zones', value: 'All Zones'},
    {label: 'India', value: 'India'},
    {label: 'America', value: 'America'},
    {label: 'Africa', value: 'Africa'},
  ];
  const items3 = [
    {label: 'Test Length - 2 hours', value: 'Test Length - 2 hours'},
    {label: 'Test Length - 4 hours', value: 'Test Length - 4 hours'},
    {label: 'Test Length - 6 hours', value: 'Test Length - 6 hours'},
  ];

  return (
    <View style={styles.main_test_container}>
      <View style={styles.add_main_container}>
        <Text style={styles.heading}>Test Device</Text>
        <TouchableOpacity style={styles.test_container}>
          <Icon.Button
            style={{paddingTop:2}}
            color="#EB3924"
            name="stop-circle-outline"
            backgroundColor="transparent">
            Not on Test
          </Icon.Button>
        </TouchableOpacity>
        <CustomDropdown
          items={items1}
          value={currentValue1}
          setValue={val => setCurrentValue1(val)}
        />

        <View style={styles.add_container}>
          <Text style={styles.add_text}>ADDRESS</Text>
          <TouchableOpacity style={styles.icon_container}>
            <Icon
              style={styles.icon}
              name="location-sharp"
              size={20}
              color="#80adf2"
            />
            <Text style={styles.smoothie_text}>
              56 Smoothie Street Bridgewater, NJ
            </Text>
          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity style={styles.icon_container}>
            <Icon style={styles.icon} name="call" size={20} color="#80adf2" />
            <Text style={styles.smoothie_text}>(555) 99 88 88</Text>
          </TouchableOpacity>
          <Text style={styles.account_text}>Account: 07 57 047</Text>
        </View>
      </View>
      <View style={styles.inputs_container}>
        <View style={{zIndex: 2, paddingVertical: 6}}>
          <CustomDropdown
            items={items2}
            value={currentValue2}
            setValue={val => setCurrentValue2(val)}
          />
        </View>
        <View style={{zIndex: 1, paddingVertical: 6}}>
          <CustomDropdown
            items={items3}
            value={currentValue3}
            setValue={val => setCurrentValue3(val)}
          />
        </View>

        <CustomInput placeholder="Comment" style={styles.comment_input} />
        <CustomInput placeholder="Passcode*" style={styles.comment_input} />
        <View style={styles.place_button_container}>
        <CustomButton style={styles.place_button} title='Place on Tеst'/>
        </View>
      </View>
    </View>
  );
};

export default Test;
