import randomInteger from 'helpers/randomInteger';

// Note: variables
const   GET_BARS_ID_SUCCESS =       'GET_BARS_ID_SUCCESS';

// Note: actions
export const getBar = (barId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore.get({ collection: 'bars', doc: barId })
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