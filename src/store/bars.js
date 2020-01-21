import randomInteger from 'helpers/randomInteger';
import getRandomObjectKey from 'helpers/getRandomObjectKey';

// Note: variables
const GET_URL_BAR_IMAGE_SUCCESS = 'GET_URL_BAR_IMAGE_SUCCESS',
      GET_URL_BAR_IMAGE_ERROR = 'GET_URL_BAR_IMAGE_ERROR';

const SAVE_BAR_ID_QUERY = 'SAVE_BAR_ID_QUERY';

// Note: actions
export const getBar = (barId) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    dispatch({
      type: SAVE_BAR_ID_QUERY,
      payload: {
        targetBarId: barId
      }
    });

    firestore.get({ collection: 'bars', doc: barId })
      .then((res) => {
        console.log(res)
        const getImageForThisBar = (imagePath) => {
          const storageRef = getFirebase().storage().ref();
          const barImageRef = storageRef.child(imagePath);

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
        };
        const targetBar = getState().firestore.ordered.bars.filter(tarItem => {
          return tarItem.id === barId
        });

        if(targetBar[0].available_prizes) {
          const availablePrizes = targetBar[0].available_prizes,
              prizeId = getRandomObjectKey(availablePrizes),
              typePrize = prizeId.split('_');

          if(typePrize[0] === 'common') {
            firestore.get({ collection: 'common_prizes', doc: prizeId }).then(() => {
              getImageForThisBar(targetBar[0].photo)
            });
          } else {
            firestore.get({ collection: 'unique_prizes', doc: typePrize[1] }).then(() => {
              getImageForThisBar(targetBar[0].photo)
            });
          }
        } else {
          getImageForThisBar(targetBar[0].photo)
        }
      })
  }
}

export const getRandomBar = (nameCity) => { // TODO: nameCity
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore.get({ collection: 'bars_id', doc: nameCity })
      .then(() => {
        const targetBarsId = getState().firestore.ordered.bars_id.filter((item) => (
          item.id === nameCity
        ));
        const barsId = targetBarsId[0].content,
              numberBarInCollection = randomInteger(barsId.length - 1),
              barId = barsId[numberBarInCollection].bar_id;
        console.log(barId)

        dispatch(getBar(barId));
      })
  }
}

// Note: reducer
const initialState = {
  barImageUrl: null,
  targetBarId: null
};

const bars = (state = initialState, action) => {
  switch (action.type) {

    case GET_URL_BAR_IMAGE_SUCCESS:
      return {
        ...state,
        barImageUrl: action.payload
      }

    case SAVE_BAR_ID_QUERY:
        return {
          ...state,
          targetBarId: action.payload.targetBarId
        }

    default:
      return state
  }
};

export default bars;