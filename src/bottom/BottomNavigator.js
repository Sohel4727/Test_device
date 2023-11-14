import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Test from '../Pages/Test/Test';
import History from '../Pages/History/History';
import Contact from '../Pages/Contact/Contact';
import Zone from '../Pages/Zone/Zone';

const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Bottom.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Test') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'History') {
            iconName = focused ? 'history' : 'history';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'whatsapp' : 'whatsapp';
          } else if (route.name === 'Zone') {
            iconName = focused ? 'th-large' : 'th-large';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        style: {
          display: 'flex', // This could be used to set the tabBarStyle
        },
      }}
    >
      <Bottom.Screen name='Test' component={Test} options={{ headerShown: false }} />
      <Bottom.Screen name='Contact' component={Contact} options={{ headerShown: false }} />
      <Bottom.Screen name='Zone' component={Zone} options={{ headerShown: false }} />
      <Bottom.Screen name='History' component={History} options={{ headerShown: false }} />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  // Your styles here if needed
});
