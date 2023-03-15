import firebase from 'firebase/compat';

const config = {
	apiKey: process.env.REACT_APP_APIKEY || 'AIzaSyAjXm5aKj8fKzi7nbxT0ad96iqDU2IU6Vs',
	authDomain: process.env.REACT_APP_AUTHDOMAIN || 'firesafe-beef4.firebaseapp.com',
	databaseURL: process.env.REACT_APP_DATABASEURL || 'https://firesafe-beef4-default-rtdb.firebaseio.com',
	projectId: process.env.REACT_APP_PROJECTID || 'firesafe-beef4',
	storageBucket: process.env.REACT_APP_STORAGEBUCKET || 'firesafe-beef4.appspot.com',
	messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID || '508152839113',
	appId: process.env.REACT_APP_APPID || '1:508152839113:web:d7553f57292d660a660618',
	measurementId: process.env.REACT_APP_MEASUREMENTID || 'G-LK7V1TXN52',
};

firebase.initializeApp(config);

export default firebase;
