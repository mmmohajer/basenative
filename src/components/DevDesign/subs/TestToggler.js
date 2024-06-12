import cx from 'classnames';
import {useState} from 'react';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import Toggler from 'BaseComponents/ReusableComps/Toggler';

import {localStyles} from '../localStyles';

const TestToggler = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Toggler isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default TestToggler;
