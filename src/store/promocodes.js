// Note: Variables
const GET_PROMOCODES_FOR_USER_SUCCESS = 'GET_PROMOCODES_FOR_USER_SUCCESS',
      GET_PROMOCODES_FOR_USER_ERROR = 'GET_PROMOCODES_FOR_USER_ERROR';

const GET_PROMOCODES_BAR_IMAGE_SUCCESS = 'GET_PROMOCODES_BAR_IMAGE_SUCCESS';

const SAVE_WINNING_PROMOCODE_IN_STORE = 'SAVE_WINNING_PROMOCODE_IN_STORE',
      CLEAR_WON_PROMOCODE = 'CLEAR_WON_PROMOCODE';

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

// Note: Сохраняем в базу выпавший промокод юзеру.
export const savePromocode = (userUID, promocodeData) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();

    firestore.add({
      collection: 'promocodes',
      doc: userUID,
      subcollections: [{ collection: 'content'}]
    },
      promocodeData
    ).then(() => {
      clearWonPromocode();
    });
  }
};

// Note: Сохраняем в store выпавший промокод юзеру. Храним в store чтобы при авторизации отправить данные в базу.
export const saveWinningPromocodeInStore = (data) => {
  return (dispatch) => {
    dispatch({
      type: SAVE_WINNING_PROMOCODE_IN_STORE,
      payload: data
    })
  }
}

export const clearWonPromocode = () => dispatch => { dispatch({
  type: CLEAR_WON_PROMOCODE
})}

//Note: Reducers
const initialState = {
  promocodesForUser: [], // Note: все промокоды пользователя пришедшие из базы.
  promocodeWon: {}  // Note: Промокод который попался неавторизованному пользователю.
                    // Храним в store чтобы при авторизации отправить данные в базу.
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROMOCODES_FOR_USER_SUCCESS:
      return {
        ...state,
        promocodesForUser: action.payload
      }

    case SAVE_WINNING_PROMOCODE_IN_STORE:
        return {
          ...state,
          promocodeWon: action.payload
        }

    case CLEAR_WON_PROMOCODE:
      return {
        ...state,
        promocodeWon: {}
      }

    default: {
      return state;
    }
  }
}