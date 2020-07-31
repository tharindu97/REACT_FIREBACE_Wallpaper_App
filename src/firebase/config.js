import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyD39ov9iRU8KTmzoHrEcwgttDP33KErFYM",
  authDomain: "photo-react-7ef86.firebaseapp.com",
  databaseURL: "https://photo-react-7ef86.firebaseio.com",
  projectId: "photo-react-7ef86",
  storageBucket: "photo-react-7ef86.appspot.com",
  messagingSenderId: "1003353423170",
  appId: "1:1003353423170:web:6d1c6f19cdd50d0af9dcdb",
  measurementId: "G-KHCTMGH0B0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };