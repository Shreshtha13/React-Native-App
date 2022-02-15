/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Note from './components/Note';
import BottomNav from './components/BottomNav';

const App = () => {
  return (
    // <View style={styles.body}>
    <NavigationContainer style={styles.bottomNav}>
      <BottomNav />
    </NavigationContainer>
    // </View>
    // <NavigationContainer>
    //   <BottomNav />
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bottomNav: {},
  body: {
    marginTop: 760,
  },
});

export default App;
