import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBCmIpXjAMZ4Qb1UekSsQz_Wh0zlZF3MUk",
  authDomain: "projeto71-2197b.firebaseapp.com",
  projectId: "projeto71-2197b",
  storageBucket: "projeto71-2197b.appspot.com",
  messagingSenderId: "678603544770",
  appId: "1:678603544770:web:02945760ba48a274af435b"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
