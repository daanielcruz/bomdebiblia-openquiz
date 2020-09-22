import styled from 'styled-components/native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {vw} from '../../utils/viewport-units';

export const StyledModal = styled.Modal``;

export const ModalContent = styled.View`
  position: absolute;
  bottom: 0;
  width: ${vw(100)}px;
  background-color: #edf3f6;
  align-items: center;
  height: ${hp(50)}px;
  border-top-right-radius: ${hp(8)}px;
  border-top-left-radius: ${hp(8)}px;
  padding: ${hp(3.25)}px;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  right: ${wp(5)}px;
  padding: ${hp(3)}px;
`;

export const Title = styled.Text`
  font-family: 'Archivo-Bold';
  font-size: ${hp(3.5)}px;
`;

export const TextContent = styled.Text`
  margin-top: ${hp(2.5)}px;
  font-family: 'Poppins-Regular';
  font-size: ${hp(2.3)}px;
`;
