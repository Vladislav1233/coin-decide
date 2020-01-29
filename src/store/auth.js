import { savePromocode } from 'store/promocodes';
import isEmptyObj from 'helpers/isEmptyObj';
import { history } from "helpers/history";

// Note: variables
const   // LOGIN_START = 'LOGIN_START',
        LOGIN_SUCCESS = 'LOGIN_SUCCESS',
        LOGIN_ERROR = 'LOGIN_ERROR',

        LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
        LOGOUT_ERROR = 'LOGOUT_ERROR',

        SIGNUP_SUCCESS = 'SIGNUP_SUCCESS',
        SIGNUP_ERROR = 'SIGNUP_ERROR';

// Note: actions
export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then((res) => {
      dispatch({
        type: LOGIN_SUCCESS
      });

      history.push('/');

      // Note: Сохраняем выпавший неавторизованному юзеру промокод в базу.
      const promocodeWon = getState().promocodes.promocodeWon;
      if(!isEmptyObj(promocodeWon)) {
        dispatch(savePromocode(res.user.uid, promocodeWon));
      };
    }).catch((err) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: err
      })
      alert('Ошибка, что-то пошло не так');
    })
  }
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({
        type: LOGOUT_SUCCESS
      })
    }).catch(err => {
      dispatch({
        type: LOGOUT_ERROR
      })
      alert('Ошибка, что-то пошло не так');
    })
  }
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((resp) => {
      // Note: Сохраняем выпавший неавторизованному юзеру промокод в базу.
      const promocodeWon = getState().promocodes.promocodeWon;
      if(!isEmptyObj(promocodeWon)) {
        dispatch(savePromocode(resp.user.uid, promocodeWon));
      };

      // Note: Записываем юзера в database
      const defaultCity = {
        name: getState().users.nameCity,
        name_id: getState().users.valueCity
      };
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: `${newUser.firstName[0]}${newUser.lastName[0]}`,
        default_city: defaultCity,
        photo: null // TODO
      });
    }).then(() => {
      dispatch({
        type: SIGNUP_SUCCESS
      });
      history.push('/');
    }).catch((err) => {
      dispatch({
        type: SIGNUP_ERROR,
        payload: err
      })
      alert('Ошибка, что-то пошло не так');
    })
  }
}

// Note: reducer
const initialState = {
  authError: null
};

const auth = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_ERROR: {
      return {
        ...state,
        authError: action.payload
      }
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        authError: null
      }
    }

    case LOGOUT_SUCCESS: {
      return {
        ...state,
        authError: null
      }
    }

    case SIGNUP_SUCCESS: {
      console.log('SIGNUP_SUCCESS');
      return {
        ...state,
        authError: null
      }
    }

    case SIGNUP_ERROR: {
      console.log('SIGNUP_ERROR');
      console.log(action.payload.message);
      return {
        ...state,
        authError: action.payload.message
      }
    }

    default: {
      return state;
    }
  }
};

export default auth;