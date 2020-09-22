import types from '../actions/types/firstTimeTypes';
import {iFirstTimeAction, iFirstTimeStateProps} from '../../../@types/myTypes';

const STATE: iFirstTimeStateProps = {
  isFirstTime: null,
};

export default (state = STATE, action: iFirstTimeAction) => {
  switch (action.type) {
    case types.SET_IS_FIRST_TIME:
      return {...state, isFirstTime: action.payload};
    default:
      return state;
  }
};
