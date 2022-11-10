import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB_LkkZqpHXUahZiiQ4zpfAw6oHeDeFjaI',
  authDomain: 'devlinks-9f30d.firebaseapp.com',
  projectId: 'devlinks-9f30d',
  storageBucket: 'devlinks-9f30d.appspot.com',
  messagingSenderId: '454979125467',
  appId: '1:454979125467:web:9fba6ebde97ae7a95dccfe',
  measurementId: 'G-062K69CTQD',
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
