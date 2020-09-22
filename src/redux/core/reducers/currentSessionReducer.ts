import types from '../actions/types/currentSessionTypes';
import {
  iCurrentSessionAction,
  iCurrentSessionStateProps,
} from '../../../@types/myTypes';

const STATE: iCurrentSessionStateProps = {
  questions: [],
  currentCategory: null,
  finalScore: 0,
};

export default (state = STATE, action: iCurrentSessionAction) => {
  switch (action.type) {
    case types.SET_CURRENT_CATEGORY:
      return {...state, currentCategory: action.payload};
    case types.SET_QUESTIONS:
      return {...state, questions: action.payload};
    case types.SET_FINAL_SCORE:
      return {...state, finalScore: action.payload};
    default:
      return state;
  }
};
