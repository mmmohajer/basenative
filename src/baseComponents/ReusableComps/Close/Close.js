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
        hAlign="center"
        vAlign="center"
        className="width-40 height-30 bg-blue br-all-solid-2 br-rad-5"
        type="highlight-no-effect"
        onPress={onPress}
        style={{position: 'absolute', top: 5, right: 5}}>
        <AppView>
          <Icon name="email" />
        </AppView>
      </AppTouchable>
    </>
  );
};

export default Close;
