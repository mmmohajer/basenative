import cx from 'classnames';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import Icon from 'BaseComponents/ReusableComps/Icon';

import {COLORS} from 'Styles/base/appVariables';
import {LIST_OF_ICONS} from 'Constants/DevDesignVars';

import {localStyles} from '../localStyles';

const TestIcon = () => {
  return (
    <>
      <AppView direction="row" className="flex--wrap">
        {Object.keys(LIST_OF_ICONS)?.map((item, idx) => (
          <Icon
            key={idx}
            name={LIST_OF_ICONS[item]}
            size={50}
            color={COLORS['blue']}
            className="bg-silver width-100 height-100 m-all-16"
          />
        ))}
      </AppView>
    </>
  );
};

export default TestIcon;
