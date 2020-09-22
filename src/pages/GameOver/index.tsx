import React, {useState, useEffect, useCallback} from 'react';
import {Share} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {
  BannerAdSize,
  InterstitialAd,
  AdEventType,
  BannerAd,
  TestIds,
} from '@react-native-firebase/admob';

import {iState} from '../../@types/myTypes';

import {saveScoreSaga} from '../../redux/core/actions/currentSessionActions';

import trophyImg from '../../assets/trophy.png';
import congratsImg from '../../assets/congrats.png';
import badResultImg from '../../assets/bad-result.png';

import {
  Container,
  Content,
  Title,
  StyledImage,
  Congrats,
  Explanation,
  ScoreText,
  ScoreNumber,
  TotalQuestions,
  FooterButtons,
  GoBackButton,
  ShareButton,
  GoBackButtonText,
  ShareButtonText,
  BannerContainer,
  CongratsBackground,
} from './styles';

const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
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

const GameOver = () => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const {finalScore, currentCategory} = useSelector(
    (state: iState) => state.currentSessionState,
  );

  const handleShare = useCallback(async () => {
    try {
      await Share.share({
        message:
          'Bom de Bíblia | Teste seus conhecimentos bíblicos! | Baixe já: https://play.google.com/store/apps/details?id=com.danielfcruz.bomdebiblia',
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleNavigateToHome = useCallback(() => {
    navigation.navigate('TabNav');
  }, [navigation]);

  useEffect(() => {
    if (currentCategory) {
      dispatch(saveScoreSaga(finalScore, currentCategory));
    }
  }, [dispatch, finalScore, currentCategory]);

  useEffect(() => {
    const eventListener = interstitial.onAdEvent((type) => {
      if (type === AdEventType.LOADED) {
        setIsLoading(false);
      }
    });
    interstitial.load();
    return () => {
      eventListener();
    };
  }, [finalScore]);

  useEffect(() => {
    if (!isLoading) {
      interstitial.show();
    }
  }, [isLoading]);

  return (
    <Container
      colors={['#3b5998', '#192f6a', '#101529']}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}>
      <CongratsBackground
        source={congratsImg}
        resizeMode={'repeat'}
        imageStyle={{opacity: finalScore > 6 ? 0.2 : 0}}>
        <Content>
          <Title>Resultado do Quiz</Title>
          <StyledImage
            source={finalScore > 6 ? trophyImg : badResultImg}
            resizeMode={'contain'}
          />
          <Congrats>
            {finalScore > 6
              ? 'Você é bom de Bíblia!'
              : 'Considere estudar um pouco mais...'}
          </Congrats>
          <Explanation>
            {finalScore > 6
              ? 'Você acertou mais de 70%, e nós te parabenizamos por isso!'
              : 'Você acertou menos de 70%, mas não fique triste!'}
          </Explanation>
          <ScoreText>ACERTOS</ScoreText>
          <ScoreNumber>
            {finalScore < 10 ? '0' + finalScore : finalScore}
            <TotalQuestions>/10</TotalQuestions>
          </ScoreNumber>
          <FooterButtons>
            <GoBackButton delayPressIn={0} onPress={handleNavigateToHome}>
              <Icon
                name={'arrow-left'}
                size={20}
                color={'rgba(255,255,255,0.8)'}
              />
              <GoBackButtonText>Início</GoBackButtonText>
            </GoBackButton>

            <ShareButton delayPressIn={0} onPress={handleShare}>
              <Icon
                name={'share-2'}
                size={20}
                color={'rgba(255,255,255,0.8)'}
              />
              <ShareButtonText>Compartilhar</ShareButtonText>
            </ShareButton>
          </FooterButtons>
        </Content>

        <BannerContainer>
          <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.BANNER} />
        </BannerContainer>
      </CongratsBackground>
    </Container>
  );
};

export default GameOver;
