import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  AlertView,
  HomeView,
  ProfileView,
  SearchView,
  VaultView,
} from '../screens';

import {colors} from '../utils';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.tabActive,
        tabBarInactiveTintColor: colors.tabInactive,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeView}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="pie-chart" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Vault"
        component={VaultView}
        options={{
          tabBarIcon: ({color}) => (
            <Material
              name="currency-usd-circle-outline"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchView}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-search-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Alert"
        component={AlertView}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons
              name="ios-notifications-outline"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileView}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="person-outline" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
