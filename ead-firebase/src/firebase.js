import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAfNuez7iwRaDp8_SdXbpe3YU8coK8P6uE",
  authDomain: "ead-curso.firebaseapp.com",
  projectId: "ead-curso",
  storageBucket: "ead-curso.appspot.com",
  messagingSenderId: "178624780899",
  appId: "1:178624780899:web:418d7276eb2fbfcd93f656"
});


 

  const db = firebase.firestore();
  
  const storage  = firebase.storage();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth,provider,db,storage};