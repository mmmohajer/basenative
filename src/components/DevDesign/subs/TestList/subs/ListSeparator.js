import {View, Text} from 'react-native';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';

import {styles, fontStyleFunc} from 'Styles';

import {localStyles} from '../../../localStyles';

const ListSeparator = () => {
  return (
    <>
      <AppView heightInSize={4} isFullWidth={true}>
        <AppText>{''}</AppText>
      </AppView>
    </>
  );
};

export default ListSeparator;
