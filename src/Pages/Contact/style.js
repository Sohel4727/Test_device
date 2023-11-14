// contact.js
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    main_contact_container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#F4F6F9',
        padding: 12,
      },
      heading: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        marginVertical:8
      },
      dropDown_picker: {
        borderColor: 'white',
        marginBottom: 8,
      },
      add_main_container: {
        flex: 1,
      },
      add_container: {
        marginVertical: 16,
        padding: 10,
        backgroundColor: 'rgb(57,129,243)',
        height: '45%',
        width: '100%',
        borderRadius: 14,
      },
      add_text: {
        color: 'white',
        fontSize: 12,
        marginLeft: 8,
      },
      icon_container: {
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
      },
      line: {
        borderColor: 'white',
        borderWidth: 0.2,
        elevation: 2,
        width: '90%',
        marginLeft: 30,
        marginTop: 0,
        marginBottom: 0,
      },
      smoothie_text: {
        color: 'white',
        fontSize: 12,
      },
      account_text: {
        color: 'white',
        fontSize: 12,
        marginLeft: 32,
      },
      icon: {
        marginRight: 12,
      },
      contact_list_container:{
        flex:1,
      },
      phone_heading:{
        marginLeft:5,
        fontSize:16,
        marginVertical:6,
        fontWeight:"500"
      },
});

export default styles;
