import cx from 'classnames';

import AppTouchable from 'BaseComponents/ReusableComps/AppTouchable';
import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import Icon from 'BaseComponents/ReusableComps/Icon';

import {COLORS} from 'Styles/base/appVariables';

import {localStyles} from './localStyles';

const Button = ({btnText, onPress, onLongPress, iconProps, className}) => {
  return (
    <>
      <AppView direction="row">
        <AppTouchable
          type="highlight"
          onPress={onPress}
          onLongPress={onLongPress ? onLongPress : onPress}>
          <AppView
            direction="row"
            vAlign="center"
            hAlign="center"
            className={cx('bg-theme-one p-y-8 p-x-16 br-rad-4', className)}>
            {iconProps?.iconType ? (
              <>
                <Icon
                  name={iconProps.iconType}
                  size={iconProps?.iconSize ? iconProps.size : 30}
                  color={
                    iconProps?.color ? iconProps.color : COLORS['theme-three']
                  }
                  className="m-r-8"
                />
                <AppText textClassName="f-b upper-case text-white">
                  {btnText}
                </AppText>
              </>
            ) : (
              <AppText textClassName="f-b upper-case text-white">
                {btnText}
              </AppText>
            )}
          </AppView>
        </AppTouchable>
      </AppView>
    </>
  );
};

export default Button;
