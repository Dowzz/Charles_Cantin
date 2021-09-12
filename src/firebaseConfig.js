import firebase from "firebase/compat";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVpuZ9fm69yRBPt7yxl_FdMm4SkC4BoPQ",
  authDomain: "auth-production-7b5a1.firebaseapp.com",
  databaseURL: "https://auth-production-7b5a1-default-rtdb.firebaseio.com",
  projectId: "auth-production-7b5a1",
  storageBucket: "auth-production-7b5a1.appspot.com",
  messagingSenderId: "291878134150",
  appId: "1:291878134150:web:3178391690dd8c99cf8c07",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = firebase.auth();
