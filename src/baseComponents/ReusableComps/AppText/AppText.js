import {Text} from 'react-native';
import cx from 'classnames';

import AppView from 'BaseComponents/ReusableComps/AppView';

import {applyTextClassNames} from 'Utils/applyClassNames';

import {localStyles} from './localStyles';

const AppText = ({
  textClassName = '',
  children,
  textStyle = {},
  textProps,
  ...props
}) => {
  const curStyle = applyTextClassNames(textClassName);

  return (
    <>
      <AppView {...props}>
        <Text style={{...curStyle, ...textStyle}} {...textProps}>
          {children}
        </Text>
      </AppView>
    </>
  );
};

export default AppText;
