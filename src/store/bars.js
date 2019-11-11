import randomInteger from 'helpers/randomInteger';
import getRandomObjectKey from 'helpers/getRandomObjectKey';

// Note: variables

// Note: actions
export const getBar = (barId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

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
const initialState = {};

const bars = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default bars;