// Note: Variables
const GET_PROMOCODES_FOR_USER_SUCCESS = 'GET_PROMOCODES_FOR_USER_SUCCESS',
      GET_PROMOCODES_FOR_USER_ERROR = 'GET_PROMOCODES_FOR_USER_ERROR';

const GET_PROMOCODES_BAR_IMAGE_SUCCESS = 'GET_PROMOCODES_BAR_IMAGE_SUCCESS';

// Note: Actions
// Note: Получаем все промокоды юзера.
export const getPromocodesForUser = (uidUser) => {
  // ref documentation https://github.com/prescottprue/redux-firestore#query-options%23query-options
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();

    firestore.get({
      collection: 'promocodes',
      doc: uidUser,
      subcollections: [{ collection: 'content'}]
    }).then(
      () => {
        const promocodes = getState().firestore.ordered.promocodes[0].content;

        dispatch({
          type: GET_PROMOCODES_FOR_USER_SUCCESS,
          payload: promocodes
        });
      },
      err => {
        console.log(err);
      }
    )
  }
};

// Note: Сохраняем выпавший промокод юзеру.
export const savePromocode = (userUID, promocodeData) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();

    firestore.add({
      collection: 'promocodes',
      doc: userUID,
      subcollections: [{ collection: 'content'}]
    },
      promocodeData
    )
  }
};

//Note: Reducers
const initialState = {
  promocodesForUser: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROMOCODES_FOR_USER_SUCCESS:
      return {
        ...state,
        promocodesForUser: action.payload
      }

    default: {
      return state;
    }
  }
}