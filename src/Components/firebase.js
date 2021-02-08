import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyDK05J_sz0Dyn0G4RjOKD8qRq5-QlcrcpI",
  authDomain: "shopcart-e4367.firebaseapp.com",
  databaseURL: "https://shopcart-e4367.firebaseio.com",
  projectId: "shopcart-e4367",
  storageBucket: "shopcart-e4367.appspot.com",
  messagingSenderId: "1039672798242",
  appId: "1:1039672798242:web:7fb4bf6f937cd20dbf6e7b",
  measurementId: "G-2KM2WGLR4K",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider, storage };
export default db;
