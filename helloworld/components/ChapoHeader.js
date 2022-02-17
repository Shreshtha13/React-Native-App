import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import s from '../style/variables';
import HeaderVector from '../SVGComponents/HeaderVector';
const ChapoHeader = () => {
  return (
    <View style={styles.head}>
      <HeaderVector />
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    backgroundColor: s.backColorMain,
    height: 104,
    borderRadius: 16,
    zIndex: 400,
  },
});

export default ChapoHeader;
