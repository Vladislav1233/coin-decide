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
    ).then(() => {
      dispatch({
        type: LOGIN_SUCCESS
      })
    }).catch((err) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: err
      })
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
    ).then((resp) => { // Note: Записываем юзера в database
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: `${newUser.firstName[0]}${newUser.lastName[0]}`
      })
    }).then(() => {
      dispatch({
        type: SIGNUP_SUCCESS
      })
    }).catch((err) => {
      dispatch({
        type: SIGNUP_ERROR,
        payload: err
      })
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