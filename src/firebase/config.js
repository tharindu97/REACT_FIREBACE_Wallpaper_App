import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCN3nwNXbpNzlmdfqu8DuGt9OqEkPY02BY",
  authDomain: "react-photo-cf165.firebaseapp.com",
  databaseURL: "https://react-photo-cf165.firebaseio.com",
  projectId: "react-photo-cf165",
  storageBucket: "react-photo-cf165.appspot.com",
  messagingSenderId: "838751079008",
  appId: "1:838751079008:web:50de284bc4cfaf4d945105",
  measurementId: "G-25C03F7PQE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };