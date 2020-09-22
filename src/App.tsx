import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import admob, {MaxAdContentRating} from '@react-native-firebase/admob';
import codePush from 'react-native-code-push';

import store from './redux/core/store';
import Routes from './routes';

const App = () => {
  useEffect(() => {
    admob().setRequestConfiguration({
      maxAdContentRating: MaxAdContentRating.T,
      tagForChildDirectedTreatment: false,
      tagForUnderAgeOfConsent: true,
    });
  }, []);

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
})(App);
