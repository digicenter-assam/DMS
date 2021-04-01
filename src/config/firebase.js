import Firebase from 'firebase';
import "firebase/auth";

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyCt7WYEUOD8LvgQ3E0v8MxBNPLSvZIECsY",
  authDomain: "dmsne-test.firebaseapp.com",
  databaseURL: "https://dmsne-test-default-rtdb.firebaseio.com",
  projectId: "dmsne-test",
  storageBucket: "dmsne-test.appspot.com",
  messagingSenderId: "267941366529",
  appId: "1:267941366529:web:558e54c331615e32c66900",
  measurementId: "G-EX4LLTL5XG"
};
  // Initialize Firebase
  Firebase.initializeApp(firebaseConfig);
  
  
export const db = Firebase.database();
export const auth = Firebase.auth();
export const storage = Firebase.storage();



  