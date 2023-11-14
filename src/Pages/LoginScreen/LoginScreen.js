import React,{useState} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style.js';
import CustomInput from '../../custom/CustomInput.js';
import CustomButton from '../../custom/CustomButton.js';
const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.main_login_container}>
      <View style={styles.logo_container}>
        <View></View>
        <View style={styles.logo}></View>
      </View>
      <View style={styles.login_container}>
        <Text style={styles.heading}>Sign in to your account</Text>
        <View style={styles.input_container}>
          <CustomInput
          placeholderTextColor="#D6DAE8"
            placeholder="Your mobile number"
            onChangeText={text => setUsername(text)}
          />
          <CustomInput
          placeholderTextColor="#D6DAE8"
            placeholder="Account Passcode"
            secureTextEntry
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={styles.button_container}>
        <CustomButton title="Login" onPress={handleLogin} />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
