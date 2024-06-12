import {View, Text} from 'react-native';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import AppSwipeable from 'BaseComponents/ReusableComps/AppSwipeable';

import {localStyles} from '../localStyles';

const TestSwipeable = () => {
  return (
    <>
      <AppSwipeable
        className="bg-red p-all-16"
        onSwipeRight={() => (
          <AppText className="bg-green p-all-8" hAlign="center" vAlign="center">
            Right
          </AppText>
        )}
        onSwipeLeft={() => (
          <AppText hAlign="center" vAlign="center" className="bg-green p-all-8">
            Left Side
          </AppText>
        )}>
        <AppText className="bg-silver p-all-16">Hello Mohammad</AppText>
      </AppSwipeable>
    </>
  );
};

export default TestSwipeable;
