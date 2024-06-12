import {useState, useEffect} from 'react';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';

import {CARD_TYPES} from 'Constants/DevDesignVars';

import TestCard from './subs/TestCard';
import {localStyles} from './localStyles';

const Card = ({type, ...props}) => {
  return <>{type === CARD_TYPES.test && <TestCard {...props} />}</>;
};

export default Card;
