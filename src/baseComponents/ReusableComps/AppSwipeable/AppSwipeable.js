import {View, Text} from 'react-native';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';

import {localStyles} from './localStyles';

const AppSwipeable = ({
  onSwipeRight,
  onSwipeLeft,
  children,
  swipeableProps,
  ...props
}) => {
  return (
    <>
      <AppView {...props}>
        <GestureHandlerRootView>
          <Swipeable
            renderRightActions={onSwipeRight}
            renderLeftActions={onSwipeLeft}
            disableLeftSwipe={true}
            {...swipeableProps}>
            {children}
          </Swipeable>
        </GestureHandlerRootView>
      </AppView>
    </>
  );
};

export default AppSwipeable;
