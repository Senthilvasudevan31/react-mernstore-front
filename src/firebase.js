import firebase from 'firebase';



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfONkorLP_k8SstcHv3l3YStOlnZ7EIRM",
    authDomain: "ecommerce-30f29.firebaseapp.com",
    databaseURL: "https://ecommerce-30f29.firebaseio.com",
    projectId: "ecommerce-30f29",
    storageBucket: "ecommerce-30f29.appspot.com",
    messagingSenderId: "71087522168",
    appId: "1:71087522168:web:5cdc110e626340a22d488d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
