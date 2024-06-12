import cx from 'classnames';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import AppTouchable from 'BaseComponents/ReusableComps/AppTouchable';

import {APP_TOUCHABLE_TYPES} from 'Constants/DevDesignVars';

import {localStyles} from '../localStyles';

const TestAppTouchable = () => {
  return (
    <>
      {Object.keys(APP_TOUCHABLE_TYPES)?.map((item, idx) => (
        <AppTouchable
          key={idx}
          hAlign="center"
          vAlign="center"
          className="width-150 height-80 bg-green m-b-16"
          onPress={() => console.log('Hello')}
          onLongPress={() => console.log('Bye')}
          type={APP_TOUCHABLE_TYPES[item]}>
          <AppText>{item}</AppText>
        </AppTouchable>
      ))}
    </>
  );
};

export default TestAppTouchable;
