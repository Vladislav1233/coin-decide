// ref for create firebase: https://www.youtube.com/playlist?list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3

import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import {
  reduxFirestore,
  getFirestore,
  firestoreReducer,
} from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import firebaseConfig from "config/firebaseConfig";
import { firebaseReducer } from "react-redux-firebase";

// Note: reducers
import promocodes from "./promocodes";
import auth from "./auth";
import bars from "./bars";
import users from "./users";

export default function rootReducerFunc(initialState = {}) {
  const rootReducer = combineReducers({
    promocodes,
    auth,
    bars,
    users,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
  });

  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware.withExtraArgument({ getFirebase, getFirestore })
      ),
      reactReduxFirebase(firebaseConfig, { attachAuthIsReady: true }),
      reduxFirestore(firebaseConfig)
      // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : null // TODO: не работает если нет extension
    )
  );
}
