import * as firebase from 'firebase';
import ApiKeys from './constants/ApiKeys';

var fire = firebase.initializeApp(ApiKeys.FirebaseConfig);

export default fire;
