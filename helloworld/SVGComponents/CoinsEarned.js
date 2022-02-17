import Svg, {Circle, Path} from 'react-native-svg';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg
      style={s.container}
      width={36}
      height={36}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle opacity={0.2} cx={18} cy={18} r={18} fill="#4C56FF" />
      <Svg
        style={s.spoon}
        width={21}
        height={6}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M15.949 5.213c1.967 0 3.562-1.016 3.562-2.269 0-1.252-1.595-2.268-3.562-2.268-1.827 0-3.332.527-3.537 1.656L1.364 2.017a.778.778 0 1 0 0 1.555l11.052-.011c.208 1.126 1.709 1.652 3.534 1.652Z"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
      <Svg
        style={s.bowlFill}
        width={24}
        height={12}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M16.407 11.093h-.01l-8.833-.017a4.704 4.704 0 0 1-2.975-1.066A11.634 11.634 0 0 1 .333 1a.389.389 0 0 1 .39-.389h22.555a.389.389 0 0 1 .389.389 11.63 11.63 0 0 1-4.288 9.037 4.705 4.705 0 0 1-2.972 1.056Z"
          fill="#fff"
        />
        <Svg
          style={s.bowlShadow}
          width={12}
          height={12}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <Path
            d="M11.278.611H6.842a.389.389 0 0 1 .39.389 11.629 11.629 0 0 1-4.289 9.037 4.7 4.7 0 0 1-2.785 1.048l4.24.008h.009a4.705 4.705 0 0 0 2.972-1.056A11.63 11.63 0 0 0 11.667 1a.388.388 0 0 0-.39-.389Z"
            fill="#D0CFCE"
          />
        </Svg>
        <Svg
          style={s.bowlOutline}
          width={24}
          height={12}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <Path
            d="M7.565 10.687c-.995 0-1.96-.345-2.729-.976A11.255 11.255 0 0 1 .722 1h22.556a11.256 11.256 0 0 1-4.145 8.736 4.306 4.306 0 0 1-2.734.968l-6.833-.013"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </Svg>
      <Svg
        style={s.bowlBottom}
        width={11}
        height={3}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M.565.687v.946a.645.645 0 0 0 .645.645h7.676a.645.645 0 0 0 .646-.645V.704"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </Svg>
  </View>
);

const s = StyleSheet.create({
  container: {
    marginTop: 16,
    marginLeft: 20,
  },
  spoon: {
    y: 10.68,
    x: 8.59,
  },
  bowlFill: {
    y: 17.61,
    x: 6.33,
  },
  bowlOutline: {},
  bowlShadow: {
    x: 11.44,
  },
  bowlBottom: {
    x: 13.56,
    y: 27.69,
  },
});

export default SvgComponent;
