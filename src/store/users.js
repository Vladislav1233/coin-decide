// Note: Variables
const CHANGE_CITY_SUCCESS = 'CHANGE_CITY_SUCCESS'

// Note: actions

// Note: меняем город в настройках и переписываем в базе.
export const changeCity = (name, nameId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const state = getState();

    if(state.firebase.auth.uid) {
      firestore.update({
        collection: 'users',
        doc: state.firebase.auth.uid
      }, {
        default_city: {
          name: name,
          name_id: nameId
        }
      });
    }

    dispatch({
      type: CHANGE_CITY_SUCCESS,
      payload: {
        nameCity: name,
        valueCity: nameId
      }
    });
  };
};

// Note: reducer
const initialState = {
  nameCity: 'Москва',
  valueCity: 'moscow'
};

const users = (state = initialState, action) => {
  switch (action.type) {

    case CHANGE_CITY_SUCCESS:
      return {
        ...state,
        nameCity: action.payload.nameCity,
        valueCity: action.payload.valueCity
      }

    default:
      return state
  }
};

export default users;