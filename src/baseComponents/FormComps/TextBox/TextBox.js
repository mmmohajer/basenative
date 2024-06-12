import cx from 'classnames';
import {TextInput} from 'react-native';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import Icon from 'BaseComponents/ReusableComps/Icon';

import {localStyles} from './localStyles';

const TextBox = ({
  placeholder = '',
  placeholderColor = 'gray',
  val,
  setVal = null,
  onChange = null,
  showClearButton = 'always',
  isSecure = false,
  autoCapitalize = 'none',
  autoFocus = false,
  labelText = '',
  iconName = '',
  iconColor = 'gray',
  iconSize = 20,
  errorMessage = '',
  setErrorMessage = null,
  isMultiLine = false,
  className,
  inputProps,
  ...props
}) => {
  return (
    <>
      <AppView className="m-b-16">
        {labelText && <AppText className="m-b-8 m-r-8">{labelText}</AppText>}
        <AppView
          className={cx(
            'br-silver br-rad-5 br-gray br-all-solid-2 p-l-8 width-per-100',
            className,
          )}
          direction="row"
          {...props}>
          {iconName && (
            <Icon
              name={iconName}
              color={iconColor}
              size={iconSize}
              className="m-r-16"
            />
          )}
          <TextInput
            value={val}
            placeholder={placeholder}
            placeholderTextColor={placeholderColor}
            style={{
              paddingTop: 8,
              paddingBottom: 8,
              flex: 1,
            }}
            onChangeText={text => {
              if (setVal) {
                setVal(text);
              }
              if (setErrorMessage) {
                setErrorMessage('');
              }
              if (onChange) {
                onChange();
              }
            }}
            clearButtonMode={showClearButton}
            secureTextEntry={isSecure}
            autoCapitalize={autoCapitalize}
            autoFocus={autoFocus}
            multiline={isMultiLine}
            {...inputProps}
          />
        </AppView>
        {errorMessage && (
          <AppText className="text-error m-t-8 m-l-8">{errorMessage}</AppText>
        )}
      </AppView>
    </>
  );
};

export default TextBox;
