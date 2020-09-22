import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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

export const Content = styled.ScrollView`
  flex: 1;
  margin-left: ${wp(5.1)}px;
  margin-right: ${wp(5.1)}px;
  margin-top: ${hp(1)}px;
`;

export const Title = styled.Text`
  font-family: 'Archivo-Bold';
  color: black;
  font-size: ${hp(4)}px;
  margin-bottom: ${hp(0.5)}px;
`;

export const Dot = styled.Text`
  font-family: 'Archivo-Bold';
  color: gray;
  font-size: ${hp(3.6)}px;
`;

export const Explanation = styled.Text`
  font-family: 'Poppins-Regular';
  color: black;
  font-size: ${hp(2.6)}px;
`;

export const Email = styled.Text`
  font-family: 'Archivo-Bold';
  color: black;
  font-size: ${hp(2.35)}px;
`;

export const ButtonBox = styled.View`
  justify-content: center;
  margin-top: ${hp(1.29)}px;
  flex-direction: row;
`;

export const AdsButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: ${hp(6.45)}px;
  width: ${wp(40)}px;
  background-color: ${({isLoading}: {isLoading: boolean}) =>
    isLoading ? 'lightgray' : '#192f6a '};
  border-radius: ${hp(1.05)}px;
  margin-top: ${hp(2)}px;
`;

export const AdsButtonText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: ${hp(1.8)}px;
  color: white;
`;

export const ActvtIndicator = styled.ActivityIndicator``;
