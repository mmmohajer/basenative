import cx from 'classnames';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import Button from 'BaseComponents/ReusableComps/Button';

import {BUTTON_TYPES, LIST_OF_ICONS} from 'Constants/DevDesignVars';

import {localStyles} from '../localStyles';

const TestButton = () => {
  return (
    <>
      {Object.keys(BUTTON_TYPES)?.map((item, idx) => (
        <Button
          key={idx}
          btnText={'submit'}
          iconProps={{iconType: LIST_OF_ICONS.email}}
          onPress={() => console.log('Hello')}
          onLongPress={() => console.log('Bye')}
          className="width-300 m-b-16"
        />
      ))}
    </>
  );
};

export default TestButton;
