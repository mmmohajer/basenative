import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';

import {getDeviceDimensions} from 'Utils/helpers';

import DataSubmittedSuccessfully from './subs/DataSubmittedSuccessfully';
import {localStyles} from './localStyles';

const Popup = () => {
  const popupType = useSelector(state => state.popupType);
  const popupProps = useSelector(state => state.popupProps);

  return (
    <>
      <AppView
        hAlign="center"
        vAlign="center"
        className="z-2 width-per-100 pos-abs height-device">
        {popupType === 'data_submitted_successfully' && (
          <DataSubmittedSuccessfully {...popupProps} />
        )}
      </AppView>
    </>
  );
};

export default Popup;
