import cx from 'classnames';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import AppImage from 'BaseComponents/ReusableComps/AppImage';

import {localStyles} from '../localStyles';

const TestImage = () => {
  return (
    <>
      <AppView direction="row">
        <AppImage
          isFromUri={true}
          src={'https://picsum.photos/id/237/200/300'}
          width={100}
          height={100}
          imgProps={{blurRadius: 2, borderRadius: 150}}
          hAlign="center"
          vAlign="center"
          className="bg-red br-rad-10"
        />

        <AppImage
          isFromUri={false}
          src={require('Images/general/icon.png')}
          imgProps={{
            blurRadius: 5,
          }}
          imgStyle={{width: 100, height: 100, borderRadius: 50}}
          className="bg-blue width-110 m-l-8 height-110 br-rad-55 br-all-solid-10 br-purple"
          hAlign="center"
          vAlign="center"
        />
      </AppView>
    </>
  );
};

export default TestImage;
