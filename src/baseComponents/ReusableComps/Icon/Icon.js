//https:oblador.github.io/react-native-vector-icons/
//https:github.com/oblador/react-native-vector-icons?tab=readme-ov-file
import cx from 'classnames';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';

import {localStyles} from './localStyles';

const Icon = ({name = 'email', size = 20, color = 'black', ...props}) => {
  return (
    <>
      <AppView hAlign="center" vAlign="center" {...props}>
        {name === 'email' && (
          <FontAwesome name="envelope" style={{color, fontSize: size}} />
        )}
      </AppView>
    </>
  );
};

export default Icon;
