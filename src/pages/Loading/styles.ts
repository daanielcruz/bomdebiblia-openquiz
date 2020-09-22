import styled from 'styled-components/native';
import {StatusBar} from 'react-native';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const statusBarHeight =
  StatusBar.currentHeight === undefined ? 0 : StatusBar.currentHeight;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: ${statusBarHeight + hp(3.22)}px;
`;

export const StyledImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ActvIndicator = styled.ActivityIndicator`
  position: absolute;
  bottom: ${hp(19.3)}px;
`;
