import {createStore, compose, applyMiddleware} from 'redux';

import combinedReducers from '../core/combinedReducers';
import createSaga from 'redux-saga';
import sagas from '../sagas';

const sagaMiddleware = createSaga();

export default createStore(
  combinedReducers,
  compose(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(sagas);
