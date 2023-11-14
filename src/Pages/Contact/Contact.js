import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import CustomDropdown from '../../custom/CustomDropdown';
import ContactList from '../../components/ContactList';


const Contact = () => {
  const [open, setOpen] = useState(false);
  const [currentValue1, setCurrentValue1] = useState();

  const items1 = [
    {label: 'Jesse’s Juice Bar', value: 'Jesse’s Juice Bar'},
    {label: 'Jesse Brown', value: 'Jesse Brown'},
    {label: 'John Smith', value: 'John Smith'},
  ];
  return (
    <View style={styles.main_contact_container}>
      <View style={styles.add_main_container}>
        <Text style={styles.heading}>Contact for Device</Text>
        
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
      <View style={styles.contact_list_container}>
        <Text style={styles.phone_heading}>Phone</Text>
        <ContactList/>
        </View>
        
    </View>
  )
}

export default Contact