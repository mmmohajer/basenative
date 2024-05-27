import React, {useState} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import AppText from 'BaseComponents/AppText';
import Button from '../../baseComponents/Button';
import ScreenContainer from 'Components/ScreenContainer';
import PublicRoute from 'Components/PublicRoute';
import {launchImageLibrary as _launchImageLibrary, launchCamera as _launchCamera} from 'react-native-image-picker';
import { justifyContents } from '../../assets/styles/base/vars';
let launchImageLibrary = _launchImageLibrary;
let launchCamera = _launchCamera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 280,
    height: 260,
  },
});

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, handleResponse);
  };

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, handleResponse);
  };

  const handleResponse = (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;
      setSelectedImage(imageUri);
    }
  };
  return (
    <>
      <ScreenContainer isScrollable={false} style={{justifyContent:'center'}}>
        <PublicRoute>
        <View style={styles.container}>
          
          {selectedImage && (
          <Image
            source={{uri: selectedImage}}
            style={styles.logo}
          />
        )}

        <View style={{ marginTop: 20, marginBottom:20,  alignItems:'center'}}>
        <Button btnText="Choose from Device" onPress={openImagePicker}  btnWidthInSize={'300'}/>
        </View>

        <View style={{ marginTop: 20, marginBottom:20,  alignItems:'center'}}>
        <Button btnText="Open Camera" onPress={handleCameraLaunch} btnWidthInSize={'300'} />
        </View>

          {/* <PublicChat /> */}
          {/* <DevDesign /> */}
          </View>
        </PublicRoute>
      </ScreenContainer>
    </>
  );
};
export default Home;

