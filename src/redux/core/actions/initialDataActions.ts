import types from './types/initialDataTypes';

export const checkUpdateSaga = () => ({
  type: types.CHECK_UPDATE_SAGA,
});

export const loadOnlineDataSaga = (versionNumber: number) => ({
  type: types.LOAD_ONLINE_DATA_SAGA,
  payload: versionNumber,
});

export const loadOfflineDataSaga = () => ({
  type: types.LOAD_OFFLINE_DATA_SAGA,
});

export const loadScoresSaga = () => ({
  type: types.LOAD_SCORES_SAGA,
});

export const loadIsMutedSaga = () => ({
  type: types.LOAD_IS_MUTED_SAGA,
});
