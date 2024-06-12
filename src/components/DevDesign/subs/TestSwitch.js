import {useState} from 'react';
import cx from 'classnames';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import AppSwitch from 'BaseComponents/ReusableComps/AppSwitch';

import {localStyles} from '../localStyles';

const TestSwitch = () => {
  const [chaecked, setChecked] = useState(false);

  return (
    <>
      <AppSwitch val={chaecked} setVal={setChecked} />
    </>
  );
};

export default TestSwitch;
