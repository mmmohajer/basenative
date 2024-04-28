//https:oblador.github.io/react-native-vector-icons/
//https:github.com/oblador/react-native-vector-icons?tab=readme-ov-file

import {useState, useEffect} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {View, Text} from 'react-native';

import AppView from 'BaseComponents/AppView';
import AppText from 'BaseComponents/AppText';

import {styles, fontStyleFunc} from 'Styles';

import {localStyles} from './localStyles';

const Icon = ({name = 'email', size = 20, color = 'black', ...props}) => {
  return (
    <>
      <AppView
        isCentralizedInX1Dir={true}
        isCentralizedInX2Dir={true}
        {...props}>
        {name === 'email' && (
          <FontAwesome name="envelope" style={{color, fontSize: size}} />
        )}
      </AppView>
    </>
  );
};

export default Icon;
