import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config =
    {
        apiKey: "AIzaSyCnJh33XdnG-qngKhq26ysp-w51L5XDgCc",
        authDomain: "pytm-db.firebaseapp.com",
        databaseURL: "https://pytm-db.firebaseio.com",
        projectId: "pytm-db",
        storageBucket: "pytm-db.appspot.com",
        messagingSenderId: "184532980432",
        appId: "1:184532980432:web:2ff8cd80db226ec88644d5",
        measurementId: "G-PF6SPB3073"
      };

      firebase.initializeApp(config)

      export const auth = firebase.auth();
      export const firestore =firebase.firestore();

      const provider =new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt: 'select_account'})

      export const signInWithGoogle = () => auth.signInWithPopup(provider)

      export default firebase;