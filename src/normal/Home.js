import React from 'react';
import { View } from 'react-native';
import DrawerNavigator from '../drawer/DrawerNavigator';

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerNavigator />
    </View>
  );
};

export default Home;
