import types from './types/firstTimeTypes';

export const checkFirstTimeSaga = () => ({
  type: types.CHECK_FIRST_TIME_SAGA,
});

export const registerNoFirstTimeSaga = () => ({
  type: types.REGISTER_NO_FIRST_TIME_SAGA,
});
