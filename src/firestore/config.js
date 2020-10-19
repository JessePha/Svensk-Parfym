import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCnrNaP9YuAbw7G5IshgAXosA8wQL1WNDQ",
  authDomain: "svenskparfym-b8f20.firebaseapp.com",
  databaseURL: "https://svenskparfym-b8f20.firebaseio.com",
  projectId: "svenskparfym-b8f20",
  storageBucket: "svenskparfym-b8f20.appspot.com",
  messagingSenderId: "891645777608",
  appId: "1:891645777608:web:f25dd2bb6db72d6ed477fd",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
export { projectStorage, projectFirestore };
