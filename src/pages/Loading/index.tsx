import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import RNExitApp from 'react-native-exit-app';

import Modal from '../../components/Modal';

import {
  loadOnlineDataSaga,
  loadOfflineDataSaga,
  checkUpdateSaga,
  loadIsMutedSaga,
  loadScoresSaga,
} from '../../redux/core/actions/initialDataActions';

import {checkFirstTimeSaga} from '../../redux/core/actions/firstTimeActions';

import logoImg from '../../assets/icon.png';

import {iState} from '../../@types/myTypes';
import {SafeArea, StyledImage, ActvIndicator} from './styles';

export const Loading = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const {firstTimeState, initialDataState} = useSelector(
    (state: iState) => state,
  );

  useEffect(() => {
    dispatch(checkFirstTimeSaga());
    dispatch(loadIsMutedSaga());
    dispatch(loadScoresSaga());
  }, [dispatch]);

  useEffect(() => {
    if (firstTimeState.isFirstTime !== null) {
      NetInfo.fetch().then((state) => {
        if (state.isConnected) {
          dispatch(checkUpdateSaga());
        } else {
          if (firstTimeState.isFirstTime) {
            setIsModalVisible(true);
          } else {
            dispatch(loadOfflineDataSaga());
          }
        }
      });
    }
  }, [firstTimeState.isFirstTime, dispatch]);

  useEffect(() => {
    if (initialDataState.isUpdateRequired !== null) {
      if (!initialDataState.isUpdateRequired) {
        dispatch(loadOfflineDataSaga());
      } else {
        dispatch(loadOnlineDataSaga(initialDataState.versionNumber));
      }
    }
  }, [
    initialDataState.isUpdateRequired,
    dispatch,
    initialDataState.versionNumber,
  ]);

  useEffect(() => {
    if (initialDataState.isFailed) {
      if (firstTimeState.isFirstTime) {
        setIsModalVisible(true);
      } else {
        dispatch(loadOfflineDataSaga());
      }
    }
  }, [initialDataState.isFailed, firstTimeState.isFirstTime, dispatch]);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Modal
        isModalVisible={isModalVisible}
        MainText={
          'Você precisa estar conectado na primeira vez que acessa o aplicativo!'
        }
        TextButton1={'Sair'}
        FuncButton1={() => {
          RNExitApp.exitApp();
        }}
      />
      <SafeArea>
        <StyledImage source={logoImg} resizeMode={'contain'} />
        <ActvIndicator size={'large'} color={'black'} />
      </SafeArea>
    </>
  );
};

export default Loading;
