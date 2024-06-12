import {Animated} from 'react-native';
import {useRef, useEffect} from 'react';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';

import {applyClassNames} from 'Utils/applyClassNames';

import {localStyles} from './localStyles';

const AnimatedView = ({
  direction,
  hAlign,
  vAlign,
  distributedBetween,
  durationTime = 1000,
  initialOpacity = null,
  finalOpacity = null,
  initialTranslateX = null,
  finalTranslateX = null,
  initialTranslateY = null,
  finalTranslateY = null,
  initialRotation = null,
  finalRotation = null,
  startAnimation = false,
  setStartAnimation = null,
  className = '',
  children,
  viewProps,
  ...props
}) => {
  const appliedStyle = applyClassNames(className);

  // Determine flex direction
  if (direction === 'row') {
    appliedStyle.flexDirection = 'row';
  } else if (direction === 'column') {
    appliedStyle.flexDirection = 'column';
  }

  // Determine horizontal alignment
  if (hAlign) {
    if (direction === 'row') {
      appliedStyle.justifyContent =
        hAlign === 'start'
          ? 'flex-start'
          : hAlign === 'center'
          ? 'center'
          : hAlign === 'end'
          ? 'flex-end'
          : appliedStyle.justifyContent;
    } else {
      appliedStyle.alignItems =
        hAlign === 'start'
          ? 'flex-start'
          : hAlign === 'center'
          ? 'center'
          : hAlign === 'end'
          ? 'flex-end'
          : appliedStyle.alignItems;
    }
  }

  // Determine vertical alignment
  if (vAlign) {
    if (direction === 'row') {
      appliedStyle.alignItems =
        vAlign === 'start'
          ? 'flex-start'
          : vAlign === 'center'
          ? 'center'
          : vAlign === 'end'
          ? 'flex-end'
          : appliedStyle.alignItems;
    } else {
      appliedStyle.justifyContent =
        vAlign === 'start'
          ? 'flex-start'
          : vAlign === 'center'
          ? 'center'
          : vAlign === 'end'
          ? 'flex-end'
          : appliedStyle.justifyContent;
    }
  }

  // Determine distributed alignment
  if (distributedBetween) {
    appliedStyle.justifyContent = 'space-between';
  }

  const fadeAnim = useRef(new Animated.Value(initialOpacity || 0)).current;
  const translateXAnim = useRef(
    new Animated.Value(initialTranslateX || 0),
  ).current;
  const translateYAnim = useRef(
    new Animated.Value(initialTranslateY || 0),
  ).current;
  const rotationAnim = useRef(new Animated.Value(initialRotation || 0)).current;

  let anmiationStyle = {};

  if (initialOpacity !== finalOpacity) {
    anmiationStyle = {...anmiationStyle, opacity: fadeAnim};
  }

  let transforms = [];

  if (initialTranslateX !== finalTranslateX) {
    transforms.push({translateX: translateXAnim});
  }

  if (initialTranslateY !== finalTranslateY) {
    transforms.push({translateY: translateYAnim});
  }

  const rotationInDeg = rotationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  if (initialRotation !== finalRotation) {
    transforms.push({rotate: rotationInDeg});
  }

  if (
    initialTranslateX !== finalTranslateX ||
    initialTranslateY !== finalTranslateY ||
    initialRotation !== finalRotation
  ) {
    anmiationStyle = {...anmiationStyle, transform: transforms};
  }

  useEffect(() => {
    if (initialOpacity !== finalOpacity && startAnimation) {
      Animated.timing(fadeAnim, {
        toValue: finalOpacity,
        duration: durationTime,
        useNativeDriver: true,
      }).start();
    }
    setTimeout(() => {
      if (setStartAnimation) {
        setStartAnimation(false);
      }
    }, durationTime);
  }, [fadeAnim, startAnimation, initialOpacity, finalOpacity]);

  useEffect(() => {
    if (initialTranslateX !== finalTranslateX && startAnimation) {
      Animated.timing(translateXAnim, {
        toValue: finalTranslateX,
        duration: durationTime,
        useNativeDriver: true,
      }).start();
    }
    setTimeout(() => {
      if (setStartAnimation) {
        setStartAnimation(false);
      }
    }, durationTime);
  }, [translateXAnim, startAnimation, initialTranslateX, finalTranslateX]);

  useEffect(() => {
    if (initialTranslateY !== finalTranslateY && startAnimation) {
      Animated.timing(translateYAnim, {
        toValue: finalTranslateY,
        duration: durationTime,
        useNativeDriver: true,
      }).start();
    }
    setTimeout(() => {
      if (setStartAnimation) {
        setStartAnimation(false);
      }
    }, durationTime);
  }, [translateYAnim, startAnimation, initialTranslateY, finalTranslateY]);

  useEffect(() => {
    if (initialRotation !== finalRotation && startAnimation) {
      Animated.timing(rotationAnim, {
        toValue: finalRotation,
        duration: durationTime,
        useNativeDriver: true,
      }).start();
    }
    setTimeout(() => {
      if (setStartAnimation) {
        setStartAnimation(false);
      }
    }, durationTime);
  }, [rotationAnim, startAnimation, initialRotation, finalRotation]);

  return (
    <>
      <Animated.View
        style={{
          ...appliedStyle,
          ...anmiationStyle,
        }}
        {...viewProps}>
        {children}
      </Animated.View>
    </>
  );
};

export default AnimatedView;
