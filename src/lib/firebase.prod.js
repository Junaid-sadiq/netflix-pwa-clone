import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';

const config = {
        apiKey: "AIzaSyCdGmy2ZfF9BPS67S6uBhOHAV4HguGYrww",
        authDomain: "netflix-5b1d5.firebaseapp.com",
        databaseURL: "https://netflix-5b1d5.firebaseio.com",
        projectId: "netflix-5b1d5",
        storageBucket: "netflix-5b1d5.appspot.com",
        messagingSenderId: "96468943773",
        appId: "1:96468943773:web:77c2e3ade6d5bcf096e574",
        measurementId: "G-3J5RC3GDDF"
      };



const firebase = Firebase.initializeApp(config);
//uncomment only first time to push data in firestore then comment it again
//seedDatabase(firebase);

export { firebase };