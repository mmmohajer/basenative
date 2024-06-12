import React from 'react';
import cx from 'classnames';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';

import {MODAL_TYPES, CARD_TYPES} from 'Constants/DevDesignVars';

import TestCard from './subs/TestCard';
import {localStyles} from '../localStyles';

function TestCards() {
  return (
    <>
      <AppView
        hAlign="center"
        vAlign="center"
        className={cx('p-all-8 width-per-90 flex--wrap')}>
        {Object.keys(CARD_TYPES)?.map((item, idx) => {
          if (CARD_TYPES[item] === CARD_TYPES.test) {
            return <TestCard key={idx} />;
          }
        })}
      </AppView>
    </>
  );
}

export default TestCards;
