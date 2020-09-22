import types from '../actions/types/initialDataTypes';
import {
  iInitialDataAction,
  iInitialDataStateProps,
} from '../../../@types/myTypes';

const STATE: iInitialDataStateProps = {
  categories: [],
  scores: [],
  isMuted: false,
  isLoading: true,
  isFailed: null,
  isUpdateRequired: null,
  versionNumber: 0,
};

export default (state = STATE, action: iInitialDataAction) => {
  switch (action.type) {
    case types.SET_CATEGORIES:
      return {...state, categories: action.payload, isLoading: false};
    case types.SET_SCORES:
      return {...state, scores: action.payload};
    case types.SET_IS_MUTED:
      return {...state, isMuted: action.payload};
    case types.SET_IS_FAILED:
      return {...state, failType: action.payload};
    default:
      return state;
  }
};
