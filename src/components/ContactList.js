import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const contacts = [
  {name: 'Jesse Brown', phone: '(555) 44 12 34'},
  {name: 'John Smith', phone: '(555) 44 43 21'},
];

const ContactList = () => {
  return (
    <View style={styles.container}>
      {contacts.map((contact, index) => (
        <View key={index} style={styles.contact}>
          <View style={styles.profile_container}>
          </View>
          <View style={styles.list} >
            <Text style={styles.name}>{contact.name}</Text>
            <Text style={styles.phone}>{contact.phone}</Text>
            <View style={styles.line}></View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor:"white",
    borderRadius:15
  },
  contact: {
    width: '100%',
    flexDirection:"row",
    padding: 10,
    backgroundColor:"white",
    // borderBottomWidth: 1,
    // borderBottomColor: '#ddd',
    // borderWidth:1
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
    color: '#777',
  },
  profile_container: {
    backgroundColor: '#D9D9D9',
    width: 30,
    height: 30,
    marginRight:20,
    borderRadius: 50,
    
  },
  list:{
    width:"100%",
  },
  line: {
    borderColor: 'white',
    borderWidth: 0.2,
    elevation: 2,
    marginVertical:6,
   width:"85%"
    
  },
 
});

export default ContactList;
