import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {RectButton} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const statusBarHeight =
  StatusBar.currentHeight === undefined ? 0 : StatusBar.currentHeight;

export const Container = styled.View`
  flex: 1;
  background-color: #edf3f6;
  position: relative;
`;

export const Header = styled.View`
  height: ${hp(30)}px;
  overflow: hidden;
`;

export const HeaderContent = styled(LinearGradient)`
  flex: 1;
  justify-content: space-between;
`;

export const GreetingContainer = styled.View`
  margin-top: ${statusBarHeight + hp(2.6)}px;
  margin-left: ${wp(2.55)}px;
  margin-right: ${wp(2.55)}px;
  flex-direction: row;
  align-items: center;
`;

export const BibleImg = styled.Image`
  width: ${wp(19.1)}px;
  height: ${hp(9.65)}px;
`;

export const GreetingTextContainer = styled.View``;

export const GreetingTextAndMuteContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const GreetingText = styled.Text`
  font-family: 'Archivo-Bold';
  font-size: ${hp(2.35)}px;
  line-height: ${hp(3)}px;
  margin-left: ${wp(1.3)}px;
  color: white;
`;

export const MuteContainer = styled.TouchableOpacity`
  padding-right: ${wp(7.7)}px;
`;

export const PresentationContainer = styled.ImageBackground`
  margin-left: ${wp(5.1)}px;
  margin-right: ${wp(5.1)}px;
  background-color: #2a2b31;
  height: ${hp(25.8)}px;
  border-radius: ${hp(1.95)}px;
  align-items: center;
  margin-top: ${-hp(12.9)}px;
  elevation: 5;
  flex-direction: row;
  padding: ${hp(3.25)}px;
`;

export const PresentationLogo = styled.Image`
  width: ${wp(29)}px;
  height: ${hp(12.4)}px;
`;

export const PresentationTextContainer = styled.View`
  margin-bottom: ${hp(3.25)}px;
  margin-left: ${wp(7.9)}px;
`;

export const PresentationText = styled.Text`
  font-family: 'Archivo-Bold';
  font-size: ${hp(3.63)}px;
  color: white;
  line-height: ${hp(4)}px;
`;

export const PresentationTextMin = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: ${hp(1.94)}px;
  color: lightgray;
  margin-top: ${hp(1.94)}px;
  line-height: ${hp(2.7)}px;
`;

export const Content = styled.View`
  flex: 1;
  margin-left: ${wp(5.1)}px;
  margin-right: ${wp(5.1)}px;
`;

export const CategoriesText = styled.Text`
  font-family: 'Archivo-Bold';
  color: black;
  font-size: ${hp(3.1)}px;
  margin-top: ${hp(1.95)}px;
  margin-bottom: ${hp(1.95)}px;
`;

export const CategoriesContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin-top: ${-hp(1.3)}px;
`;

export const CategoryContainerButton = styled(RectButton)`
  flex: 1;
  flex-direction: column;
  height: ${hp(15.5)}px;
  background-color: white;
  margin: ${hp(1.55)}px;
  border-radius: ${hp(1.05)}px;
  elevation: 1;
  padding: ${hp(0.72)}px;
`;

export const CategoryContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`;

export const CategoryImg = styled(FastImage)`
  width: 38%;
  height: 38%;
`;

export const CategoryTitle = styled.Text`
  font-family: 'Archivo-Regular';
  color: black;
  text-shadow: ${-hp(0.13)}px ${-hp(0.13)}px ${hp(0.13)}px #d7e1ee;
  text-align: center;
  font-size: ${hp(1.69)}px;
`;
