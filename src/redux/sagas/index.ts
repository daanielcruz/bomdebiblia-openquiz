import {call, all, put, takeLatest} from 'redux-saga/effects';

import initialDataTypes from '../core/actions/types/initialDataTypes';
import firstTimeTypes from '../core/actions/types/firstTimeTypes';
import currentSessionTypes from '../core/actions/types/currentSessionTypes';

import {
  fetchCategoriesAndQuestionsThenSaveOfflineAsync,
  checkIfUpdateRequiredAsync,
} from '../../services/handleOnlineData';

import {
  loadCategoriesAsync,
  checkFirstTimeAsync,
  registerNoFirstTimeAsync,
  loadQuestionsAsync,
  saveScoreAsync,
  loadScoresAsync,
  saveIsMutedAsync,
  loadIsMutedAsync,
} from '../../services/handleOfflineData';

import {
  iLoadInitialDataAction,
  iLoadQuestionsAction,
  iSaveScoreAction,
  iSaveIsMutedAction,
} from '../../@types/myTypes';

function* checkFirstTime() {
  const isFirstTime = yield call(checkFirstTimeAsync);
  yield put({
    type: firstTimeTypes.SET_IS_FIRST_TIME,
    payload: isFirstTime,
  });
}

function* registerNoFirstTime() {
  yield call(registerNoFirstTimeAsync);
  yield put({
    type: firstTimeTypes.SET_IS_FIRST_TIME,
    payload: false,
  });
}

function* checkIfUpdate() {
  const result = yield call(checkIfUpdateRequiredAsync);
  if (result === 'FAIL') {
    yield put({
      type: initialDataTypes.SET_IS_FAILED,
      payload: true,
    });
  } else {
    yield put({
      type: initialDataTypes.LOAD_ONLINE_DATA_SAGA,
      isUpdateRequired: result.isUpdateRequired,
      versionNumber: result.versionNumber,
    });
  }
}

function* loadOnlineData(action: iLoadInitialDataAction) {
  const arrayWithCategoriesOrFail = yield call(() =>
    fetchCategoriesAndQuestionsThenSaveOfflineAsync(action.versionNumber),
  );
  if (arrayWithCategoriesOrFail === 'FAIL') {
    yield put({
      type: initialDataTypes.SET_IS_FAILED,
      payload: true,
    });
  } else {
    yield put({
      type: initialDataTypes.SET_CATEGORIES,
      payload: arrayWithCategoriesOrFail,
    });
  }
}

function* loadOfflineData() {
  const arrayWithCategories = yield call(loadCategoriesAsync);
  yield put({
    type: initialDataTypes.SET_CATEGORIES,
    payload: arrayWithCategories,
  });
}

function* loadScoresData() {
  const scores = yield call(() => loadScoresAsync());
  yield put({
    type: initialDataTypes.SET_SCORES,
    payload: scores,
  });
}

function* loadQuestionsData(action: iLoadQuestionsAction) {
  const arrayWithQuestions = yield call(() =>
    loadQuestionsAsync(action.payload),
  );
  yield put({
    type: currentSessionTypes.SET_QUESTIONS,
    payload: arrayWithQuestions,
  });
}

function* saveScoreData(action: iSaveScoreAction) {
  const arrayWithScores = yield call(() => saveScoreAsync(action.scoreObject));
  yield put({
    type: initialDataTypes.SET_SCORES,
    payload: arrayWithScores,
  });
}

function* loadIsMuted() {
  const isMuted = yield call(() => loadIsMutedAsync());
  yield put({
    type: initialDataTypes.SET_IS_MUTED,
    payload: isMuted,
  });
}

function* saveIsMuted(action: iSaveIsMutedAction) {
  yield call(() => saveIsMutedAsync(action.payload));
  yield put({
    type: initialDataTypes.SET_IS_MUTED,
    payload: action.payload,
  });
}

export default function* rootSaga() {
  return yield all([
    yield takeLatest(firstTimeTypes.CHECK_FIRST_TIME_SAGA, checkFirstTime),
    yield takeLatest(
      firstTimeTypes.REGISTER_NO_FIRST_TIME_SAGA,
      registerNoFirstTime,
    ),
    yield takeLatest(initialDataTypes.CHECK_UPDATE_SAGA, checkIfUpdate),
    yield takeLatest(initialDataTypes.LOAD_ONLINE_DATA_SAGA, loadOnlineData),
    yield takeLatest(initialDataTypes.LOAD_OFFLINE_DATA_SAGA, loadOfflineData),
    yield takeLatest(initialDataTypes.LOAD_SCORES_SAGA, loadScoresData),
    yield takeLatest(
      currentSessionTypes.LOAD_QUESTIONS_SAGA,
      loadQuestionsData,
    ),
    yield takeLatest(currentSessionTypes.SAVE_SCORE_SAGA, saveScoreData),
    yield takeLatest(initialDataTypes.LOAD_IS_MUTED_SAGA, loadIsMuted),
    yield takeLatest(currentSessionTypes.SAVE_IS_MUTED_SAGA, saveIsMuted),
  ]);
}
