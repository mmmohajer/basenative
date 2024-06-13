import {Provider} from 'react-redux';
import Routes from 'Routes';
import {store} from 'Store';
import {styles} from 'Styles';
import { useEffect } from 'react';
import {PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';

// Initialize Firebase
const initializeFirebase = () => {
  // Your Firebase project configuration
  try
  {
    const firebaseConfig = {
      apiKey: "AIzaSyBonW9claSRcB54cvB1YqMUpburbliT1ZY",
      authDomain: "nativebase-2049c.firebaseapp.com",
      projectId: "nativebase-2049c",
      storageBucket: "nativebase-2049c.appspot.com",
      messagingSenderId: "118642292942",
      appId: "1:118642292942:android:e5fa61193d9b8fe0c8389f",
      //measurementId: "<your-measurement-id>" // Optional
    };
    // Check if Firebase is already initialized
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      var db = firebase.firestore();
    }
  }catch
  {
    console.log('No Firebase :');
  }
 
};
const requestUserPermission = async () => {
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) {
    token = (await messaging().getToken()).toString();
  } else {
    console.log('REQUEST PERMISSION DENIED');
  }
};
const getFCMToken = async () => {
  try {
    await requestUserPermission();
    console.log('Token:', token);
    
  } catch (error) {
    console.error('Error getting new FCM token:', error);
  }
};


const App = () =>{

  useEffect(() => {
    initializeFirebase(); // Initialize Firebase when component mounts
    getFCMToken(); // Get FCM token when component mounts
  }, []);

  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
};

export default App;
