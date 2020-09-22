import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

import {registerNoFirstTimeSaga} from '../../redux/core/actions/firstTimeActions';

import logoImg from '../../assets/logo.png';

import {
  Content,
  Container,
  Slogan,
  ButtonIcon,
  ActvIndicator,
  Button,
  ButtonText,
  Logo,
} from './styles';
import {useNavigation} from '@react-navigation/native';

const Greeting = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleNavigateToHome = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigation.navigate('TabNav');
    }, 500);
    setTimeout(() => {
      dispatch(registerNoFirstTimeSaga());
    }, 1000);
  };
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Container colors={['#4c669f', '#3b5998', '#192f6a']}>
        <Content>
          <Logo source={logoImg} resizeMode={'contain'} />
          <Slogan>
            Compartilhe e aprenda a Palavra de Deus, seja bom de Bíblia!
          </Slogan>
          {isLoading && <ActvIndicator size={'large'} color={'white'} />}
          <Button
            onPress={handleNavigateToHome}
            delayPressIn={0}
            isLoading={isLoading}
            disabled={isLoading}>
            <ButtonIcon>
              <Icon name="log-in" color="#FFF" size={24} />
            </ButtonIcon>

            <ButtonText disabled={isLoading}>COMEÇAR</ButtonText>
          </Button>
        </Content>
      </Container>
    </>
  );
};

export default Greeting;
