import {BottomNavigation, Text} from 'react-native-paper';
import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Note from './Note';
import Settings from './Settings';
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
    <Tab.Navigator style={s.bottomTab}>
      <Tab.Screen name="Home" component={Note} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const s = StyleSheet.create({});

export default BottomNav;
