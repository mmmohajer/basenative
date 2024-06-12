import {View, Text, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import BaseTemplate from 'BaseComponents/PageParts/BaseTemplate';
import Alert from 'BaseComponents/PageParts/Alert';
import Loading from 'BaseComponents/PageParts/Loading';
import Popup from 'BaseComponents/PageParts/Popup/Popup';
import OfflineNotice from 'BaseComponents/PageParts/OfflineNotice';

import {localStyles} from './localStyles';
import {getDeviceDimensions} from 'Utils/helpers';

const ScreenContainer = ({isScrollable = false, children}) => {
  const loading = useSelector(state => state.loading);
  const notifications = useSelector(state => state.notifications);
  const modalType = useSelector(state => state.modalType);

  return (
    <>
      <BaseTemplate>
        {notifications.length > 0 ? (
          <AppView zIndex={3}>
            <Alert />
          </AppView>
        ) : (
          ''
        )}
        {loading && <Loading />}
        {modalType && <Popup />}
        <AppView
          className=""
          style={{height: getDeviceDimensions()?.screen?.height}}>
          {isScrollable ? <ScrollView>{children}</ScrollView> : children}
        </AppView>
        <AppView zIndex={3}>
          <OfflineNotice />
        </AppView>
      </BaseTemplate>
    </>
  );
};

export default ScreenContainer;
