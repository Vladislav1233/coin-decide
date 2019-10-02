// Note: Variables
const CREATE_PROMOCODE = 'CREATE_PROMOCODE';

// Note: Actions
const createPromocode = (promocode) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({
      type: CREATE_PROMOCODE,
      promocode
    })
  }
};

// Reducers
const initialState = {
  promocodes: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}