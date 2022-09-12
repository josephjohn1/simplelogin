import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: 'AIzaSyCbHwt_YHhpbHftqPbj60Bevl4bgow5PVE',
  authDomain: 'simplelogin-9a5c6.firebaseapp.com',
  databaseURL: 'https://simplelogin-9a5c6.firebaseio.com',
  projectId: 'simplelogin-9a5c6',
  storageBucket: 'simplelogin-9a5c6.appspot.com',
  messagingSenderId: '12345-insert-yourse',
  appId: '1:173547067636:android:c2692a6dc49647304f26a1',
};

let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(config);
}
//firebase.firestore.enablePersistence();
export default app;