// LoginStyles.js
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main_login_container: {
    backgroundColor: '#191B21',
    flex: 1,
    color: 'white',
    padding:16
  },
  logo_container: {
    flex: 1,
    justifyContent:"space-between",
    color: 'white',

  },
  logo: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    borderRadius:12,
  },
  login_container: {
    flex: 1,
    color: 'white',
  },
  heading:{
    color:"white",
    fontSize:40,
    fontWeight:"bold",
    paddingVertical:6
  },
  input_container:{
    paddingVertical:5
  },
  button_container:{
    justifyContent:"center",
    alignItems:"center",
    paddingVertical:16
  },
});

export default styles;
