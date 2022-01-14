import firebase from "firebase/compat";
import "firebase/compat/auth";
import "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyBTlsV1XXHf_5ot3pvpzJkdAWRW4-cZgM4",
  authDomain: "cantin-7b1e8.firebaseapp.com",
  databaseURL:
    "https://cantin-7b1e8-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "cantin-7b1e8",
  storageBucket: "cantin-7b1e8.appspot.com",
  messagingSenderId: "74276192669",
  appId: "1:74276192669:web:7e29fadab98b3532ed2f74",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = firebase.auth();
