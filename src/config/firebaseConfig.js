// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9BVzo39gac6wAO4df7cwVxLONypUaArA",
  authDomain: "coin-deside.firebaseapp.com",
  databaseURL: "https://coin-deside.firebaseio.com",
  projectId: "coin-deside",
  storageBucket: "gs://coin-deside.appspot.com",
  messagingSenderId: "969560591836",
  appId: "1:969560591836:web:d7f6536285ceca72bcd319",
  measurementId: "G-YZF710RMCN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;