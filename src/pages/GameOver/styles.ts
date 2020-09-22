import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {StatusBar} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {vw} from '../../utils/viewport-units';

const statusBarHeight =
  StatusBar.currentHeight === undefined ? 0 : StatusBar.currentHeight;

export const Container = styled(LinearGradient)`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  margin-left: ${wp(5.1)}px;
  margin-right: ${wp(5.1)}px;
  margin-top: ${statusBarHeight + hp(3.23)}px;
  margin-bottom: ${hp(2.6)}px;
  align-items: center;
`;

export const CongratsBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  font-family: 'Archivo-Bold';
  color: white;
  font-size: ${hp(3.23)}px;
  text-align: center;
`;

export const StyledImage = styled.Image`
  margin-top: ${hp(5.8)}px;
  width: ${wp(48.375)}px;
  height: ${wp(48.375)}px;
`;

export const Congrats = styled.Text`
  margin-top: ${hp(4.53)}px;
  font-family: 'Poppins-Regular';
  color: white;
  font-size: ${hp(3.23)}px;
  opacity: 0.9;
  text-align: center;
`;

export const Explanation = styled.Text`
  margin-top: ${hp(0.634)}px;
  font-family: 'Poppins-Regular';
  color: white;
  font-size: ${hp(2.33)}px;
  opacity: 0.7;
  text-align: center;
`;

export const ScoreText = styled.Text`
  margin-top: ${hp(4.53)}px;
  font-family: 'Archivo-Regular';
  color: white;
  letter-spacing: ${wp(0.785)}px;
  font-size: ${hp(2.05)}px;
  opacity: 0.5;
  text-align: center;
`;

export const ScoreNumber = styled.Text`
  font-family: 'Archivo-Bold';
  letter-spacing: ${wp(1)}px;
  color: #10c79a;
  font-size: ${hp(5.15)}px;
  text-align: center;
`;

export const TotalQuestions = styled.Text`
  font-family: 'Archivo-Bold';
  letter-spacing: ${wp(1)}px;
  color: white;
  font-size: ${hp(5.15)}px;
  text-align: center;
`;

export const FooterButtons = styled.View`
  position: absolute;
  bottom: 0;
  flex-direction: row;
  justify-content: space-between;
  width: ${vw(100) - 40}px;
`;

export const GoBackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const GoBackButtonText = styled.Text`
  margin-left: ${wp(1.8)}px;
  margin-top: ${hp(0.634)}px;
  font-family: 'Poppins-Regular';
  font-size: ${hp(2.46)}px;
  color: rgba(255, 255, 255, 0.9);
`;

export const ShareButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: #06ccee;
  justify-content: center;
  align-items: center;
  border-radius: ${hp(1.948)}px;
  height: ${hp(7.765)}px;
  padding: ${hp(1.948)}px;
`;

export const ShareButtonText = styled.Text`
  margin-left: ${wp(1.8)}px;
  font-family: 'Archivo-Bold';
  font-size: ${hp(2.33)}px;
  color: white;
`;

export const BannerContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
