import {BottomNavigation, Text} from 'react-native-paper';
import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Note from './Note';
import Settings from './activities/Activities';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator style={s.bottomTab} screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Note} />
      <Tab.Screen name="Activites" component={Settings} />
      <Tab.Screen name="Rewards" component={Settings} />
      <Tab.Screen name="Profile" component={Settings} />
    </Tab.Navigator>
  );
};

const s = StyleSheet.create({});

export default BottomNav;
