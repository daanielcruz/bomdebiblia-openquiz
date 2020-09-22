import React from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  StyledModal,
  ModalContent,
  CloseButton,
  Title,
  TextContent,
} from './styles';

interface iModalProps {
  isModalVisible: boolean;
  MainText: string;
  FuncCloseModal: () => void;
}

const KnowMoreModal: React.FC<iModalProps> = ({
  isModalVisible,
  MainText,
  FuncCloseModal,
}) => {
  return (
    <StyledModal
      visible={isModalVisible}
      animationType="slide"
      transparent={true}>
      <ModalContent>
        <CloseButton delayPressIn={0} onPress={FuncCloseModal}>
          <Icon name={'corner-right-down'} color={'black'} size={20} />
        </CloseButton>
        <Title>Saiba Mais</Title>
        <ScrollView>
          <TextContent>{MainText}</TextContent>
        </ScrollView>
      </ModalContent>
    </StyledModal>
  );
};

export default KnowMoreModal;
