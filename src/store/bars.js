import randomInteger from 'helpers/randomInteger';
import getRandomObjectKey from 'helpers/getRandomObjectKey';

// Note: variables
const GET_URL_BAR_IMAGE_SUCCESS = 'GET_URL_BAR_IMAGE_SUCCESS',
      GET_URL_BAR_IMAGE_ERROR = 'GET_URL_BAR_IMAGE_ERROR';

// Note: actions
export const getBar = (barId) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const storageRef = getFirebase().storage().ref();
    const barImageRef = storageRef.child('images/69-pints-craft-pub-tverskaya.jpg');

    barImageRef.getDownloadURL()
      .then((url) => {
        dispatch({
          type: GET_URL_BAR_IMAGE_SUCCESS,
          payload: url
        })
      }, err => {
        dispatch({
          type: GET_URL_BAR_IMAGE_ERROR,
          payload: err
        })
      })

    firestore.get({ collection: 'bars', doc: barId })
      .then(() => {
        const availablePrizes = getState().firestore.ordered.bars[0].available_prizes,
              prizeId = getRandomObjectKey(availablePrizes),
              typePrize = prizeId.split('_');

        if(typePrize[0] === 'common') {
          firestore.get({ collection: 'common_prizes', doc: prizeId });
        } else {
          firestore.get({ collection: 'unique_prizes', doc: typePrize[1] });
        }
      })
  }
}

export const getRandomBar = (nameCity = 'moscow') => { // TODO: nameCity
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore.get({ collection: 'bars_id', doc: nameCity })
      .then(() => {
        const barsId = getState().firestore.ordered.bars_id[0].content,
              numberBarInCollection = randomInteger(barsId.length - 1),
              barId = barsId[numberBarInCollection].bar_id;

        dispatch(getBar(barId));
      })
  }
}

// Note: reducer
const initialState = {
  barImageUrl: null
};

const bars = (state = initialState, action) => {
  switch (action.type) {

    case GET_URL_BAR_IMAGE_SUCCESS:
      return {
        barImageUrl: action.payload
      }

    default:
      return state
  }
};

export default bars;