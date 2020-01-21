// Note: Variables
// const CHANGE_CITY_START = 'CHANGE_CITY_START',
//       CHANGE_CITY_SUCCESS = 'CHANGE_CITY_SUCCESS',
//       CHANGE_CITY_ERROR = 'CHANGE_CITY_ERROR';

// Note: actions

// Note: меняем город в настройках и переписываем в базе.
export const changeCity = (name, nameId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const state = getState();

    firestore.update({
      collection: 'users',
      doc: state.firebase.auth.uid
    }, {
      default_city: {
        name: name,
        name_id: nameId
      }
    })
  };
};