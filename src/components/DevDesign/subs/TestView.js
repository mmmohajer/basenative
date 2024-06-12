import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';

import {localStyles} from '../localStyles';

const TestView = () => {
  return (
    <>
      <AppView
        className="bg-yellow width-200 height-200 br-rad-tl-50 br-rad-tr-20 br-rad-bl-20 br-t-solid-2 br-b-solid-5 br-l-solid-15 br-r-solid-5 br-t-red br-r-green br-b-purple br-l-silver p-all-2 m-all-10 shadow-lg"
        style={{...localStyles.test}}></AppView>
    </>
  );
};

export default TestView;
