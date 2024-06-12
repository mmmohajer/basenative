import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';

import AlertContainer from './subs/AlertContainer';
import AlertItem from './subs/AlertItem';
import {localStyles} from './localStyles';

const Alert = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(state => state.notifications);

  const determineNotifColor = notifType => {
    if (notifType === 'success') {
      return 'bg-green';
    } else if (notifType === 'error') {
      return 'bg-red';
    } else if (notifType === 'warning') {
      return 'bg-yellow';
    }
  };

  return (
    <>
      <AlertContainer>
        {notifications?.map((notif, idx) => (
          <AlertItem
            key={notif.key}
            notifKey={notif.key}
            message={notif.message}
            isActive={notif.isActive}
            bgColor={determineNotifColor(notif?.type)}
          />
        ))}
      </AlertContainer>
    </>
  );
};

export default Alert;
