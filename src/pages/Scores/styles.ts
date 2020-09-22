import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';

import {vw, vh} from '../../utils/viewport-units';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const statusBarHeight =
  StatusBar.currentHeight === undefined ? 0 : StatusBar.currentHeight;

export const Container = styled.View`
  flex: 1;
  background-color: #edf3f6;
`;

export const Header = styled.View`
  height: ${hp(29.69)}px;
`;

export const HeaderContent = styled(LinearGradient)`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  margin-top: ${statusBarHeight + hp(2.6)}px;
  margin-left: ${wp(2.55)}px;
  margin-right: ${wp(2.55)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.Image`
  width: ${wp(31.2)}px;
  height: ${hp(13.69)}px;
  margin-top: ${hp(2.6)}px;
`;

export const HeaderTextContainer = styled.View`
  margin-left: ${wp(5.1)}px;
  margin-top: ${hp(3.85)}px;
`;

export const HeaderTitle = styled.Text`
  font-family: 'Archivo-Bold';
  font-size: ${hp(4.53)}px;
  color: white;
  text-shadow: ${-hp(0.25)}px ${hp(0.25)}px ${hp(0.25)}px black;
`;

export const HeaderTextMin = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: ${hp(1.94)}px;
  color: rgba(255, 255, 255, 0.8);
  margin-left: ${wp(2.55)}px;
  margin-top: ${hp(0.65)}px;
  text-shadow: ${-hp(0.25)}px ${hp(0.25)}px ${hp(0.25)}px black;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

export const Content = styled.View`
  margin-left: ${wp(5.1)}px;
  margin-right: ${wp(5.1)}px;
  margin-top: ${hp(3)}px;
  margin-bottom: ${hp(8)}px;
`;

export const NoScoreBox = styled.View`
  position: absolute;
  width: ${vw(100)}px;
  top: ${vh(45)}px;
  align-items: center;
`;

export const NoScoreImg = styled.Image`
  width: ${hp(12.974)}px;
  height: ${hp(12.974)}px;
`;

export const NoScoreText = styled.Text`
  font-family: 'Poppins-Regular';
  text-align: center;
  font-size: ${hp(3.233)}px;
  margin-top: ${hp(3.233)}px;
  text-shadow: ${-hp(0.2)}px ${hp(0.2)}px ${hp(0.2)}px rgba(52, 52, 52, 0.5);
  padding-left: ${wp(8.93)}px;
  padding-right: ${wp(8.93)}px;
`;

export const ScoreBox = styled.View`
  elevation: 10;
  flex-direction: row;
  padding: ${hp(1.945)}px;
  height: ${hp(10.35)}px;
  border-radius: 6px;
  background: white;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: black;
  margin-bottom: ${hp(1.5)}px;
`;

export const CategoryImg = styled(FastImage)`
  width: ${hp(4.6)}px;
  height: ${hp(4.6)}px;
  margin-right: ${wp(5.1)}px;
`;

export const ScoreContentBox = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryAndTimeBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CategoryText = styled.Text`
  font-size: ${hp(2.334)}px
  font-family: 'Archivo-Bold';
`;

export const TimeText = styled.Text`
  margin-left: ${wp(2.54)}px;
  color: rgba(0, 0, 0, 0.5);
  font-size: ${hp(1.94)}px;
  font-family: 'Archivo-Regular';
`;

export const ScoreText = styled.Text`
  font-size: ${hp(1.94)}px;
  font-family: 'Archivo-Regular';
`;

export const ScoreNumberText = styled.Text`
  color: ${({score}: {score: number}) => (score > 6 ? '#36cb79' : 'red')};
`;

export const BannerBox = styled.View`
  position: absolute;
  bottom: 2px;
  width: ${vw(100)}px;
  right: 0;
  align-items: center;
`;
