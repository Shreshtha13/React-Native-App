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

import Note from './components/Note';

const App = () => {
  return (
    <View>
      <Note />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {},
});

export default App;
