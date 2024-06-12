import {useState} from 'react';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';

import {MODAL_TYPES} from 'Constants/DevDesignVars';

import DataSubmittedSuccessfully from './subs/DataSubmittedSuccessfully';
import {localStyles} from '../../localStyles';

const DisplayModals = () => {
  return (
    <>
      <AppView
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={'p-all-1 width-per-90 flex--wrap'}>
        {Object.keys(MODAL_TYPES)?.map((item, idx) => {
          if (MODAL_TYPES[item] === MODAL_TYPES.dataSubmittedSuccessfully) {
            return (
              <AppView key={idx} className="m-b-16">
                <DataSubmittedSuccessfully />
              </AppView>
            );
          }
        })}
      </AppView>
    </>
  );
};

export default DisplayModals;
