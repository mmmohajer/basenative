import cx from 'classnames';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import AppTouchable from 'BaseComponents/ReusableComps/AppTouchable';

import {APP_TOUCHABLE_TYPES} from 'Constants/DevDesignVars';

import {localStyles} from '../localStyles';

const TestAppTouchable = () => {
  return (
    <>
      <AppTouchable
        hAlign="center"
        vAlign="center"
        className="width-150 height-80 bg-green"
        onPress={() => console.log('Hello')}
        onLongPress={() => console.log('Bye')}
        type={APP_TOUCHABLE_TYPES['highlight']}>
        <AppText>Hello</AppText>
      </AppTouchable>
    </>
  );
};

export default TestAppTouchable;
