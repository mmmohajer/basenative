import {useRef, useEffect, useState} from 'react';
import cx from 'classnames';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import AnimatedView from 'BaseComponents/ReusableComps/AnimatedView';
import AppTouchable from 'BaseComponents/ReusableComps/AppTouchable';

import {ANIMATION_DURATION_TIME} from './constants';
import {localStyles} from './localStyles';

const Toggler = ({isActive, setIsActive}) => {
  const [initialTranslateX, setInitialTranslateX] = useState(0);
  const [finalTranslateX, setFinalTranslateX] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (isActive) {
      setInitialTranslateX(0);
      setFinalTranslateX(28);
      setStartAnimation(true);
    } else {
      setInitialTranslateX(28);
      setFinalTranslateX(0);
      setStartAnimation(true);
    }
  }, [isActive]);
  return (
    <>
      <AppTouchable
        className={cx(
          'height-30 width-60 br-rad-20 br-gray br-all-solid-2 shadow-sm',
          isActive ? 'bg-success-two' : 'bg-silver',
        )}
        vAlign="center"
        onPress={() => setIsActive(!isActive)}
        type="highlight-no-effect">
        <AnimatedView
          className="width-30 bg-cyan height-per-100 br-rad-50"
          startAnimation={startAnimation}
          initialTranslateX={initialTranslateX}
          finalTranslateX={finalTranslateX}
          durationTime={ANIMATION_DURATION_TIME}></AnimatedView>
      </AppTouchable>
    </>
  );
};

export default Toggler;
