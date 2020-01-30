export const addBarAdmin = (collection, doc, data) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection(collection).doc(doc).set(data);
  }
};

export const addBarIdAdmin = (collection, doc, data) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore.get({ collection: collection, doc: doc }).then(() => {
      let stateBarsId = getState().firestore.ordered.bars_id.filter(item => item.id === doc);
      let dataQuery = [
        ...stateBarsId[0].content,
        {...data}
      ];

      firestore.collection(collection).doc(doc).set({
        content: dataQuery
      });
    });
  };
};