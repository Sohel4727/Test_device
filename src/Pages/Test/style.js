// Test.js
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main_test_container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#F4F6F9',
    padding: 12,
  },
  heading: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  test_container: {
    borderWidth: 1,
    borderColor: '#EB3924',
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 8,
    padding: 0,
    height: '11%',
  },
  dropDown_picker: {
    borderColor: 'white',
    marginBottom: 8,
  },
  add_main_container: {
    flex: 1,
  },
  add_container: {
    marginVertical: 6,
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
  inputs_container: {
    flex: 1,
  },
  comment_input: {
    backgroundColor: 'white',
    marginVertical: 4,
  },
  place_button: {
    color: 'white',
    backgroundColor:"#2B58BC",
    textAlign:"center"
  },
  place_button_container:{
    justifyContent:"center",
    alignItems:"center",
  },
});

export default styles;
