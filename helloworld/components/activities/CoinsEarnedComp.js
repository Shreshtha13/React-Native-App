import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CoinsEarnedSvg from '../../SVGComponents/CoinsEarned';
import Var from '../../style/variables';
import {style} from '@mui/system';

const CoinsEarnedComp = () => {
  const [name, setName] = useState('Vaibhav');
  const [restaurant, setRestaurant] = useState('Rustic House');
  const [time, setTime] = useState(1);
  return (
    <View style={s.container}>
      <View style={s.content}>
        <CoinsEarnedSvg />
        <Text style={s.text}>
          {<Text>{name}</Text>} has earned x coins at
          {<Text style={s.restName}> {restaurant}</Text>}
        </Text>
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
    width: 155,
    fontSize: 12,
    marginTop: 16,
    marginLeft: 24,
    lineHeight: 18,
    color: Var.fontDark,
  },
  restName: {
    color: Var.backColorMain,
  },
  time: {
    color: Var.fontLightGrey,
    fontFamily: Var.fontReg,
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.08,
    marginTop: 34,
    marginLeft: 114,
    // backgroundColor:'red'

  },
  // font-size: 12px;
  // line-height: 18px;
  // /* or 150% */

  // letter-spacing: 0.005em;
  //   },
});

export default CoinsEarnedComp;
