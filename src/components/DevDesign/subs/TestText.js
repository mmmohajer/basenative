import cx from 'classnames';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';

import {isIOS, isAndroid, getDeviceDimensions} from 'Utils/helpers';

import {localStyles} from '../localStyles';

const TestText = () => {
  return (
    <>
      <AppText textClassName={cx('text-red f-b text-lh-40 text-center')}>
        Hello {isIOS() && 'IOS'} {isAndroid() && 'android'}
      </AppText>
      <AppText
        className="p-all-8"
        textProps={{
          numberOfLines: 1,
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </AppText>
      {getDeviceDimensions()?.window?.width >= 400 && <AppText>Yes!!!</AppText>}
    </>
  );
};

export default TestText;
