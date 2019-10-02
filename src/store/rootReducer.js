// ref for create firebase: https://www.youtube.com/playlist?list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3

import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseConfig from 'config/firebaseConfig';

// Note: reducers
import promocodes from './promocodes';

export default function(initialState = {}) {
  const rootReducer = combineReducers({
    promocodes
  });

  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware.withExtraArgument({ getFirebase, getFirestore})),
      reactReduxFirebase(firebaseConfig),
      reduxFirestore(firebaseConfig)
    )
  );
}