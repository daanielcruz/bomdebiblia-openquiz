import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';
import Icon from 'react-native-vector-icons/Feather';
import moment from 'moment';

import {iState} from '../../@types/myTypes';

import logoImg from '../../assets/logo.png';
import noScoreImg from '../../assets/confused.png';

import {
  HeaderContent,
  Header,
  HeaderContainer,
  Container,
  LogoImg,
  HeaderTextContainer,
  HeaderTitle,
  HeaderTextMin,
  NoScoreBox,
  NoScoreImg,
  NoScoreText,
  ScoreBox,
  Content,
  BannerBox,
  ScrollContainer,
  CategoryImg,
  ScoreContentBox,
  CategoryAndTimeBox,
  CategoryText,
  TimeText,
  ScoreText,
  ScoreNumberText,
} from './styles';

const Scores = () => {
  const {scores, categories} = useSelector(
    (state: iState) => state.initialDataState,
  );

  moment.defineLocale('br', {
    relativeTime: {
      future: 'em %s',
      past: '%s atrás',
      s: '1s',
      ss: '%ss',
      m: '1min',
      mm: '%dmin',
      h: '1h',
      hh: '%dh',
      d: '1d',
      dd: '%dd',
      M: '1m',
      MM: '%dm',
      y: '1a',
      yy: '%da',
    },
  });

  return (
    <Container>
      <Header>
        <HeaderContent colors={['#4c669f', '#3b5998', '#192f6a']}>
          <HeaderContainer>
            <LogoImg source={logoImg} resizeMode={'contain'} />
            <HeaderTextContainer>
              <HeaderTitle>Resultados</HeaderTitle>
              <HeaderTextMin>Acompanhe sua evolução!</HeaderTextMin>
            </HeaderTextContainer>
          </HeaderContainer>
        </HeaderContent>
      </Header>
      {scores.length === 0 && (
        <NoScoreBox>
          <NoScoreImg source={noScoreImg} resizeMode={'contain'} />

          <NoScoreText>Ainda não há resultados por aqui!</NoScoreText>
        </NoScoreBox>
      )}
      <ScrollContainer>
        <Content>
          {scores.length !== 0 &&
            scores.map(({id, category, score, createdAt}) => {
              return (
                <ScoreBox key={id}>
                  <CategoryImg
                    source={{
                      uri:
                        categories[
                          categories.findIndex((cat) => cat.name === category)
                        ].imageUrl,
                    }}
                    resizeMode={'contain'}
                  />
                  <ScoreContentBox>
                    <View>
                      <CategoryAndTimeBox>
                        <CategoryText>{category}</CategoryText>
                        <TimeText>{moment(createdAt).fromNow(true)}</TimeText>
                      </CategoryAndTimeBox>
                      <ScoreText>
                        Acertos:{' '}
                        <ScoreNumberText score={score}>
                          {score < 10 ? '0' + score : score}
                        </ScoreNumberText>
                        /10
                      </ScoreText>
                    </View>
                    <Icon name={score > 6 ? 'check' : 'x'} size={25} />
                  </ScoreContentBox>
                </ScoreBox>
              );
            })}
        </Content>
      </ScrollContainer>
      <BannerBox>
        <BannerAd
          unitId={TestIds.BANNER}
          size={BannerAdSize.BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: false,
          }}
        />
      </BannerBox>
    </Container>
  );
};

export default Scores;
