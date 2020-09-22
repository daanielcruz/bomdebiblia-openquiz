import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const statusBarHeight =
  StatusBar.currentHeight === undefined ? 0 : StatusBar.currentHeight;

export const Container = styled(LinearGradient)`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-top: ${statusBarHeight + hp(5.2)}px;
  margin-left: ${wp(5.1)}px;
  margin-right: ${wp(5.1)}px;
  margin-bottom: ${hp(5.2)}px;
`;

export const Logo = styled.Image`
  height: ${hp(30)}px;
`;

export const Slogan = styled.Text`
  font-size: ${hp(3.9)}px;
  text-align: center;
  font-family: 'Archivo-Regular';
  line-height: ${hp(5.3)}px;
  color: white;
  text-shadow: ${-hp(0.26)}px ${hp(0.26)}px ${hp(0.26)}px black;
  margin-bottom: ${hp(2.39)}px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #36cb79;
  height: ${hp(7.75)}px;
  flex-direction: row;
  border-radius: ${hp(1.3)}px;
  overflow: hidden;
  align-items: center;
  width: 100%;
  background: ${({isLoading}: {isLoading: boolean}) =>
    isLoading ? 'lightgray' : '#34cb79'};
`;

export const ButtonIcon = styled.View`
  height: ${hp(7.75)}px;
  width: ${hp(7.75)}px;
  background-color: rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  border-top-left-radius: ${hp(1.3)}px;
  border-bottom-left-radius: ${hp(1.3)}px;
`;

export const ActvIndicator = styled.ActivityIndicator`
  position: absolute;
  bottom: ${hp(15)}px;
`;

export const ButtonText = styled.Text`
  flex: 1;
  justify-content: center;
  text-align: center;
  font-family: 'Archivo-Bold';
  letter-spacing: ${hp(0.15)}px;
  color: ${({disabled}: {disabled: boolean}) =>
    disabled ? '#26262626' : 'white'};
  font-size: ${hp(2)}px;
`;
