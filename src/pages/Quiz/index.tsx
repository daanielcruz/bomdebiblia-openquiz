import React, {useEffect, useState, useCallback} from 'react';
import {BackHandler, ActivityIndicator, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import Sound from 'react-native-sound';

import Modal from '../../components/Modal';
import KnowMoreModal from '../../components/KnowMoreModal';

import shuffleArray from '../../utils/arrayShuffler';

import {
  loadQuestionsSaga,
  setFinalScore,
} from '../../redux/core/actions/currentSessionActions';

import {iState, iShuffledQuestion, iCurrentScore} from '../../@types/myTypes';

import {
  AnswerButton,
  AnswerButtonText,
  Container,
  LoadingContainer,
  Content,
  CurrentQuestionTextContainer,
  CurrentQuestionText,
  QuestionsGuideContainer,
  LastQuestionText,
  QuestionsGuide,
  CategoryText,
  QuestionText,
  FooterButtons,
  QuitButton,
  NextButton,
  QuitButtonText,
  NextButtonText,
  CountdownContainer,
  CountdownText,
  KnowMoreButton,
  KnowMoreText,
  IconContainer,
} from './styles';

const Quiz = () => {
  const initialScore = [
    {question: 0, isCorrect: null},
    {question: 1, isCorrect: null},
    {question: 2, isCorrect: null},
    {question: 3, isCorrect: null},
    {question: 4, isCorrect: null},
    {question: 5, isCorrect: null},
    {question: 6, isCorrect: null},
    {question: 7, isCorrect: null},
    {question: 8, isCorrect: null},
    {question: 9, isCorrect: null},
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(false);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<iShuffledQuestion>(
    {} as iShuffledQuestion,
  );
  const [animationIndex0, setAnimationIndex0] = useState<
    boolean | null | string
  >(null);
  const [animationIndex1, setAnimationIndex1] = useState<
    boolean | null | string
  >(null);
  const [animationIndex2, setAnimationIndex2] = useState<
    boolean | null | string
  >(null);
  const [animationIndex3, setAnimationIndex3] = useState<
    boolean | null | string
  >(null);
  const [sounds, setSounds] = useState<Array<Sound>>([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [currentScore, setCurrentScore] = useState<iCurrentScore[]>(
    initialScore,
  );
  const [isModalExitOpen, setIsModalExitOpen] = useState(false);
  const [isModalNextOpen, setIsModalNextOpen] = useState(false);
  const [isModalKnowMoreOpen, setIsModalKnowMoreOpen] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const questionsOpacityAnimated = useState(new Animated.Value(0))[0];
  const knowMoreOpacityAnimated = useState(new Animated.Value(0))[0];

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {questions, currentCategory} = useSelector(
    (state: iState) => state.currentSessionState,
  );

  const {isMuted} = useSelector((state: iState) => state.initialDataState);

  const fadeInQuestionArea = useCallback(() => {
    Animated.timing(questionsOpacityAnimated, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [questionsOpacityAnimated]);

  const fadeOutQuestionArea = useCallback(() => {
    Animated.timing(questionsOpacityAnimated, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [questionsOpacityAnimated]);

  const fadeInKnowMoreButton = useCallback(() => {
    Animated.timing(knowMoreOpacityAnimated, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [knowMoreOpacityAnimated]);

  const fadeOutKnowMoreButton = useCallback(() => {
    Animated.timing(knowMoreOpacityAnimated, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [knowMoreOpacityAnimated]);

  const handleOpenModalNext = useCallback(() => {
    setIsModalNextOpen(true);
  }, []);

  const handleCloseModalNext = useCallback(() => {
    setIsModalNextOpen(false);
  }, []);

  const handleOpenModalExit = useCallback(() => {
    setIsModalExitOpen(true);
  }, []);

  const handleCloseModalExit = useCallback(() => {
    setIsModalExitOpen(false);
  }, []);

  const handleOpenModalKnowMore = useCallback(() => {
    setIsModalKnowMoreOpen(true);
  }, []);

  const handleCloseModalKnowMore = useCallback(() => {
    setIsModalKnowMoreOpen(false);
  }, []);

  const handleGameOver = useCallback(() => {
    const correctQuestions = currentScore.filter((question) => {
      return question.isCorrect;
    });
    dispatch(setFinalScore(correctQuestions.length));
    navigation.navigate('GameOver');
  }, [navigation, currentScore, dispatch]);

  const signIncorrectAnswer = useCallback(() => {
    setCurrentScore((state) => {
      state[currentQuestionNumber] = {
        question: currentQuestionNumber,
        isCorrect: false,
      };
      return state;
    });
  }, [currentQuestionNumber]);

  const showCorrectAnswer = useCallback(() => {
    const correctIndex = currentQuestion.answers.findIndex(
      (answer) => answer === questions[currentQuestionNumber].answer,
    );
    let markCorrectAnswer;

    switch (correctIndex) {
      case 0:
        markCorrectAnswer = setAnimationIndex0;
        break;
      case 1:
        markCorrectAnswer = setAnimationIndex1;
        break;
      case 2:
        markCorrectAnswer = setAnimationIndex2;
        break;
      case 3:
        markCorrectAnswer = setAnimationIndex3;
        break;
    }
    if (markCorrectAnswer) {
      markCorrectAnswer(false);
    }
  }, [currentQuestion.answers, currentQuestionNumber, questions]);

  const handleNextQuestion = useCallback(() => {
    setIsChecking(true);
    fadeOutQuestionArea();
    fadeOutKnowMoreButton();
    setTimeout(() => {
      setAnimationIndex0(null);
      setAnimationIndex1(null);
      setAnimationIndex2(null);
      setAnimationIndex3(null);
      setCurrentQuestionNumber((state) => state + 1);
    }, 1000);
  }, [fadeOutQuestionArea, fadeOutKnowMoreButton]);

  const handleForceGoNext = useCallback(() => {
    setIsChecking(true);
    setIsDisabled(true);
    setIsModalNextOpen(false);
    signIncorrectAnswer();
    if (currentQuestionNumber > 8) {
      handleGameOver();
    } else {
      handleNextQuestion();
    }
  }, [
    handleNextQuestion,
    signIncorrectAnswer,
    currentQuestionNumber,
    handleGameOver,
  ]);

  const handleCheckCountDown = useCallback(() => {
    if (!isDisabled && countdown > 0) {
      handleOpenModalNext();
    } else if (currentQuestionNumber > 8) {
      handleGameOver();
    } else {
      handleNextQuestion();
    }
  }, [
    countdown,
    handleNextQuestion,
    handleOpenModalNext,
    isDisabled,
    currentQuestionNumber,
    handleGameOver,
  ]);

  const handleNavigateToHome = useCallback(() => {
    setIsModalExitOpen(false);
    setTimeout(() => {
      navigation.navigate('TabNav');
    }, 200);
  }, [navigation]);

  const handleAnswer = useCallback(
    (index: number) => {
      setIsChecking(true);
      setIsDisabled(true);
      let doAnimationFunc: React.Dispatch<React.SetStateAction<
        boolean | null | string
      >>;
      let isCorrectAnswer: boolean;

      if (
        currentQuestion.answers[index] ===
        questions[currentQuestionNumber].answer
      ) {
        isCorrectAnswer = true;
      } else {
        isCorrectAnswer = false;
      }

      switch (index) {
        case 0:
          doAnimationFunc = setAnimationIndex0;
          break;
        case 1:
          doAnimationFunc = setAnimationIndex1;
          break;
        case 2:
          doAnimationFunc = setAnimationIndex2;
          break;
        case 3:
          doAnimationFunc = setAnimationIndex3;
          break;
      }

      const animate = setInterval(() => {
        doAnimationFunc((state) => !state);
      }, 500);

      setTimeout(() => {
        clearInterval(animate);

        setCurrentScore((state) => {
          state[currentQuestionNumber] = {
            question: currentQuestionNumber,
            isCorrect: !!isCorrectAnswer,
          };
          return state;
        });
        if (!isMuted) {
          isCorrectAnswer ? sounds[0].play() : sounds[1].play();
        }
        isCorrectAnswer ? doAnimationFunc('correct') : doAnimationFunc('fail');

        if (!isCorrectAnswer) {
          showCorrectAnswer();
        }

        setTimeout(() => {
          setIsChecking(false);
          fadeInKnowMoreButton();
        }, 500);
      }, 3000);
    },
    [
      questions,
      currentQuestion,
      currentQuestionNumber,
      showCorrectAnswer,
      sounds,
      isMuted,
      fadeInKnowMoreButton,
    ],
  );

  useEffect(() => {
    const timer =
      countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);

    if (isDisabled) {
      if (timer) {
        clearInterval(timer);
      }
    }

    if (countdown === 0 && !isDisabled) {
      setIsDisabled(true);
      signIncorrectAnswer();
      fadeInKnowMoreButton();
      showCorrectAnswer();
      if (!isMuted) {
        sounds[1].play();
      }
    }

    if (timer) {
      return () => clearInterval(timer);
    }
  }, [
    countdown,
    signIncorrectAnswer,
    isDisabled,
    showCorrectAnswer,
    currentQuestionNumber,
    handleGameOver,
    sounds,
    isMuted,
    fadeInKnowMoreButton,
  ]);

  useEffect(() => {
    const backAction = () => {
      setIsModalExitOpen(true);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [handleOpenModalExit]);

  useEffect(() => {
    if (currentCategory) {
      dispatch(loadQuestionsSaga(currentCategory));
    }
  }, [dispatch, currentCategory]);

  useEffect(() => {
    if (questions[0]) {
      const questionObject = {
        question: questions[0].question,
        answers: [
          questions[0].answer,
          questions[0].fakeanswer1,
          questions[0].fakeanswer2,
          questions[0].fakeanswer3,
        ],
        knowmore: questions[0].knowmore,
      };

      shuffleArray(questionObject.answers);

      setCurrentQuestion(questionObject);
      setIsLoading(false);
      fadeInQuestionArea();
    }
  }, [questions, dispatch, fadeInQuestionArea]);

  useEffect(() => {
    if (currentQuestionNumber > 0) {
      const questionObject = {
        question: questions[currentQuestionNumber].question,
        answers: [
          questions[currentQuestionNumber].answer,
          questions[currentQuestionNumber].fakeanswer1,
          questions[currentQuestionNumber].fakeanswer2,
          questions[currentQuestionNumber].fakeanswer3,
        ],
        knowmore: questions[currentQuestionNumber].knowmore,
      };

      shuffleArray(questionObject.answers);
      setCurrentQuestion(questionObject);
      setTimeout(() => {
        fadeInQuestionArea();
        setCountdown(30);
      }, 1000);

      setTimeout(() => {
        setIsChecking(false);
        setIsDisabled(false);
      }, 2000);
    }
  }, [
    currentQuestionNumber,
    questions,
    fadeOutQuestionArea,
    fadeInQuestionArea,
  ]);

  useEffect(() => {
    const correctSoundLoaded = new Sound(
      'correct.mp3',
      Sound.MAIN_BUNDLE,
      (err) => {
        if (err) {
          console.log(err);
        }
      },
    );

    const wrongSoundLoaded = new Sound(
      'wrong.mp3',
      Sound.MAIN_BUNDLE,
      (err) => {
        if (err) {
          console.log(err);
        }
      },
    );

    setSounds([correctSoundLoaded, wrongSoundLoaded]);
  }, []);

  return (
    <>
      <Modal
        isModalVisible={isModalExitOpen}
        MainText={'Você tem certeza que deseja sair?'}
        TextButton1={'Não'}
        FuncButton1={handleCloseModalExit}
        TextButton2={'Sair'}
        FuncButton2={handleNavigateToHome}
      />

      <Modal
        isModalVisible={isModalNextOpen}
        MainText={'Você ainda tem tempo, deseja pular esta questão?'}
        TextButton1={'Não'}
        FuncButton1={handleCloseModalNext}
        TextButton2={currentQuestionNumber > 8 ? 'Resultado' : 'Próxima'}
        FuncButton2={handleForceGoNext}
      />

      <KnowMoreModal
        isModalVisible={isModalKnowMoreOpen}
        MainText={currentQuestion.knowmore}
        FuncCloseModal={handleCloseModalKnowMore}
      />

      <Container
        colors={['#3b5998', '#192f6a', '#101529']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}>
        {isLoading && (
          <LoadingContainer>
            <ActivityIndicator size="large" color={'white'} />
          </LoadingContainer>
        )}
        {!isLoading && (
          <Content>
            <Animated.View style={{opacity: questionsOpacityAnimated}}>
              <CountdownContainer>
                <CountdownText>
                  {countdown < 10 ? '0' + countdown : countdown}
                </CountdownText>
              </CountdownContainer>
            </Animated.View>
            <CategoryText>{currentCategory}</CategoryText>
            <CurrentQuestionTextContainer>
              <CurrentQuestionText>
                Questão{' '}
                {currentQuestionNumber < 9
                  ? '0' + (currentQuestionNumber + 1)
                  : currentQuestionNumber + 1}
              </CurrentQuestionText>
              <LastQuestionText>/10</LastQuestionText>
            </CurrentQuestionTextContainer>
            <QuestionsGuideContainer>
              {currentScore !== undefined &&
                currentScore.map((score) => (
                  <QuestionsGuide
                    isCorrect={score.isCorrect}
                    key={score.question}
                  />
                ))}
            </QuestionsGuideContainer>
            <Animated.View style={{opacity: questionsOpacityAnimated}}>
              <QuestionText>{currentQuestion.question}</QuestionText>
              <AnswerButton
                animate={animationIndex0}
                delayPressIn={0}
                onPress={() => handleAnswer(0)}
                disabled={isDisabled}>
                <AnswerButtonText>
                  {currentQuestion.answers[0]}
                </AnswerButtonText>
                <IconContainer>
                  {animationIndex0 === 'fail' && (
                    <Icon name={'x-circle'} color={'red'} size={25} />
                  )}
                  {animationIndex0 === 'correct' && (
                    <Icon name={'check-circle'} color={'#34CB79'} size={25} />
                  )}
                </IconContainer>
              </AnswerButton>

              <AnswerButton
                animate={animationIndex1}
                delayPressIn={0}
                onPress={() => handleAnswer(1)}
                disabled={isDisabled}>
                <AnswerButtonText>
                  {currentQuestion.answers[1]}
                </AnswerButtonText>
                <IconContainer>
                  {animationIndex1 === 'fail' && (
                    <Icon name={'x-circle'} color={'red'} size={25} />
                  )}
                  {animationIndex1 === 'correct' && (
                    <Icon name={'check-circle'} color={'#34CB79'} size={25} />
                  )}
                </IconContainer>
              </AnswerButton>

              <AnswerButton
                animate={animationIndex2}
                delayPressIn={0}
                onPress={() => handleAnswer(2)}
                disabled={isDisabled}>
                <AnswerButtonText>
                  {currentQuestion.answers[2]}
                </AnswerButtonText>
                <IconContainer>
                  {animationIndex2 === 'fail' && (
                    <Icon name={'x-circle'} color={'red'} size={25} />
                  )}
                  {animationIndex2 === 'correct' && (
                    <Icon name={'check-circle'} color={'#34CB79'} size={25} />
                  )}
                </IconContainer>
              </AnswerButton>

              <AnswerButton
                animate={animationIndex3}
                delayPressIn={0}
                onPress={() => handleAnswer(3)}
                disabled={isDisabled}>
                <AnswerButtonText>
                  {currentQuestion.answers[3]}
                </AnswerButtonText>
                <IconContainer>
                  {animationIndex3 === 'fail' && (
                    <Icon name={'x-circle'} color={'red'} size={25} />
                  )}
                  {animationIndex3 === 'correct' && (
                    <Icon name={'check-circle'} color={'#34CB79'} size={25} />
                  )}
                </IconContainer>
              </AnswerButton>
            </Animated.View>

            <Animated.View style={{opacity: knowMoreOpacityAnimated}}>
              <KnowMoreButton
                delayPressIn={0}
                onPress={handleOpenModalKnowMore}
                disabled={
                  currentScore[currentQuestionNumber].isCorrect !== null
                    ? false
                    : true
                }>
                <Icon
                  name={'help-circle'}
                  color={'rgba(255, 255, 255, 0.8)'}
                  size={18}
                />
                <KnowMoreText>Saiba Mais...</KnowMoreText>
              </KnowMoreButton>
            </Animated.View>

            <FooterButtons>
              <QuitButton delayPressIn={0} onPress={handleOpenModalExit}>
                <Icon
                  name={'power'}
                  size={20}
                  color={'rgba(255,255,255,0.8)'}
                />
                <QuitButtonText>Desistir</QuitButtonText>
              </QuitButton>
              <NextButton
                onPress={handleCheckCountDown}
                delayPressIn={0}
                disabled={isChecking}>
                <NextButtonText disabled={isChecking}>
                  {currentQuestionNumber > 8 ? 'Resultado' : 'Próxima'}
                </NextButtonText>
              </NextButton>
            </FooterButtons>
          </Content>
        )}
      </Container>
    </>
  );
};

export default Quiz;
