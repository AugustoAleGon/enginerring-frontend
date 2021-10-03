import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeView from '../screens/HomeView';
import VaultView from '../screens/VaultView';
import SearchView from '../screens/SearchView';
import AlertView from '../screens/AlertView';
import ProfileView from '../screens/ProfileView';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Vault" component={VaultView} />
      <Tab.Screen name="Search" component={SearchView} />
      <Tab.Screen name="Alert" component={AlertView} />
      <Tab.Screen name="Profile" component={ProfileView} />
    </Tab.Navigator>
  );
};

export default MainTabs;
