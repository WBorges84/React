import firebase from 'firebase/app';
//import firebase from 'firebase';

const firebaseConfig = {
   apiKey: "AIzaSyD8uvwYgt40nMbInJDU5RaRlW3WWM7u1H8",
  authDomain: "crm-eb44e.firebaseapp.com",
  projectId: "crm-eb44e",
  storageBucket: "crm-eb44e.appspot.com",
  messagingSenderId: "1052309390864",
  appId: "1:1052309390864:web:37cf2be95df0bd7a156c95"
  };
  
  
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
