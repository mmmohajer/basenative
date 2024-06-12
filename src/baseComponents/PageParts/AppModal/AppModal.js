import {Modal, SafeAreaView, StatusBar} from 'react-native';
import {useSelector} from 'react-redux';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';

import {isAndroid} from 'Utils/helpers';

import DataSubmittedSuccessfully from './subs/DataSubmittedSuccessfully';
import {localStyles} from './localStyles';

const AppModal = () => {
  const modalType = useSelector(state => state.modalType);
  const modalProps = useSelector(state => state.modalProps);

  return (
    <>
      <Modal
        visible={modalType?.length > 0}
        animationType={modalProps?.animationType || 'slide'}
        transparent={modalProps?.isTransparent || false}>
        <SafeAreaView
          style={{paddingTop: isAndroid() && StatusBar.currentHeight}}>
          {modalType === 'data_submitted_successfully' && (
            <DataSubmittedSuccessfully {...modalProps} />
          )}
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default AppModal;
