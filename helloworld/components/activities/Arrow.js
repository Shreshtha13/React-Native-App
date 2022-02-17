import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {View, StyleSheet} from 'react-native';

const Arrow = props => (
  <View>
    <Svg
      style={s.stroke1}
      width={12}
      height={2}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11.167.817h-10"
        stroke="#4C56FF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
    <Svg
      style={s.stroke3}
      width={6}
      height={10}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="m1.133.8 4.034 4.017-4.034 4.017"
        stroke="#4C56FF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
);

const s = StyleSheet.create({
  stroke1: {
    marginLeft: 5.17,
    marginTop: 9.48,
  },
  stroke3: {
    marginLeft: 11.13,
    marginTop: -5.8,
  },
});

export default Arrow;
