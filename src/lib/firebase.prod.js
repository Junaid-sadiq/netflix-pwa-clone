import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';


const config = {
               //paste your firebase app config here
      };



const firebase = Firebase.initializeApp(config);
//uncomment only first time to push data in firestore then comment it again
//seedDatabase(firebase);

export { firebase };
