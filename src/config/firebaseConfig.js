// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = () => {
  if (process.env.NODE_ENV === "development") {
    return {
      apiKey: "AIzaSyD9BVzo39gac6wAO4df7cwVxLONypUaArA",
      authDomain: "coin-deside.firebaseapp.com",
      databaseURL: "https://coin-deside.firebaseio.com",
      projectId: "coin-deside",
      storageBucket: "gs://coin-deside.appspot.com",
      messagingSenderId: "969560591836",
      appId: "1:969560591836:web:d7f6536285ceca72bcd319",
      measurementId: "G-YZF710RMCN",
    };
  } else if (process.env.NODE_ENV === "production") {
    return {
      apiKey: "AIzaSyDaLdkt15q132Hb88jIVYYPOrfnUaBJHv8",
      authDomain: "beercoin12.firebaseapp.com",
      databaseURL: "https://beercoin12.firebaseio.com",
      projectId: "beercoin12",
      storageBucket: "beercoin12.appspot.com",
      messagingSenderId: "127473982008",
      appId: "1:127473982008:web:4b5d01f7d85f7f477c24cd",
      measurementId: "G-RM52L3SW37",
    };
  }
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig());
firebase.firestore().settings({ timestampsInSnapshots: true });

export const db = firebase.firestore();

export default firebase;
