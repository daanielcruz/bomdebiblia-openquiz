import React, {useEffect, useState, useCallback} from 'react';
import {
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from '@react-native-firebase/admob';

import logoImg from '../../assets/logo.png';

import {
  HeaderContent,
  Header,
  HeaderContainer,
  Container,
  LogoImg,
  HeaderTextContainer,
  HeaderTitle,
  HeaderTextMin,
  Content,
  Title,
  Dot,
  Explanation,
  Email,
  AdsButton,
  AdsButtonText,
  ButtonBox,
  ActvtIndicator,
} from './styles';

const rewarded = RewardedAd.createForAdRequest(TestIds.REWARDED, {
  requestNonPersonalizedAdsOnly: false,
  keywords: [
    'bible',
    'christ',
    'bíblia',
    'cristão',
    'igreja',
    'teologia',
    'protestante',
    'church',
    'christianism',
    'education',
    'study',
    'educação',
    'escola',
    'universidade',
    'banco',
    'finanças',
    'university',
    'money',
    'finances',
  ],
});

const More = () => {
  const [isAdsLoading, setIsAdsLoading] = useState(true);
  const [adsError, setAdsError] = useState(false);

  useEffect(() => {
    const eventListener = rewarded.onAdEvent((type, error) => {
      if (type === RewardedAdEventType.LOADED) {
        setIsAdsLoading(false);
        setAdsError(false);
      }

      if (error) {
        setAdsError(true);
        setIsAdsLoading(true);
      }

      if (type === RewardedAdEventType.EARNED_REWARD) {
        setTimeout(() => {
          rewarded.load();
        }, 10000);
      }
    });
    rewarded.load();
    return () => {
      eventListener();
    };
  }, []);

  const handleViewAds = useCallback(() => {
    setIsAdsLoading(true);
    rewarded.show();
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContent colors={['#4c669f', '#3b5998', '#192f6a']}>
          <HeaderContainer>
            <LogoImg source={logoImg} resizeMode={'contain'} />
            <HeaderTextContainer>
              <HeaderTitle>Sobre nós</HeaderTitle>
              <HeaderTextMin>Você faz parte dessa família!</HeaderTextMin>
            </HeaderTextContainer>
          </HeaderContainer>
        </HeaderContent>
      </Header>
      <Content showsVerticalScrollIndicator={false}>
        <Title>
          Olá<Dot> ,</Dot>
        </Title>
        <Explanation>
          Muito obrigado por fazer parte da família Bom de Bíblia!
        </Explanation>
        <Explanation>
          Nosso time é pequeno e estamos trabalhando para formular mais
          perguntas e deixar nosso aplicativo cada vez melhor!
        </Explanation>
        <Explanation>
          Para nos ajudar você pode clicar no botão abaixo e assistir um
          anúncio, ou nos contatar por e-mail:
        </Explanation>
        <Email>public@danielcruz.dev.br</Email>
        <ButtonBox>
          <AdsButton
            delayPressIn={0}
            onPress={handleViewAds}
            disabled={isAdsLoading}
            isLoading={isAdsLoading}>
            <AdsButtonText>
              {!adsError && !isAdsLoading && 'Ver anúncio'}
              {!adsError && isAdsLoading && (
                <ActvtIndicator size={25} color={'white'} />
              )}
              {adsError && 'Indisponível'}
            </AdsButtonText>
          </AdsButton>
        </ButtonBox>
      </Content>
    </Container>
  );
};

export default More;
