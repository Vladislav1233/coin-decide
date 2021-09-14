import randomInteger from "helpers/randomInteger";
import getRandomObjectKey from "helpers/getRandomObjectKey";
import plugForPicture from "images/plug-for-bar.jpg";
import { db } from "config/firebaseConfig";

// Note: variables
const GET_URL_BAR_IMAGE_SUCCESS = "GET_URL_BAR_IMAGE_SUCCESS";
const GET_URL_BAR_IMAGE_ERROR = "GET_URL_BAR_IMAGE_ERROR";
const SAVE_BAR_ID_QUERY = "SAVE_BAR_ID_QUERY";
const SAVE_TYPE_PRIZE = "SAVE_TYPE_PRIZE";
const GET_BAR_LIST_SUCCESS = "GET_BAR_LIST_SUCCESS";

// Note: actions
export const getBar = (barId) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    dispatch({
      type: SAVE_BAR_ID_QUERY,
      payload: {
        targetBarId: barId,
      },
    });

    firestore.get({ collection: "bars", doc: barId }).then(() => {
      const getImageForThisBar = (imagePath) => {
        const storageRef = getFirebase().storage().ref();
        const barImageRef = storageRef.child(imagePath);

        barImageRef.getDownloadURL().then(
          (url) => {
            dispatch({
              type: GET_URL_BAR_IMAGE_SUCCESS,
              payload: url,
            });
          },
          (err) => {
            dispatch({
              type: GET_URL_BAR_IMAGE_ERROR,
              payload: plugForPicture,
            });
          }
        );
      };
      const targetBar = getState().firestore.ordered.bars.filter((tarItem) => {
        return tarItem.id === barId;
      });
      // console.log(targetBar)

      if (!!targetBar.length && targetBar[0].available_prizes) {
        const availablePrizes = targetBar[0].available_prizes,
          prizeId = getRandomObjectKey(availablePrizes),
          typePrize = prizeId.split("_");
        dispatch({
          type: SAVE_TYPE_PRIZE,
          payload: {
            typePrize,
          },
        });

        if (typePrize[0] === "common") {
          firestore
            .get({ collection: "common_prizes", doc: prizeId })
            .then(() => {
              getImageForThisBar(targetBar[0].photo);
            });
        } else {
          firestore
            .get({ collection: "unique_prizes", doc: typePrize[1] })
            .then(() => {
              getImageForThisBar(targetBar[0].photo);
            });
        }
      } else if (!!targetBar.length && !targetBar[0].available_prizes) {
        getImageForThisBar(targetBar[0].photo);
        dispatch({
          type: SAVE_TYPE_PRIZE,
          payload: {
            typePrize: "",
          },
        });
      }
    });
  };
};

export const getRandomBar = (nameCity, defineBar) => {
  // TODO: nameCity
  console.log(nameCity);
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore.get({ collection: "bars_id", doc: nameCity }).then(() => {
      const targetBarsId = getState().firestore.ordered.bars_id.filter(
        (item) => item.id === nameCity
      );
      const barsId = targetBarsId[0].content;
      const numberBarInCollection = randomInteger(barsId.length - 1);
      const barId = defineBar
        ? defineBar
        : barsId[numberBarInCollection].bar_id;

      dispatch(getBar(barId));
    });
  };
};

/**
 * Получение списка баров города.
 */
export const getBarList = () => {
  return (dispatch, getState) => {
    const city = getState().users.valueCity;

    db.collection("bars")
      .where("city", "==", city)
      .get()
      .then((querySnapshot) => {
        const res = [];

        querySnapshot.forEach((doc) => {
          res.push({ id: doc.id, ...doc.data() });
        });

        dispatch({
          type: GET_BAR_LIST_SUCCESS,
          payload: res,
        });
      });
  };
};

// Note: reducer
const initialState = {
  barImageUrl: null,
  targetBarId: null,
  typePrize: "",
  barList: [],
};

const bars = (state = initialState, action) => {
  switch (action.type) {
    case GET_BAR_LIST_SUCCESS: {
      return {
        ...state,
        barList: action.payload,
      };
    }

    case GET_URL_BAR_IMAGE_SUCCESS:
      return {
        ...state,
        barImageUrl: action.payload,
      };

    case GET_URL_BAR_IMAGE_ERROR:
      return {
        ...state,
        barImageUrl: action.payload,
      };

    case SAVE_BAR_ID_QUERY:
      return {
        ...state,
        targetBarId: action.payload.targetBarId,
      };

    case SAVE_TYPE_PRIZE:
      return {
        ...state,
        typePrize: action.payload.typePrize,
      };

    default:
      return state;
  }
};

export default bars;
