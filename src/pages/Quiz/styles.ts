import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {vw} from '../../utils/viewport-units';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const statusBarHeight =
  StatusBar.currentHeight === undefined ? 0 : StatusBar.currentHeight;

export const Container = styled(LinearGradient)`
  flex: 1;
`;

export const LoadingContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  position: relative;
`;

export const Content = styled.View`
  flex: 1;
  margin-left: ${wp(5.1)}px;
  margin-right: ${wp(5.1)}px;
  margin-top: ${statusBarHeight + hp(2)}px;
  margin-bottom: ${hp(2.6)}px;
`;

export const CategoryText = styled.Text`
  font-family: 'Poppins-Regular';
  color: white;
  font-size: ${hp(3.25)}px;
  opacity: 0.5;
`;

export const CurrentQuestionTextContainer = styled.View`
  flex-direction: row;
`;

export const CurrentQuestionText = styled.Text`
  font-family: 'Archivo-Bold';
  color: white;
  font-size: ${hp(3.888)}px;
  opacity: 0.9;
`;

export const LastQuestionText = styled.Text`
  font-family: 'Poppins-Regular';
  color: white;
  margin-top: ${hp(1.05)}px;
  font-size: ${hp(3.25)}px;
  opacity: 0.5;
`;

export const CountdownContainer = styled.View`
  position: absolute;
  right: ${wp(3.1)}px;
  top: ${hp(2.6)}px;
  border-width: 2px;
  border-color: white;
  padding: ${hp(1.3)}px;
  padding-left: ${wp(3.83)}px;
  padding-right: ${wp(3.83)}px;
  elevation: 4;
`;

export const CountdownText = styled.Text`
  font-family: 'Archivo-Bold';
  color: white;
  font-size: ${hp(3.888)}px;
  opacity: 0.9;
`;

export const QuestionsGuideContainer = styled.View`
  flex-direction: row;
  margin-top: ${hp(2.5)}px;
  margin-bottom: ${hp(3.8)}px;
`;

export const QuestionsGuide = styled.View`
  border-width: 2px;
  width: ${wp(3.83)}px;
  margin-right: ${wp(2.5)}px;
  border-radius: ${hp(0.26)}px;
  border-color: ${({isCorrect}: {isCorrect: boolean | null}) => {
    if (isCorrect === null) {
      return 'rgba(255,255,255,0.2)';
    } else if (isCorrect) {
      return '#34CB79';
    } else {
      return 'red';
    }
  }};
`;

export const QuestionText = styled.Text`
  font-family: 'Poppins-Regular';
  color: white;
  font-size: ${hp(2.4)}px;
  opacity: 0.9;
  margin-bottom: ${hp(2.5)}px;
`;

export const AnswerButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-left: ${wp(5.1)}px;
  height: ${hp(6.8)}px;
  border-width: 1px;
  border-radius: ${hp(1.3)}px;
  background-color: rgba(255, 255, 255, 0.05);
  margin-bottom: ${hp(1.95)}px;
  border-color: ${({animate}: {animate?: boolean | null | string}) => {
    if (animate === null) {
      return 'rgba(255,255,255,0.1)';
    } else if (animate === 'fail') {
      return 'red';
    } else if (animate === 'correct') {
      return '#34CB79';
    } else {
      return animate ? 'red' : '#34CB79';
    }
  }};
`;

export const AnswerButtonText = styled.Text`
  max-width: 90%;
  font-family: 'Archivo-Bold';
  color: rgba(255, 255, 255, 0.8);
  font-size: ${hp(2)}px;
  margin-right: ${wp(2)}px;
`;

export const IconContainer = styled.View`
  position: absolute;
  right: ${wp(5.1)}px;
`;

export const KnowMoreButton = styled.TouchableOpacity`
  margin-top: ${hp(1)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 40%;
  padding-left: ${wp(4.1)}px;
  padding-right: ${wp(4.1)}px;
  height: ${hp(5)}px;
  border-radius: 2px;
  border-width: 1px;
  background-color: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
`;

export const KnowMoreText = styled.Text`
  margin-left: ${wp(1.5)}px;
  font-family: 'Archivo-Bold';
  color: rgba(255, 255, 255, 0.8);
  font-size: ${hp(1.9)}px;
`;

export const FooterButtons = styled.View`
  position: absolute;
  bottom: 0;
  flex-direction: row;
  justify-content: space-between;
  width: ${vw(100) - 40}px;
`;

export const QuitButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const QuitButtonText = styled.Text`
  margin-left: ${wp(1.8)}px;
  margin-top: ${hp(0.64)}px;
  font-family: 'Poppins-Regular';
  font-size: ${hp(2.325)}px;
  color: rgba(255, 255, 255, 0.9);
`;

export const NextButton = styled.TouchableOpacity`
  background: ${({disabled}: {disabled: boolean}) =>
    disabled ? 'lightgray' : '#06ccee'};
  justify-content: center;
  align-items: center;
  border-radius: ${hp(1.945)}px;
  height: ${hp(7.75)}px;
  width: ${wp(40.7)}px;
`;

export const NextButtonText = styled.Text`
  font-family: 'Archivo-Bold';
  font-size: ${hp(2.325)}px;
  color: ${({disabled}: {disabled: boolean}) =>
    disabled ? '#26262626' : 'white'};
`;
