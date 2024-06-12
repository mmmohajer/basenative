import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';

import {COLORS} from 'Styles/base/appVariables';
import {applyClassNames} from 'Utils/applyClassNames';

import {localStyles} from './localStyles';

const AppTouchable = ({
  type = 'highlight',
  direction,
  hAlign,
  vAlign,
  distributedBetween,
  style,
  className = '',
  children,
  ...props
}) => {
  const appliedStyle = applyClassNames(className);

  // Determine flex direction
  if (direction === 'row') {
    appliedStyle.flexDirection = 'row';
  } else if (direction === 'column') {
    appliedStyle.flexDirection = 'column';
  }

  // Determine horizontal alignment
  if (hAlign) {
    if (direction === 'row') {
      appliedStyle.justifyContent =
        hAlign === 'start'
          ? 'flex-start'
          : hAlign === 'center'
          ? 'center'
          : hAlign === 'end'
          ? 'flex-end'
          : appliedStyle.justifyContent;
    } else {
      appliedStyle.alignItems =
        hAlign === 'start'
          ? 'flex-start'
          : hAlign === 'center'
          ? 'center'
          : hAlign === 'end'
          ? 'flex-end'
          : appliedStyle.alignItems;
    }
  }

  // Determine vertical alignment
  if (vAlign) {
    if (direction === 'row') {
      appliedStyle.alignItems =
        vAlign === 'start'
          ? 'flex-start'
          : vAlign === 'center'
          ? 'center'
          : vAlign === 'end'
          ? 'flex-end'
          : appliedStyle.alignItems;
    } else {
      appliedStyle.justifyContent =
        vAlign === 'start'
          ? 'flex-start'
          : vAlign === 'center'
          ? 'center'
          : vAlign === 'end'
          ? 'flex-end'
          : appliedStyle.justifyContent;
    }
  }

  // Determine distributed alignment
  if (distributedBetween) {
    appliedStyle.justifyContent = 'space-between';
  }

  return (
    <>
      {type === 'highlight' && (
        <TouchableHighlight
          style={{...appliedStyle, ...style}}
          underlayColor={COLORS.themeOne}
          {...props}>
          {children}
        </TouchableHighlight>
      )}

      {type === 'highlight-no-effect' && (
        <TouchableHighlight
          style={{...appliedStyle, ...style}}
          underlayColor="none"
          {...props}>
          {children}
        </TouchableHighlight>
      )}

      {type === 'opacity' && (
        <TouchableOpacity {...props} style={{...appliedStyle, ...style}}>
          {children}
        </TouchableOpacity>
      )}
    </>
  );
};

export default AppTouchable;
