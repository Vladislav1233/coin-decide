// Note: variables
const   LOGIN_START = 'LOGIN_START',
        LOGIN_SUCCESS = 'LOGIN_SUCCESS',
        LOGIN_ERROR = 'LOGIN_ERROR';

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

    default: {
      return state;
    }
  }
};

export default auth;