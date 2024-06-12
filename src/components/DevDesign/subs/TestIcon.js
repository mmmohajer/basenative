import cx from 'classnames';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import Icon from 'BaseComponents/ReusableComps/Icon';

import {COLORS} from 'Styles/base/appVariables';

import {localStyles} from '../localStyles';

const TestIcon = () => {
  return (
    <>
      <Icon
        name="email"
        size={50}
        color={COLORS['theme-one']}
        className="bg-red width-100 height-100 m-all-16"
      />
    </>
  );
};

export default TestIcon;
