import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';  


const config = {
    apiKey: "AIzaSyB8NghK3BMYdlejJ2eZD2yQmVaYQnTSZAs",
    authDomain: "netflix-8b696.firebaseapp.com",
    databaseURL: "https://netflix-8b696.firebaseio.com",
    projectId: "netflix-8b696",
    storageBucket: "netflix-8b696.appspot.com",
    messagingSenderId: "781230131232",
    appId: "1:781230131232:web:8af75e97b95ba608b05445"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };