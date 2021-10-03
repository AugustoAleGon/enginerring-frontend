import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTabs from './MainTabs';

const RootStack = createNativeStackNavigator();

const AppContainer = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Home" component={MainTabs} />
    </RootStack.Navigator>
  );
};

export default AppContainer;
