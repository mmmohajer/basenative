import React from 'react';
import cx from 'classnames';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import Card from 'BaseComponents/ReusableComps/Card';

import {CARD_TYPES} from 'Constants/DevDesignVars';

import {localStyles} from '../localStyles';

const TestCard = ({...props}) => {
  return (
    <>
      <AppView
        type="flex"
        hAlign="center"
        vAlign="center"
        className="m-b-32 width-per-100"
        {...props}>
        <AppText className="m-b-8">Type: {CARD_TYPES.serviceTest}</AppText>
        <Card type={CARD_TYPES.test} />
      </AppView>
    </>
  );
};

export default TestCard;
