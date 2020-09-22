import React, {useState, useCallback} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {iState, iCategories} from '../../@types/myTypes';

import {
  saveIsMutedSaga,
  setCurrentCategory,
} from '../../redux/core/actions/currentSessionActions';

import Modal from '../../components/Modal';

import logoImg from '../../assets/logo.png';
import questionsImg from '../../assets/questions.png';
import bibleImg from '../../assets/bible.png';

import {
  Container,
  Header,
  HeaderContent,
  GreetingContainer,
  GreetingText,
  PresentationContainer,
  PresentationLogo,
  PresentationTextContainer,
  PresentationText,
  PresentationTextMin,
  Content,
  CategoriesText,
  CategoriesContainer,
  CategoryContainerButton,
  CategoryContent,
  CategoryImg,
  CategoryTitle,
  BibleImg,
  MuteContainer,
  GreetingTextAndMuteContainer,
  GreetingTextContainer,
} from './styles';

const Home: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {isMuted, categories} = useSelector(
    (state: iState) => state.initialDataState,
  );
  const {currentCategory} = useSelector(
    (state: iState) => state.currentSessionState,
  );

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSetIsMuted = useCallback(() => {
    dispatch(saveIsMutedSaga(!isMuted));
  }, [dispatch, isMuted]);

  const handleOpenConfirmationModal = useCallback(
    (handledCategory: string) => {
      dispatch(setCurrentCategory(handledCategory));
      setIsModalVisible(true);
    },
    [dispatch],
  );

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const handleStartQuiz = useCallback(() => {
    setIsModalVisible(false);
    setTimeout(() => {
      navigation.navigate('Quiz');
    }, 200);
  }, [navigation]);

  const Item = useCallback(
    ({name, image}: {name: string; image: string}) => {
      return (
        <CategoryContainerButton
          onPress={() => handleOpenConfirmationModal(name)}>
          <CategoryContent>
            <CategoryImg
              source={{
                uri: image,
              }}
              resizeMode={'contain'}
            />
            <CategoryTitle>{name}</CategoryTitle>
          </CategoryContent>
        </CategoryContainerButton>
      );
    },
    [handleOpenConfirmationModal],
  );

  const renderItem = useCallback(({item}: {item: iCategories}) => {
    return <Item name={item.name} image={item.imageUrl} />;
  }, []);

  return (
    <>
      <Modal
        isModalVisible={isModalVisible}
        MainText={`Deseja iniciar o quiz no tema: ${currentCategory}?`}
        TextButton1={'Não'}
        FuncButton1={handleCloseModal}
        TextButton2={'Começar'}
        FuncButton2={handleStartQuiz}
      />
      <Container>
        <Header>
          <HeaderContent colors={['#4c669f', '#3b5998', '#192f6a']}>
            <GreetingContainer>
              <BibleImg source={bibleImg} resizeMode={'contain'} />
              <GreetingTextAndMuteContainer>
                <GreetingTextContainer>
                  <GreetingText>Bem vindo,</GreetingText>
                  <GreetingText>bom de Bíblia!</GreetingText>
                </GreetingTextContainer>
                <MuteContainer delayPressIn={0} onPress={handleSetIsMuted}>
                  <Icon
                    name={
                      isMuted ? 'volume-mute-outline' : 'volume-high-outline'
                    }
                    color={'white'}
                    size={35}
                  />
                </MuteContainer>
              </GreetingTextAndMuteContainer>
            </GreetingContainer>
          </HeaderContent>
        </Header>

        <PresentationContainer
          source={questionsImg}
          imageStyle={{opacity: 0.1}}>
          <PresentationLogo source={logoImg} resizeMode={'contain'} />
          <PresentationTextContainer>
            <PresentationText>Desafie &</PresentationText>
            <PresentationText>aprenda!</PresentationText>
            <PresentationTextMin>
              Teste seus{'\n '}conhecimentos!
            </PresentationTextMin>
          </PresentationTextContainer>
        </PresentationContainer>

        <Content>
          <CategoriesText>Selecione um assunto:</CategoriesText>
          <CategoriesContainer>
            <FlatList
              data={categories}
              renderItem={renderItem}
              numColumns={3}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.name}
            />
          </CategoriesContainer>
        </Content>
      </Container>
    </>
  );
};

export default Home;
