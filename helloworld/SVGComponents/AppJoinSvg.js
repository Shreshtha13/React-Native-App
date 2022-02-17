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
        style={s.hair}
        width={12}
        height={12}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M2.111 11.167C.556 11.167.556 8.833.556 6.11S2.11.667 6 .667c3.889 0 5.444 2.722 5.444 5.444s0 5.056-1.555 5.056"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Svg
          style={s.hairFill}
          width={12}
          height={12}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <Path
            d="M2.111 11.167C.556 11.167.556 8.833.556 6.11S2.11.667 6 .667c3.889 0 5.444 2.722 5.444 5.444s0 5.056-1.555 5.056"
            fill="#F1B31C"
          />
        </Svg>
      </Svg>
      <Svg
        style={s.faceline}
        width={10}
        height={12}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M.698 6.056c0 3.5 1.92 5.444 4.277 5.444 2.309 0 4.303-1.944 4.303-5.444 0-1.167-.39-1.945-.39-1.945C7.723 2.944 6.168 1 6.168 1 4.61 2.166 3.444 3.333 1.11 3.722c0 0-.413.389-.413 2.334Z"
          stroke="#000"
          strokeLinejoin="round"
        />
        <Svg
          style={s.facefill}
          width={10}
          height={11}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <Path
            d="M.698 5.056c0 3.5 1.92 5.444 4.277 5.444 2.309 0 4.303-1.944 4.303-5.444 0-1.167-.39-1.945-.39-1.945C7.723 1.944 6.168 0 6.168 0 4.61 1.166 3.444 2.333 1.11 2.722c0 0-.413.389-.413 2.334Z"
            fill="#FCEA2B"
          />
        </Svg>
      </Svg>
      <Svg
        style={s.shoulder}
        width={16}
        height={6}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M.611 5.333V4.167c0-1.942 1.948-3.5 3.889-3.5 2.333 1.944 4.667 1.944 7 0 1.942 0 3.889 1.558 3.889 3.5v1.166"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Svg
          width={16}
          height={6}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <Path
            d="M.611 5.722V4.167c0-1.942 1.948-3.5 3.889-3.5 2.333 1.944 4.667 1.944 7 0 1.942 0 3.889 1.558 3.889 3.5v1.555"
            fill="#92D3F5"
          />
        </Svg>
      </Svg>
    </Svg>
  </View>
);

const s = StyleSheet.create({
  container: {
    marginTop: 16,
    marginLeft: 20,
  },
  hair: {
    y: 8.67,
    x: 12.56,
  },
  faceline: {
    y: 11,
    x: 13.7,
  },
  facefill: {
    x: 0,
    y: 1,
  },
  shoulder: {
    y: 22.67,
    x: 10.61,
  },
});

export default SvgComponent;
