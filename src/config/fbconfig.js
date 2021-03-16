import firebase from 'firebase/app';
import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyAkOHj2B01M9TDOClXMQ9wmwYlUup-a3IY",
    authDomain: "evernote-clone-2fe71.firebaseapp.com",
    databaseURL: "https://evernote-clone-2fe71-default-rtdb.firebaseio.com",
    projectId: "evernote-clone-2fe71",
    storageBucket: "evernote-clone-2fe71.appspot.com",
    messagingSenderId: "342882470971",
    appId: "1:342882470971:web:6c584e690e4e7ec10ae01e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase;