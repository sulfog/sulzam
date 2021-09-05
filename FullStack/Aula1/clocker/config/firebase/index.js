import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBLGhYYfPJPz71KocHLdKlG7kjFM89xRC8",
    authDomain: "cloker-workzam.firebaseapp.com",
    projectId: "cloker-workzam",
    storageBucket: "cloker-workzam.appspot.com",
    messagingSenderId: "968536792962",
    appId: "1:968536792962:web:3ad95ae22ae52f9d47f99b",
    measurementId: "G-GZFYNHZQYJ"
  }
  
  export default firebase.apps.length 
  ? firebase.app() 
  : firebase.initializeApp(firebaseConfig)
  
  