import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CoinsEarnedSvg from '../../SVGComponents/CoinsEarned';
import Var from '../../style/variables';
import AppJoinSvg from '../../SVGComponents/AppJoinSvg';
import Arrow from './Arrow';
const AppJoin = () => {
  const [name, setName] = useState('Vaibhav');
  const [restaurant, setRestaurant] = useState('Rustic House');
  const [time, setTime] = useState(1);
  return (
    <View style={s.container}>
      <View style={s.content}>
        <AppJoinSvg />
        <View>
          <Text style={s.text}>
            Your contact {<Text>{name}</Text>} joined the app
          </Text>
          <View style={s.msgWrap}>
            <Text style={s.msg}>Send Rewards</Text>
            <Arrow />
          </View>
        </View>
        <Text style={s.time}>{time}m ago</Text>
      </View>
      <View style={s.line} />
    </View>
  );
};

const s = StyleSheet.create({
  line: {
    borderColor: Var.lineSeparator,
    borderWidth: 0.25,
    height: 0,
    width: 370,
    marginLeft: 20,
    marginTop: 22,
    zIndex: 400,
  },
  container: {
    flexDirection: 'column',
    marginTop: 0,
    backgroundColor: '#ffffff',
    height: 79,
  },
  content: {
    flexDirection: 'row',
  },
  text: {
    fontFamily: Var.fontReg,
    width: 250,
    fontSize: 12,
    marginTop: 16,
    marginLeft: 24,
    lineHeight: 18,
    color: Var.fontDark,
  },
  msg: {
    fontFamily: Var.fontReg,
    fontSize: 12,
    marginLeft: 24,
    lineHeight: 18,
    color: Var.backColorMain,
  },
  msgWrap: {
    flexDirection: 'row',
  },
  time: {
    color: Var.fontLightGrey,
    fontFamily: Var.fontReg,
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.08,
    marginTop: 34,
    marginLeft: 18,
    // backgroundColor:'red'
  },
  // font-size: 12px;
  // line-height: 18px;
  // /* or 150% */

  // letter-spacing: 0.005em;
  //   },
});

export default AppJoin;
