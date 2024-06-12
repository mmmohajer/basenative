import {View, Text} from 'react-native';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import AppImagePicker from 'BaseComponents/AppImagePicker';

import {styles, fontStyleFunc} from 'Styles';

import {localStyles} from '../localStyles';

const TestImagePicker = () => {
  return (
    <>
      <AppImagePicker />
    </>
  );
};

export default TestImagePicker;
