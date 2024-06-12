import {Switch} from 'react-native';

import {isIOS, isAndroid, getDeviceDimensions} from 'Utils/helpers';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';

import {localStyles} from './localStyles';

const AppSwitch = ({val, setVal, ...props}) => {
  return (
    <>
      <AppView
        marginT={isIOS() && 2}
        marginB={isIOS() && 2}
        widthInSize={isIOS() ? 50 : 35}
        isCentralizedInX1Dir={true}
        isCentralizedInX2Dir={true}
        {...props}>
        <Switch value={val} onValueChange={value => setVal(value)} />
      </AppView>
    </>
  );
};

export default AppSwitch;
