import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from './Main';
import Test from '../Pages/Test/Test';
import History from '../Pages/History/History';
import Contact from '../Pages/Contact/Contact';
import Zone from '../Pages/Zone/Zone';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      
      <Drawer.Screen name="Main" component={Main} options={{headerShown:true}} />
      <Drawer.Screen name="Test" component={Test} options={{headerShown:false}} />
      <Drawer.Screen name="History" component={History} options={{headerShown:true}} />
      <Drawer.Screen name="Contact" component={Contact} options={{headerShown:true}} />
      <Drawer.Screen name="Zone" component={Zone} options={{headerShown:true}} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
