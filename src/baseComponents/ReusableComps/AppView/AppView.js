import {View} from 'react-native';
import cx from 'classnames';

import {applyClassNames} from 'Utils/applyClassNames';

import {localStyles} from './localStyles';

const AppView = ({
  direction,
  hAlign,
  vAlign,
  distributedBetween,
  className = '',
  style,
  props,
  children,
}) => {
  const curStyle = applyClassNames(className);

  // Determine flex direction
  if (direction === 'row') {
    curStyle.flexDirection = 'row';
  } else if (direction === 'column') {
    curStyle.flexDirection = 'column';
  }

  // Determine horizontal alignment
  if (hAlign) {
    if (direction === 'row') {
      curStyle.justifyContent =
        hAlign === 'start'
          ? 'flex-start'
          : hAlign === 'center'
          ? 'center'
          : hAlign === 'end'
          ? 'flex-end'
          : curStyle.justifyContent;
    } else {
      curStyle.alignItems =
        hAlign === 'start'
          ? 'flex-start'
          : hAlign === 'center'
          ? 'center'
          : hAlign === 'end'
          ? 'flex-end'
          : curStyle.alignItems;
    }
  }

  // Determine vertical alignment
  if (vAlign) {
    if (direction === 'row') {
      curStyle.alignItems =
        vAlign === 'start'
          ? 'flex-start'
          : vAlign === 'center'
          ? 'center'
          : vAlign === 'end'
          ? 'flex-end'
          : curStyle.alignItems;
    } else {
      curStyle.justifyContent =
        vAlign === 'start'
          ? 'flex-start'
          : vAlign === 'center'
          ? 'center'
          : vAlign === 'end'
          ? 'flex-end'
          : curStyle.justifyContent;
    }
  }

  // Determine distributed alignment
  if (distributedBetween) {
    curStyle.justifyContent = 'space-between';
  }

  return (
    <>
      <View style={{...curStyle, ...style}} {...props}>
        {children}
      </View>
    </>
  );
};

export default AppView;
