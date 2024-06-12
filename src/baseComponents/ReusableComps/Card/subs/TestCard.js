import {useState, useEffect} from 'react';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';

import {localStyles} from './localStyles';

const TestCard = () => {
  return (
    <>
      <AppText
        className="global-test-container"
        textClassName="global-test-text">
        TestCard
      </AppText>
    </>
  );
};

export default TestCard;
