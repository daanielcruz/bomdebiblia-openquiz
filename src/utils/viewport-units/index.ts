import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');

export const vh = (value: number) => {
  const viewportheight = height / 100;
  return value * viewportheight;
};

export const vw = (value: number) => {
  const viewportwidth = width / 100;
  return value * viewportwidth;
};
