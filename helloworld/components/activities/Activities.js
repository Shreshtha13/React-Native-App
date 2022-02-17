import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import ChapoHeader from '../ChapoHeader';
import s from '../../style/variables';
import CoinsEarnedComp from './CoinsEarnedComp';
import AppJoin from './AppJoin';
import SentCoins from './sentCoins'
const Activities = () => {
  return (
    <View>
      <ChapoHeader />
      <View style={st.header}>
        <Text style={st.headerText}>Activity Feed</Text>
      </View>
      <CoinsEarnedComp />
      <AppJoin />
      <SentCoins />
    </View>
  );
};

const st = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
    height: 79,
    marginTop: -15,
    marginBottom: 0,
  },
  headerText: {
    fontFamily: 'Lato-Bold',
    marginTop: 47,
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 8,
    marginLeft: 20,
    color: '#343A40',
  },
});

export default Activities;
