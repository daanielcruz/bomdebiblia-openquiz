import React from 'react';

import {
  StyledModal,
  ModalContainer,
  ModalContent,
  BattleImgBckgdContainer,
  ModalText,
  ModalImg,
  ModalButtonsContainer,
  ModalCloseButton,
  ModalEnterButton,
  ModalCloseText,
  ModalEnterText,
} from './styles';

import logoImg from '../../assets/logo.png';

interface iModalProps {
  isModalVisible: boolean;
  MainText: string;
  TextButton1: string;
  FuncButton1: () => void;
  TextButton2?: string | null;
  FuncButton2?: () => void;
}

const Modal: React.FC<iModalProps> = ({
  isModalVisible,
  MainText,
  TextButton1,
  FuncButton1,
  TextButton2 = null,
  FuncButton2,
}) => {
  return (
    <StyledModal
      visible={isModalVisible}
      animationType="fade"
      transparent={true}
      statusBarTranslucent={true}>
      <ModalContainer>
        <ModalContent>
          <BattleImgBckgdContainer>
            <ModalImg source={logoImg} resizeMode={'contain'} />
            <ModalText>{MainText}</ModalText>
          </BattleImgBckgdContainer>
          <ModalButtonsContainer isOneButton={TextButton2}>
            <ModalCloseButton delayPressIn={0} onPress={FuncButton1}>
              <ModalCloseText>{TextButton1}</ModalCloseText>
            </ModalCloseButton>
            {FuncButton2 && (
              <ModalEnterButton delayPressIn={0} onPress={FuncButton2}>
                <ModalEnterText>{TextButton2}</ModalEnterText>
              </ModalEnterButton>
            )}
          </ModalButtonsContainer>
        </ModalContent>
      </ModalContainer>
    </StyledModal>
  );
};

export default Modal;
