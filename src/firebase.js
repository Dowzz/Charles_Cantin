import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyB1ZEIGK1laLOaD4lOuabn8Ee3CxghUS4A",
    authDomain: "auth-developpment-2f46d.firebaseapp.com",
    databaseURL: "https://auth-developpment-2f46d-default-rtdb.firebaseio.com",
    projectId: "auth-developpment-2f46d", 
    storageBucket: "auth-developpment-2f46d.appspot.com",
    messagingSenderId: "87506766267",
    appId: "1:87506766267:web:57ae12c2eca54dec4d1c9e"
})
export const auth = app.auth()
export default app 
