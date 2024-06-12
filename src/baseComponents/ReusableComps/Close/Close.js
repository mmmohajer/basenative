import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import AppTouchable from 'BaseComponents/ReusableComps/AppTouchable';
import Icon from 'BaseComponents/ReusableComps/Icon';

import {localStyles} from './localStyles';

const Close = ({onPress}) => {
  return (
    <>
      <AppTouchable
        type="highlight-no-effect"
        touchableProps={{onPress}}
        style={{position: 'absolute', top: 5, right: 5}}
        widthInSize={40}
        heightInSize={30}
        isCentralizedInX1Dir
        isCentralizedInX2Dir
        brThickness={2}
        brRad={5}>
        <AppView>
          <Icon name="email" />
        </AppView>
      </AppTouchable>
    </>
  );
};

export default Close;
