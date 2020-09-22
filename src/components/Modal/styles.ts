import styled from 'styled-components/native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const StyledModal = styled.Modal``;

export const ModalContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.6);
  flex: 1;
  justify-content: center;
`;

export const ModalContent = styled.View`
  background-color: #edf3f6;
  align-items: center;
  height: ${hp(41.33)}px;
  border-radius: ${hp(2.6)}px;
  margin-right: ${wp(3.85)}px;
  margin-left: ${wp(3.85)}px;
  padding: 0 ${hp(3.25)}px ${hp(3.25)}px ${hp(3.25)}px;
`;

export const BattleImgBckgdContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const ModalImg = styled.Image`
  width: ${wp(48)}px;
  height: ${hp(10.35)}px;
  margin-bottom: ${hp(1.94)}px;
`;

export const ModalText = styled.Text`
  color: black;
  font-family: 'Poppins-Regular';
  font-size: ${hp(2.99)}px;
  text-align: center;
`;

export const ModalButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: ${({isOneButton}: {isOneButton: string | null}) =>
    isOneButton ? 'space-between' : 'center'};
  align-items: center;
`;

export const ModalCloseButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: ${wp(33.1)}px;
  height: ${hp(3.87)}px;
  padding: ${hp(3.26)}px;
`;

export const ModalCloseText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: ${hp(2.19)}px;
  color: #192f6a;
`;

export const ModalEnterButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: ${hp(7.765)}px;
  width: ${wp(33.1)}px;
  background-color: #192f6a;
  border-radius: ${hp(1.05)}px;
`;

export const ModalEnterText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: ${hp(2.19)}px;
  color: white;
`;
