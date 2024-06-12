import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import Button from 'BaseComponents/ReusableComps/Button';

import {addAlertItem} from 'Utils/notifications';
import {ALERT_TYPES} from 'Constants/DevDesignVars';

import {localStyles} from '../localStyles';

const EmptyForCopy = () => {
  const dispatch = useDispatch();
  return (
    <>
      <AppView>
        {Object.keys(ALERT_TYPES)?.map((item, idx) => (
          <Button
            key={idx}
            className="m-b-16"
            btnText={`Show Alert of type ${ALERT_TYPES[item]}`}
            onPress={() => {
              addAlertItem(dispatch, 'That is fine!', ALERT_TYPES[item]);
            }}
          />
        ))}
      </AppView>
    </>
  );
};

export default EmptyForCopy;
