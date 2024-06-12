import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import Button from 'BaseComponents/ReusableComps/Button';

import {addAlertItem} from 'Utils/notifications';

import {localStyles} from '../localStyles';

const EmptyForCopy = () => {
  const dispatch = useDispatch();
  return (
    <>
      <AppView>
        <Button
          btnText="Show Alert"
          onPress={() => {
            addAlertItem(dispatch, 'That is fine!', 'success');
            addAlertItem(dispatch, 'That is fine!', 'error');
            addAlertItem(dispatch, 'That is fine!', 'warning');
          }}
        />
      </AppView>
    </>
  );
};

export default EmptyForCopy;
