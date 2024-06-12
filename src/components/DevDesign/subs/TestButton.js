import cx from 'classnames';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import Button from 'BaseComponents/ReusableComps/Button';

import {styles, fontStyleFunc} from 'Styles';

import {localStyles} from '../localStyles';

const TestButton = () => {
  return (
    <>
      <Button
        btnText={'submit'}
        iconProps={{iconType: 'email'}}
        onPress={() => console.log('Hello')}
        onLongPress={() => console.log('Bye')}
        className="width-300"
      />
    </>
  );
};

export default TestButton;
