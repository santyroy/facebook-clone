import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCEkizgZ2OoZZ7Au_YBsuzGYr5A0cv3dRE",
  authDomain: "facebook-clone-36914.firebaseapp.com",
  databaseURL: "https://facebook-clone-36914.firebaseio.com",
  projectId: "facebook-clone-36914",
  storageBucket: "facebook-clone-36914.appspot.com",
  messagingSenderId: "842615649581",
  appId: "1:842615649581:web:9c1c094a41196772860fa4",
  measurementId: "G-4S1CZRD1VT",
});

const auth = firebase.auth();

export { auth };
