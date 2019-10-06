// Note: variables

// Note: actions
export const getRandomBar = (nameCity = "moscow") => { // TODO: nameCity
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore.get({ collection: 'bars_id' })
      .then(res => {
        console.log(res);
      })
    // firestore.get({ collection: 'bars_id', doc: 'moscow' })
    //   .then(res => {
    //     console.log(res);
    //   })
  }
};

// Note: reducer
const initialState = {
  authError: null
};

const bars = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default bars;