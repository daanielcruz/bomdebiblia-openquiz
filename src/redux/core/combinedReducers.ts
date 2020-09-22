import {combineReducers} from 'redux';

import initialDataReducer from './reducers/initialDataReducer';
import firstTimeReducer from './reducers/firstTimeReducer';
import currentSessionReducer from './reducers/currentSessionReducer';

export default combineReducers({
  initialDataState: initialDataReducer,
  firstTimeState: firstTimeReducer,
  currentSessionState: currentSessionReducer,
});
