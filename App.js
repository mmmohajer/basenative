import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PermissionsAndroid} from 'react-native';
import Routes from 'Routes';
import {store} from 'Store';

class App extends Component {
  async componentDidMount() {
    try {
      const cameraPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs access to your camera.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      const storagePermission = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);
      if (
        cameraPermission === PermissionsAndroid.RESULTS.GRANTED &&
        storagePermission['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
        storagePermission['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Camera and storage permissions granted');
      } else {
        console.log('Camera or storage permissions denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
  render() {
    return (
      <>
        <Provider store={store}>
          <Routes />
        </Provider>
      </>
    );
  };
  }
export default App;
